import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
  Easing,
} from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { defaultImages } from "./constants/imageUtils";
import { useUser } from "./context/UserContext"; // Import useUser
import AsyncStorage from "@react-native-async-storage/async-storage";

// Get screen height for calculations
const sampleText = `Welcome to the Public Speaking Practice App!\n\nThis is your teleprompter screen. The text you see here will scroll automatically based on the speed you set.\n\nYou can adjust the scrolling speed using the slider below. Faster speeds mean the text moves quicker, while slower speeds give you more time to read.\n\nFont size can also be adjusted using the 'A-' and 'A+' buttons. Find a size that's comfortable for you to read from a distance.\n\nThe 'Start' button begins the scrolling animation. Once started, it changes to 'Pause', allowing you to temporarily halt the text movement.\n\nThe 'Stop' button will cease the scrolling entirely and reset the text position back to the very beginning.\n\nPractice delivering your speech smoothly and confidently. Remember to maintain eye contact with your imaginary audience and use appropriate gestures.\n\nEffective public speaking is a skill that improves with practice. Use this tool regularly to rehearse your presentations, speeches, or even just talking points for meetings.\n\nTry varying the speed and font size to simulate different conditions or preferences. Good luck with your practice session!\n\nHere is some more text just to ensure the content is long enough to properly test the scrolling functionality across different device heights and font sizes. Keep going, you are doing great! Public speaking can be challenging, but preparation makes a huge difference.\n\nFinal paragraph to fill things out. Focus on clarity, pace, and engagement during your delivery.`;

function TeleprompterScreen({ route, navigation }) {
  // Handle direct text mode for warm-up
  const directText = route.params?.directText;
  
  // Get regular params only if directText is not present
  const { selectedPromptId, categoryPrompts, isNextPromptSequence } = directText
    ? {}
    : route.params || {};

  // Determine mode (Warm-up or Regular)
  const isWarmUpMode = !!directText;

  // --- Find the current prompt's data (only if NOT warm-up mode) ---
  const currentPromptData = useMemo(() => {
    if (isWarmUpMode) return null; // No prompt data needed for warm-up
    return categoryPrompts?.find((p) => p.id === selectedPromptId);
  }, [categoryPrompts, selectedPromptId, isWarmUpMode]);

  const imageSource = isWarmUpMode
    ? null
    : currentPromptData?.image || defaultImages.promptBackground;
  const promptText = isWarmUpMode
    ? directText
    : currentPromptData?.text || "Prompt text not found.";
  const routeLayoutConfig = isWarmUpMode ? null : currentPromptData?.layout;
  const category = isWarmUpMode ? null : currentPromptData?.category;
  const promptId = isWarmUpMode ? null : currentPromptData?.id;

  const [scrollSpeed, setScrollSpeed] = useState(1.0);
  const [fontSize, setFontSize] = useState(20);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollViewRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const animationRef = useRef(null);

  // Practice tracking states
  const [practiceSessionStartTime, setPracticeSessionStartTime] =
    useState(null);
  const [accumulatedPracticeTime, setAccumulatedPracticeTime] = useState(0);

  // Practice session recording
  const { user, updateUserStats, incrementPoints } = useUser();
  const recordPracticeSession = useCallback(async () => {
    if (!user || isWarmUpMode) return; // Don't record warm-up sessions

    try {
      const sessionData = {
        date: new Date().toISOString(),
        category: category || "General",
        promptId: promptId || "unknown",
        promptTitle: currentPromptData?.title || "Unknown Prompt",
      };

      const sessionsKey = `practice_sessions_${user.id}`;
      const existingSessions = await AsyncStorage.getItem(sessionsKey);
      const sessions = existingSessions ? JSON.parse(existingSessions) : [];
      sessions.push(sessionData);

      await AsyncStorage.setItem(sessionsKey, JSON.stringify(sessions));
      console.log("Practice session recorded:", sessionData);
    } catch (error) {
      console.error("Failed to record practice session:", error);
    }
  }, [user, category, promptId, currentPromptData, isWarmUpMode]);

  const practiceRecordedRef = useRef(false); // Ref to prevent multiple recordings per session
  const [reachedEnd, setReachedEnd] = useState(false);

  const soundRef = useRef(new Audio.Sound());
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false); // New state for sound control

  // Reset scroll position to top whenever promptText changes
  useEffect(() => {
    if (
      scrollViewRef.current &&
      typeof scrollViewRef.current.scrollTo === "function"
    ) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
    setIsScrolling(false);
    setReachedEnd(false);
  }, [promptText]);

  useEffect(() => {
    let isMounted = true;
    const initialScrollDelay = 50; // <<< Adjusted to a very short delay (e.g., 50ms)

    async function loadSounds() {
      if (currentPromptData?.soundAsset) {
        const { sound } = await Audio.Sound.createAsync(
          currentPromptData.soundAsset,
          { shouldPlay: true },
          (playbackStatus) => {
            if (!isMounted) return;

            if (!playbackStatus.isLoaded) {
              if (playbackStatus.error) {
                console.log(
                  `Encountered a fatal error during playback: ${playbackStatus.error}`
                );
              }
              return;
            }

            // Update sound playing state
            setIsSoundPlaying(playbackStatus.isPlaying);

            if (playbackStatus.isPlaying && !hasStartedPlaying) {
              setHasStartedPlaying(true);
              // REMOVED: Automatic scrolling when audio starts
              // The user should control scrolling manually with the play/pause button
            }

            if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
              if (!reachedEnd) {
                setReachedEnd(true);
                console.log("finished audio");
              }
              setIsSoundPlaying(false);
            }
          }
        );
        soundRef.current = sound;
        
        // Start scrolling automatically when sound loads (if no sound, scroll starts immediately below)
        if (!isScrolling) {
          console.log(`TeleprompterScreen: Audio loaded, starting auto-scroll in ${initialScrollDelay}ms`);
          setTimeout(() => {
            if (isMounted) {
              console.log("TeleprompterScreen: Auto-scroll delay complete, setting isScrolling to true");
              setIsScrolling(true);
            }
          }, initialScrollDelay);
        }
      } else {
        // No audio case - start scrolling automatically
        if (!isScrolling) {
          console.log(`TeleprompterScreen: No audio, queueing auto-scroll in ${initialScrollDelay}ms`);
          setTimeout(() => {
            if (isMounted) {
              console.log("TeleprompterScreen: No-audio auto-scroll delay complete, setting isScrolling to true");
              setIsScrolling(true);
            }
          }, initialScrollDelay);
        }
      }
    }

    loadSounds();

    return () => {
      isMounted = false;
      stopAllSounds();
      soundRef.current?.unloadAsync();

      // Save any accumulated time from the final session segment
      let finalDuration = accumulatedPracticeTime;
      if (practiceSessionStartTime) {
        finalDuration += Date.now() - practiceSessionStartTime;
      }
      savePracticeTime(finalDuration);
    };
  }, []);

  const stopAllSounds = async () => {
    await soundRef.current?.stopAsync();
  };

  // --- ADD EFFECT TO SAVE LAST PROMPT ID ---
  useEffect(() => {
    const saveLastPrompt = async () => {
      // Only save if it's a regular prompt (not warm-up) and we have an ID
      if (!isWarmUpMode && selectedPromptId) {
        try {
          await AsyncStorage.setItem("@lastPromptId", selectedPromptId);
        } catch (e) {
          console.error("Failed to save last prompt ID to AsyncStorage.", e);
        }

        // <<< Logic to update Practice History List >>>
        if (selectedPromptId) {
          // Check again to be safe
          try {
            const MAX_HISTORY_ITEMS = 10; // Changed from 5 to 10
            // Get current list
            const historyJson = await AsyncStorage.getItem(
              "@practiceHistoryIds"
            ); // Changed key
            let historyIds = historyJson ? JSON.parse(historyJson) : [];

            // Remove the current prompt if it already exists to avoid duplicates and move it to the front
            historyIds = historyIds.filter((id) => id !== selectedPromptId);

            // Add the current prompt ID to the beginning of the list
            historyIds.unshift(selectedPromptId);

            // Limit the list size
            if (historyIds.length > MAX_HISTORY_ITEMS) {
              historyIds = historyIds.slice(0, MAX_HISTORY_ITEMS);
            }

            // Save the updated list
            await AsyncStorage.setItem(
              "@practiceHistoryIds",
              JSON.stringify(historyIds)
            ); // Changed key
            console.log(
              "Updated practice history list in AsyncStorage:",
              historyIds
            );
          } catch (e) {
            console.error("Failed to update practice history list.", e);
          }
        }
        // <<< END Practice History List Update >>>
      }
    };
    saveLastPrompt();
  }, [selectedPromptId, isWarmUpMode]); // Re-run if prompt ID or mode changes

  useEffect(() => {
    const initialPos = 0;
    scrollY.setValue(initialPos);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: initialPos, animated: false });
    }
  }, [contentHeight, containerHeight]);

  useEffect(() => {
    if (
      isScrolling &&
      contentHeight > 0 &&
      containerHeight > 0 &&
      contentHeight > containerHeight
    ) {
      const currentScrollY = scrollY._value;
      const targetScrollY = Math.max(0, contentHeight - containerHeight);

      // If we are already at or past the target end, stop
      if (currentScrollY >= targetScrollY - 1) {
        // Small threshold
        console.log("Animation already at or past target end. Stopping.");
        setIsScrolling(false);
        return;
      }

      // Calculate remaining distance
      const remainingDistance = targetScrollY - currentScrollY;
      const pixelsPerSecond = scrollSpeed * 35; // Changed from 50 to 35
      const duration = Math.max(
        (remainingDistance / pixelsPerSecond) * 1000,
        1
      ); // Ensure duration is positive

      // Stop previous animation if any
      if (animationRef.current) {
        animationRef.current.stop();
      }

      // Create and start the timing animation
      const animation = Animated.timing(scrollY, {
        toValue: targetScrollY,
        duration: duration,
        useNativeDriver: false,
        easing: Easing.linear,
      });
      animationRef.current = animation;
      animationRef.current.start(async ({ finished }) => {
        animationRef.current = null; // Clear ref after animation finishes or stops

        // Check if animation was stopped or finished naturally
        if (finished) {
          console.log("Animation finished naturally.");
          setIsScrolling(false);
          setReachedEnd(true);
          // Stop all sounds when animation finishes naturally
          stopAllSounds();

          // Record practice session completion
          if (!practiceRecordedRef.current) {
            recordPracticeSession();
            practiceRecordedRef.current = true;
          }
        }
      });
    } else if (!isScrolling && animationRef.current) {
      console.log("Pausing/Stopping animation via isScrolling=false.");
      animationRef.current.stop();
    }

    // Reset recorded flag when starting scroll (or maybe on mount?)
    // Resetting here ensures it records if user scrolls to end multiple times without unmounting
    practiceRecordedRef.current = false;

    return () => {
      if (animationRef.current) {
        console.log("Cleanup: Stopping animation.");
        animationRef.current.stop();
        animationRef.current = null;
      }
    };
  }, [
    isScrolling,
    scrollSpeed,
    contentHeight,
    containerHeight,
    recordPracticeSession,
  ]); // Add recordPracticeSession dependency

  // --- NEW useEffect to handle scrolling based on isScrolling state ---
  useEffect(() => {
    if (isScrolling) {
      const currentPosition = scrollY._value;
      console.log(`Effect: Starting scroll from position ${currentPosition}`);
      startScrolling(currentPosition);
    } else {
      pauseScrolling();
    }
  }, [isScrolling, startScrolling, pauseScrolling]); // Dependencies

  // --- ScrollView Position Update Listener ---
  /* DEBUG: Disable scroll listener */
  useEffect(() => {
    const listenerId = scrollY.addListener(({ value }) => {
      if (scrollViewRef.current) {
        // Use the animated value to manually set the scroll position
        scrollViewRef.current.scrollTo({ y: value, animated: false });
      }
    });
    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY]);
  /* */

  // --- Save accumulated time on unmount or navigation ---
  const savePracticeTime = useCallback(
    async (sessionDurationMs) => {
      if (sessionDurationMs <= 0) return; // Don't save if no time tracked
      try {
        const existingTimeStr = await AsyncStorage.getItem(
          "@totalPracticeTimeSeconds"
        );
        const existingTimeSec = existingTimeStr
          ? parseInt(existingTimeStr, 10)
          : 0;
        const sessionTimeSec = Math.round(sessionDurationMs / 1000);
        const newTotalTimeSec = existingTimeSec + sessionTimeSec;
        await AsyncStorage.setItem(
          "@totalPracticeTimeSeconds",
          newTotalTimeSec.toString()
        );
        console.log(
          `Saved practice time. Session: ${sessionTimeSec}s, New Total: ${newTotalTimeSec}s`
        );

        // Optionally update context/backend immediately (if updateUserStats exists)
        if (updateUserStats) {
          updateUserStats({ totalPracticeTime: newTotalTimeSec });
        }
      } catch (e) {
        console.error("Failed to save total practice time.", e);
      }
    },
    [updateUserStats]
  );

  // --- Scroll Logic ---
  const startScrolling = useCallback(
    (fromPosition = 0) => {
      // Calculate target scroll position (end of content)
      const targetScrollY = Math.max(0, contentHeight - containerHeight);

      // If already at or past the target, don't scroll
      if (fromPosition >= targetScrollY - 1) {
        // Small threshold
        console.log(
          "StartScroll: Already at or past target end. No scroll needed."
        );
        // Still start the timer if it wasn't already running
        if (!practiceSessionStartTime) {
          setPracticeSessionStartTime(Date.now());
          console.log("Practice timer started (no scroll needed)");
        }
        return; // Exit the function
      }

      // Calculate remaining distance
      const remainingDistance = targetScrollY - fromPosition;
      const pixelsPerSecond = scrollSpeed * 35; // Changed from 50 to 35
      const duration = Math.max(
        (remainingDistance / pixelsPerSecond) * 1000,
        1
      ); // Duration in ms, ensure positive

      console.log(
        `StartScroll: From=${fromPosition.toFixed(
          2
        )}, Target=${targetScrollY.toFixed(
          2
        )}, Remaining=${remainingDistance.toFixed(
          2
        )}, Duration=${duration.toFixed(0)}ms`
      );

      // Check if duration is valid before starting animation
      if (duration > 0) {
        // Clear previous animation if any
        if (animationRef.current) {
          animationRef.current.stop();
          console.log("StartScroll: Stopped previous animation.");
        }

        // <<< START tracking time when scrolling starts >>>
        if (!practiceSessionStartTime) {
          // Only set start time if not already running
          setPracticeSessionStartTime(Date.now());
          console.log("Practice timer started");
        }
        // <<< END tracking time >>>

        // Create and start the timing animation
        const animation = Animated.timing(scrollY, {
          toValue: targetScrollY,
          duration: duration, // Use the calculated duration
          useNativeDriver: false,
          easing: Easing.linear,
        });
        animationRef.current = animation;
        animationRef.current.start(async ({ finished }) => {
          animationRef.current = null; // Clear ref after animation finishes or stops
          if (finished) {
            console.log("Animation finished naturally.");
            setIsScrolling(false); // Update state when finished.
            setReachedEnd(true);
            stopAllSounds();
            // Record practice session completion and increment points
            if (!practiceRecordedRef.current && !isWarmUpMode) {
              recordPracticeSession();
              practiceRecordedRef.current = true;
            }
          } else {
            console.log("Animation stopped/interrupted before finishing.");
            // Don't set isScrolling false here, pause button/stop button handles that
          }
        });
      } else {
        console.log(
          "StartScroll: Calculated duration is zero or negative. No scroll started."
        );
        // Even if no scroll, mark practice session as started if button pressed
        if (!practiceSessionStartTime) {
          setPracticeSessionStartTime(Date.now());
          console.log("Practice timer started (no scroll needed)");
        }
      }
    },
    [
      scrollY,
      containerHeight,
      contentHeight,
      scrollSpeed,
      practiceSessionStartTime,
      recordPracticeSession,
      animationRef,
    ]
  ); // Added dependencies

  const pauseScrolling = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null; // Clear the animation ref
      // <<< PAUSE tracking time >>>
      if (practiceSessionStartTime) {
        const duration = Date.now() - practiceSessionStartTime;
        setAccumulatedPracticeTime((prev) => prev + duration);
        setPracticeSessionStartTime(null); // Reset start time
        console.log(
          `Practice timer paused. Added ${duration}ms. Total session: ${
            accumulatedPracticeTime + duration
          }ms`
        );
      }
      // <<< END PAUSE tracking time >>>
    }
  }, [practiceSessionStartTime, accumulatedPracticeTime]); // Added dependencies

  const stopScrolling = useCallback(async () => {
    console.log("Stopping scroll and saving time...");
    setIsScrolling(false);

    try {
      if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current = null;
        console.log("Animation stopped successfully.");
      } else {
        console.log("No active animation to stop.");
      }
    } catch (error) {
      console.error("Error stopping animation:", error);
      animationRef.current = null; // Ensure ref is cleared even if stop fails
    }

    // <<< STOP tracking time and SAVE >>>
    let finalDuration = accumulatedPracticeTime;
    if (practiceSessionStartTime) {
      finalDuration += Date.now() - practiceSessionStartTime;
      console.log(
        `Practice timer stopped. Added ${
          Date.now() - practiceSessionStartTime
        }ms.`
      );
    }
    console.log(`Total session duration: ${finalDuration}ms`);
    setAccumulatedPracticeTime(0); // Reset accumulator for this screen instance
    setPracticeSessionStartTime(null); // Reset start time
    // Save the total duration for this session
    await savePracticeTime(finalDuration);
    // <<< END STOP tracking time >>>

    scrollY.setValue(0); // Reset scroll position
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
    // Potentially trigger recording practice session here too?
    // Or rely on leaving the screen?
    if (!isWarmUpMode && !practiceRecordedRef.current) {
      recordPracticeSession(); // Record the practice
      practiceRecordedRef.current = true;
    }
  }, [
    scrollY,
    recordPracticeSession,
    isWarmUpMode,
    accumulatedPracticeTime,
    practiceSessionStartTime,
    savePracticeTime,
  ]); // Added dependencies

  const handleStartPause = async () => {
    // This function now only controls scrolling
    if (isScrolling) { // If currently scrolling, PAUSE
      setIsScrolling(false);
      // Time tracking for pause is handled by pauseScrolling() which is triggered by useEffect on isScrolling change
    } else { // If currently PAUSED, PLAY
      if (reachedEnd) { // If was at the end, restart everything
        if (scrollViewRef.current) { // Reset scroll position visually
            scrollViewRef.current.scrollTo({ y: 0, animated: false });
        }
        scrollY.setValue(0); // Reset animated scroll value
        setReachedEnd(false);
        practiceRecordedRef.current = false; // Allow re-recording if they play again
      }
      setIsScrolling(true);
      // Time tracking for start is handled by startScrolling() which is triggered by useEffect on isScrolling change
    }
  };

  // New function to handle sound control
  const handleSoundToggle = async () => {
    const status = await soundRef.current?.getStatusAsync();
    
    // If no sound is loaded, do nothing
    if (!status || !status.isLoaded) {
      console.log("No sound loaded to control");
      return;
    }

    if (isSoundPlaying) {
      // Pause the sound
      await soundRef.current?.pauseAsync();
      setIsSoundPlaying(false);
    } else {
      // Play or resume the sound
      if (status.positionMillis === status.durationMillis && status.durationMillis > 0) {
        // Sound has finished, restart from beginning
        await soundRef.current?.setPositionAsync(0);
      }
      await soundRef.current?.playAsync();
      setIsSoundPlaying(true);
      
      if (!hasStartedPlaying) {
        setHasStartedPlaying(true);
      }
    }
  };

  // Refactored: Instantly reset scroll position and animation before navigating to next prompt
  const handleNextPrompt = React.useCallback(async () => {
    stopAllSounds();
    // Instantly reset scroll position and cancel animation
    if (
      scrollViewRef.current &&
      typeof scrollViewRef.current.scrollTo === "function"
    ) {
      scrollViewRef.current.scrollTo({ y: 0, animated: false });
    }
    if (animationRef.current && animationRef.current.stop) {
      animationRef.current.stop();
    }
    setIsScrolling(false);
    setReachedEnd(false);
    practiceRecordedRef.current = false;
    setAccumulatedPracticeTime(0);
    setPracticeSessionStartTime(null);

    if (isWarmUpMode || !categoryPrompts || categoryPrompts.length === 0) {
      console.log(
        "Cannot go to next prompt in warm-up mode or if no category prompts."
      );
      navigation.navigate("PracticeTab", { screen: "CategorySelection" });
      return;
    }

    const currentIndex = categoryPrompts.findIndex(
      (p) => p.id === selectedPromptId
    );
    const nextIndex = (currentIndex + 1) % categoryPrompts.length; // Loop back to the start
    const nextPrompt = categoryPrompts[nextIndex];

    if (nextPrompt && nextPrompt.id !== selectedPromptId) {
      console.log(
        `Navigating to PrePractice for next prompt: ${nextPrompt.title}`
      );
      navigation.push("PrePractice", {
        selectedPrompt: nextPrompt,
        categoryPrompts: categoryPrompts,
        isFromNextPrompt: true,
      });
    } else if (
      nextPrompt &&
      nextPrompt.id === selectedPromptId &&
      categoryPrompts.length === 1
    ) {
      console.log(
        "Only one prompt in category, cannot go to next. Returning to category selection."
      );
      navigation.navigate("PracticeTab", { screen: "CategorySelection" });
    } else {
      console.log(
        "Could not determine next prompt or no other prompts available."
      );
      navigation.navigate("PracticeTab", { screen: "CategorySelection" });
    }
  }, [
    stopAllSounds,
    scrollViewRef,
    animationRef,
    setIsScrolling,
    setReachedEnd,
    practiceRecordedRef,
    setAccumulatedPracticeTime,
    setPracticeSessionStartTime,
    isWarmUpMode,
    categoryPrompts,
    selectedPromptId,
    navigation,
  ]);

  const handleGoBack = async () => {
    stopAllSounds(); // Stop all sounds before navigation
    await stopScrolling(); // Stop scroll, save time

    const { isNextPromptSequence } = route.params || {};

    if (isNextPromptSequence) {
      // Navigated here via "Next Prompt". Pop current Teleprompter, its PrePractice, and the previous Teleprompter.
      // This should land on the PrePractice of the *previous* prompt.
      if (navigation.canGoBack()) { // Check if we can pop 3 times
        const state = navigation.getState();
        if (state && state.routes.length > 3) {
            navigation.pop(3);
        } else {
            // Not enough screens to pop 3, fallback to categories or prompt selection
            // This case might indicate a direct deep link or an unexpected stack
            console.warn("Teleprompter: Not enough screens in stack to pop(3) for isNextPromptSequence. Navigating to CategorySelection.");
            navigation.navigate("PracticeTab", { screen: "CategorySelection" });
        }
      } else {
         // Fallback if cannot go back further (e.g., stack is too shallow)
         navigation.navigate("PracticeTab", { screen: "CategorySelection" });
      }
    } else {
      // This was the first prompt viewed in a sequence. Go back to its PrePractice screen.
      navigation.goBack();
    }
  };

  const handleGoToCategories = async () => {
    stopAllSounds(); // Stop all sounds before navigation
    await stopScrolling(); // Stop scroll, save time
    navigation.navigate("PracticeTab", { screen: "CategorySelection" });
  };

  // --- Determine Text Overlay Style ---
  // Use default or dynamic style, but ensure background is appropriate for warm-up
  const textOverlayStyle = {
    ...defaultLayoutConfig,
    ...(routeLayoutConfig || {}),
    // Override background for warm-up mode to ensure visibility
    backgroundColor: isWarmUpMode
      ? "rgba(0,0,0,0.8)"
      : routeLayoutConfig?.backgroundColor ||
        defaultLayoutConfig.backgroundColor,
  };

  // Determine text color for warm-up
  const dynamicTextStyle = isWarmUpMode
    ? styles.promptTextWhite // Always white for warm-up on dark overlay
    : currentPromptData?.textColor === "white"
    ? styles.promptTextWhite
    : styles.promptTextDefault;

  // --- Determine Control Bar Style ---
  const controlsStyle = [
    styles.controlsContainer, // Base style
    imageSource && !isWarmUpMode // Apply override only if image exists and not in warm-up mode
      ? { backgroundColor: "rgba(255, 255, 255, 0.1)" } // Minimally visible white background
      : {}, // Otherwise, use the default (semi-transparent black) from styles.controlsContainer
  ];

  return (
    <View style={styles.container}>
      {imageSource && (
        <Image source={imageSource} style={styles.backgroundImageElement} />
      )}
      <View style={styles.contentWrapper}>
        <View style={textOverlayStyle}>
          <Animated.ScrollView
            ref={scrollViewRef}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
            onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
            onContentSizeChange={(width, height) => setContentHeight(height)}
            scrollEventThrottle={16}
            overScrollMode="never"
          >
            <View style={styles.gradientOverlay} pointerEvents="none">
              {/* Gradient for readability */}
            </View>
            <Text style={dynamicTextStyle}>{promptText}</Text>
          </Animated.ScrollView>
        </View>

        <View style={controlsStyle}>
          <View style={styles.actionButtons}>
            {/* Home */}
            <TouchableOpacity
              onPress={handleGoToCategories}
              style={styles.iconButton}
            >
              <Ionicons name="home-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Previous */}
            <TouchableOpacity onPress={handleGoBack} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Play | Pause Button for Scrolling */}
            <TouchableOpacity
              onPress={handleStartPause}
              style={styles.iconButton}
            >
              <Ionicons
                name={isScrolling ? "pause" : "play"}
                size={24}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            {/* Sound Control Button */}
            {currentPromptData?.soundAsset && (
              <TouchableOpacity
                onPress={handleSoundToggle}
                style={styles.iconButton}
              >
                <Ionicons
                  name={isSoundPlaying ? "volume-high" : "volume-mute"}
                  size={24}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            )}

            {/* Conditionally render Next button (only if NOT warm-up) */}
            {!isWarmUpMode && categoryPrompts && categoryPrompts.length > 1 && (
              <TouchableOpacity
                onPress={handleNextPrompt}
                style={styles.iconButton}
              >
                <Ionicons name="arrow-forward" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
    pointerEvents: "none",
    backgroundColor: "transparent",
    // You can use expo-linear-gradient for a real gradient
  },

  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  backgroundImageElement: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  contentWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    // Removed padding to fix absolute positioning origin
    // paddingTop: '10%',
    // paddingBottom: '5%',
    // paddingHorizontal: '5%',
  },
  textOverlay: {
    width: "60%",
    height: "40%",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    marginBottom: 10,
    marginLeft: "-5%",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollViewContent: {
    paddingBottom: 50,
    paddingHorizontal: 10, // Added horizontal padding for text
  },
  promptTextDefault: {
    color: "#000000",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "500",
    letterSpacing: 0.2,
    zIndex: 2,
  },
  promptTextWhite: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "500",
    letterSpacing: 0.2,
    zIndex: 2,
  },
  controlsContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  controlLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 5,
  },
  slider: {
    width: "90%",
    height: 40,
    marginBottom: 10,
  },
  fontSizeControls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    width: "60%",
  },
  fontSizeDisplay: {
    color: "#FFFFFF",
    fontSize: 16,
    marginHorizontal: 15,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 40,
  },
  iconButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "rgba(0, 122, 255, 0.92)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 6.22,
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  // End Countdown Timer Styles
  iconButtonPlaceholder: {
    // Style to maintain layout spacing when next button is hidden
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

// Default layout config (cleaned up)
const defaultLayoutConfig = {
  backgroundColor: "rgba(255,255,255,0.9)", // Example default (slightly transparent white)
  padding: 15, // Internal padding within the text overlay
  borderRadius: 10,
  overflow: "hidden", // Keep overflow hidden
};

export default TeleprompterScreen;