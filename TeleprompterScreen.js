import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Easing,
  Button,
} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { defaultImages } from './constants/imageUtils';
import { useUser } from './context/UserContext'; // Import useUser
import AsyncStorage from '@react-native-async-storage/async-storage'; // <<< ADD THIS IMPORT

// Get screen height for calculations
const { height: screenHeight } = Dimensions.get('window');

// Sample prompt text (long enough to require scrolling)
const sampleText = `Welcome to the Public Speaking Practice App!

This is your teleprompter screen. The text you see here will scroll automatically based on the speed you set.

You can adjust the scrolling speed using the slider below. Faster speeds mean the text moves quicker, while slower speeds give you more time to read.

Font size can also be adjusted using the 'A-' and 'A+' buttons. Find a size that's comfortable for you to read from a distance.

The 'Start' button begins the scrolling animation. Once started, it changes to 'Pause', allowing you to temporarily halt the text movement.

The 'Stop' button will cease the scrolling entirely and reset the text position back to the very beginning.

Practice delivering your speech smoothly and confidently. Remember to maintain eye contact with your imaginary audience and use appropriate gestures.

Effective public speaking is a skill that improves with practice. Use this tool regularly to rehearse your presentations, speeches, or even just talking points for meetings.

Try varying the speed and font size to simulate different conditions or preferences. Good luck with your practice session!

Here is some more text just to ensure the content is long enough to properly test the scrolling functionality across different device heights and font sizes. Keep going, you are doing great! Public speaking can be challenging, but preparation makes a huge difference.

Final paragraph to fill things out. Focus on clarity, pace, and engagement during your delivery.`;

// Define which prompts should have clapping
const CLAPPING_PROMPT_IDS = ['prompt2', 'prompt4', 'prompt6', 'prompt7', 'prompt8'];

// Cache for sound objects to avoid reloading
const soundCache = {};

function TeleprompterScreen({ route, navigation }) {
  // --- Get data passed from navigation ---
  // Check for directText first
  const directText = route.params?.directText;
  // Get regular params only if directText is not present
  const { selectedPromptId, categoryPrompts } = directText ? {} : route.params || {};
  
  // Determine mode (Warm-up or Regular)
  const isWarmUpMode = !!directText;

  // --- Find the current prompt's data (only if NOT warm-up mode) ---
  const currentPromptData = useMemo(() => {
    if (isWarmUpMode) return null; // No prompt data needed for warm-up
    return categoryPrompts?.find(p => p.id === selectedPromptId);
  }, [categoryPrompts, selectedPromptId, isWarmUpMode]);

  // --- Determine Image Source ---
  const imageSource = isWarmUpMode ? null : (currentPromptData?.image || defaultImages.promptBackground);
  
  // --- Determine Initial Text ---
  const initialPromptText = isWarmUpMode ? directText : (currentPromptData?.text || 'Prompt text not found.');
  
  // --- Determine Layout Config (Not used in warm-up) ---
  const routeLayoutConfig = isWarmUpMode ? null : currentPromptData?.layout;

  // --- Logging ---
  console.log("--- TeleprompterScreen Rendering ---");
  if (isWarmUpMode) {
    console.log("Mode: Warm-up");
    console.log("Text:", directText);
  } else {
    console.log("Mode: Regular Prompt");
    console.log("Selected Prompt ID:", selectedPromptId);
    console.log("Layout Config Used:", JSON.stringify(routeLayoutConfig, null, 2));
  }
  // --- End Logging ---

  const [promptText] = useState(initialPromptText || sampleText); // Use selected or fallback
  const [isScrolling, setIsScrolling] = useState(false); // Start paused until countdown finishes
  const [scrollSpeed, setScrollSpeed] = useState(1.0); // Keep speed control logic
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const animationRef = useRef(null);
  const [sound, setSound] = useState(); // Clapping sound state
  const [raceSound, setRaceSound] = useState(); // Race noise sound state
  const [roomSound, setRoomSound] = useState(); // Room sound state
  const [speechSound, setSpeechSound] = useState(); // New state for speech sound
  const [interviewSound, setInterviewSound] = useState(); // Add state for interview sound
  const [vcSound, setVcSound] = useState(); // Add state for VC sound
  const [countdown, setCountdown] = useState(4); // Increased countdown to allow for sound loading
  const [showCountdown, setShowCountdown] = useState(false); // Start hidden until sounds are loaded
  const [soundsNeeded, setSoundsNeeded] = useState({
    clapping: false,
    race: true, // Always need race sound now
    room: false,
    speech: false,
    interview: false,
    vc: false, // Add vc key
  });
  const [soundsLoaded, setSoundsLoaded] = useState(false); // Add state to track if sounds are loaded
  const [practiceSessionStartTime, setPracticeSessionStartTime] = useState(null); // <<< Track start time of active scrolling
  const [accumulatedPracticeTime, setAccumulatedPracticeTime] = useState(0); // <<< Track session duration in ms
  const { recordPracticeSession, updateUserStats } = useUser(); // Get the function from context and updateUserStats
  const practiceRecordedRef = useRef(false); // Ref to prevent multiple recordings per session
  const isUnmountingRef = useRef(false); // <<< Ref to track if component is unmounting

  // --- ADD EFFECT TO SAVE LAST PROMPT ID ---
  useEffect(() => {
    const saveLastPrompt = async () => {
      // Only save if it's a regular prompt (not warm-up) and we have an ID
      if (!isWarmUpMode && selectedPromptId) {
        try {
          await AsyncStorage.setItem('@lastPromptId', selectedPromptId);
          console.log('Saved last prompt ID to AsyncStorage:', selectedPromptId);
        } catch (e) {
          console.error('Failed to save last prompt ID to AsyncStorage.', e);
        }

        // <<< ADD LOGIC TO UPDATE RECENT PROMPTS LIST >>>
        if (selectedPromptId) { // Check again to be safe
          try {
            const MAX_RECENT = 5; // Keep the last 5 prompts
            // Get current list
            const recentJson = await AsyncStorage.getItem('@recentPromptIds');
            let recentIds = recentJson ? JSON.parse(recentJson) : [];

            // Remove the current prompt if it already exists to avoid duplicates and move it to the front
            recentIds = recentIds.filter(id => id !== selectedPromptId);

            // Add the current prompt ID to the beginning of the list
            recentIds.unshift(selectedPromptId);

            // Limit the list size
            if (recentIds.length > MAX_RECENT) {
              recentIds = recentIds.slice(0, MAX_RECENT);
            }

            // Save the updated list
            await AsyncStorage.setItem('@recentPromptIds', JSON.stringify(recentIds));
            console.log('Updated recent prompts list:', recentIds);

          } catch (e) {
            console.error('Failed to update recent prompts list.', e);
          }
        }
        // <<< END RECENT PROMPTS UPDATE >>>
      }
    };
    saveLastPrompt();
  }, [selectedPromptId, isWarmUpMode]); // Re-run if prompt ID or mode changes
  // --- END SAVE LAST PROMPT ID EFFECT ---

  // Determine which sounds to load based on prompt type
  useEffect(() => {
    if (isWarmUpMode) {
      // For warm-up, we likely only need minimal sounds
      setSoundsNeeded({
        clapping: false,
        race: true, // Enable race sound for warm-up too
        room: true, // Basic ambient sound
        speech: false,
        interview: false,
        vc: false, // VC sound not needed for warm-up
      });
    } else if (currentPromptData) {
      // For regular prompts, determine based on category/id
      const needsClapping = CLAPPING_PROMPT_IDS.includes(selectedPromptId);
      const category = currentPromptData.category || ''; // Get original category name
      const categoryLower = category.toLowerCase(); // Use lowercase for broader checks if needed
      
      setSoundsNeeded({
        clapping: needsClapping,
        race: true, 
        room: true, 
        speech: categoryLower.includes('speech'), // Keep broader check for speech
        interview: categoryLower.includes('interview'), // Keep broader check for interview
        vc: category === 'Virtual Communication', // <<< Use exact case-sensitive check for VC
      });
    }
  }, [isWarmUpMode, currentPromptData, selectedPromptId]);

  // --- Helper function to stop all sounds ---
  const stopAllSounds = useCallback(async () => {
    console.log("Stopping all sounds...");
    if (sound && (await sound.getStatusAsync()).isPlaying) {
      await sound.stopAsync();
      console.log("Stopped Clapping Sound");
    }
    if (raceSound && (await raceSound.getStatusAsync()).isPlaying) {
      await raceSound.stopAsync();
      console.log("Stopped Race Sound");
    }
    if (roomSound && (await roomSound.getStatusAsync()).isPlaying) {
      await roomSound.stopAsync();
      console.log("Stopped Room Sound");
    }
    if (speechSound && (await speechSound.getStatusAsync()).isPlaying) {
      await speechSound.stopAsync();
      console.log("Stopped Speech Sound");
    }
    if (interviewSound && (await interviewSound.getStatusAsync()).isPlaying) {
      await interviewSound.stopAsync();
      console.log("Stopped Interview Sound");
    }
    if (vcSound && (await vcSound.getStatusAsync()).isPlaying) {
      await vcSound.stopAsync();
      console.log("Stopped VC Sound");
    }
  }, [sound, raceSound, roomSound, speechSound, interviewSound, vcSound]);

  // --- Load Sound Effect ---
  useEffect(() => {
    // --- Configure Audio Session ---
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      staysActiveInBackground: false,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    }).catch(error => {
      console.error('Failed to set audio mode', error);
    });
    // --- End Audio Session Configuration ---

    async function loadSounds() {
      console.log('Loading Sounds (optimized)');
      try {
        // Only load sounds needed for this prompt type
        if (soundsNeeded.clapping) {
          if (!soundCache.clapping) {
            const { sound: loadedClapSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/clapping.mp3')
            );
            soundCache.clapping = loadedClapSound;
          }
          setSound(soundCache.clapping);
          console.log('Clapping sound loaded successfully');
        }

        if (soundsNeeded.race) {
          if (!soundCache.race) {
            const { sound: loadedRaceSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/racenoise.mp3')
            );
            soundCache.race = loadedRaceSound;
          }
          setRaceSound(soundCache.race);
          console.log('Race noise loaded successfully');
        }

        if (soundsNeeded.room) {
          if (!soundCache.room) {
            const { sound: loadedRoomSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/room.mp3')
            );
            await loadedRoomSound.setIsLoopingAsync(true);
            soundCache.room = loadedRoomSound;
          }
          setRoomSound(soundCache.room);
          console.log('Room sound loaded successfully and set to loop');
        }
        
        if (soundsNeeded.speech) {
          if (!soundCache.speech) {
            const { sound: loadedSpeechSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/soundforspeech.mp3')
            );
            soundCache.speech = loadedSpeechSound;
          }
          setSpeechSound(soundCache.speech);
          console.log('Speech sound loaded successfully');
        }

        if (soundsNeeded.interview) {
          if (!soundCache.interview) {
            const { sound: loadedInterviewSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/soundforinterview.mp3')
            );
            soundCache.interview = loadedInterviewSound;
          }
          setInterviewSound(soundCache.interview);
          console.log('Interview sound loaded successfully');
        }

        if (soundsNeeded.vc) {
          if (!soundCache.vc) {
            console.log('Attempting to load VC sound...');
            const { sound: loadedVcSound } = await Audio.Sound.createAsync(
              require('./assets/sounds/soundforvc.mp3')
            );
            soundCache.vc = loadedVcSound;
            console.log('Loaded VC sound into cache.');
          }
          setVcSound(soundCache.vc);
          console.log('VC sound set successfully');
        }

        // Mark sounds as loaded and start countdown
        setSoundsLoaded(true);
        
      } catch (error) {
        console.error('Failed to load sound(s)', error);
        // Even if there's an error, we should proceed with the countdown
        setSoundsLoaded(true);
      }
    }
    loadSounds();

    // No need to unload cached sounds - they're reused between screens
    return () => {
      // Just stop any actively playing sounds
      stopAllSounds();
    };
  }, [soundsNeeded, stopAllSounds]);

  // Start countdown after sounds are loaded
  useEffect(() => {
    if (soundsLoaded) {
      console.log('Sounds loaded, starting countdown');
      // Short delay to ensure sounds are fully ready
      setTimeout(() => {
        setShowCountdown(true);
      }, 300);
    }
  }, [soundsLoaded]);

  // --- Countdown Timer and Sound Trigger Effect ---
  useEffect(() => {
    if (!showCountdown) return;

    let raceSoundTimeoutId = null;
    let countdownIntervalId = null;
    let clapSoundTimeoutId = null;

    // --- Start Race Noise Immediately with proper error handling ---
    if (countdown === 4 && raceSound) {
      console.log('Attempting to play Race Noise (during countdown)');
      
      // Make sure the sound is properly loaded before playing
      const playRaceSound = async () => {
        try {
          // Check if sound is loaded
          const status = await raceSound.getStatusAsync();
          console.log('Race sound status:', status);
          
          // Reset sound position to beginning to ensure it plays from start
          await raceSound.setPositionAsync(0);
          
          // Play the sound
          await raceSound.playAsync();
          console.log('Race Noise playing successfully');
          
          // Set timeout to stop the sound
          raceSoundTimeoutId = setTimeout(() => {
            raceSound.stopAsync().catch(error => {
              console.error('Error stopping race noise:', error);
            });
            console.log('Race Noise stopped after 5 seconds (countdown end)');
          }, 5000);
        } catch (error) {
          console.error('Failed to play race noise:', error);
          // Try to reload the sound if there was an error
          try {
            if (!soundCache.race) {
              const { sound: newRaceSound } = await Audio.Sound.createAsync(
                require('./assets/sounds/racenoise.mp3')
              );
              soundCache.race = newRaceSound;
              setRaceSound(newRaceSound);
              console.log('Race noise reloaded successfully');
              
              // Try playing again
              await newRaceSound.playAsync();
            }
          } catch (reloadError) {
            console.error('Failed to reload race noise:', reloadError);
          }
        }
      };
      
      playRaceSound();
    }
    // --- End Start Race Noise ---

    // --- Handle Countdown Logic ---
    if (countdown > 0) {
      countdownIntervalId = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else { // When countdown === 0
      setShowCountdown(false);
      setIsScrolling(true);

      // --- Play Speech Sound (Speeches Category Only, Once) ---
      if (speechSound && !isWarmUpMode && currentPromptData && 
          currentPromptData.category === 'Speeches') {
        try {
          console.log('Playing Speech Sound (Once) for Speeches category');
          speechSound.replayAsync(); // Plays once as looping is disabled
        } catch (error) {
          console.error('Failed to play speech sound', error);
        }
      } else if (speechSound) {
         // Log if not played
      } else {
         // Log if not loaded
      }
      
      // --- Play Interview Sound (Interviews Category Only, Once) ---
      if (interviewSound && !isWarmUpMode && currentPromptData && 
          currentPromptData.category === 'Interviews') {
        try {
          console.log('Playing Interview Sound (Once) for Interviews category');
          interviewSound.replayAsync(); // Play once
        } catch (error) {
          console.error('Failed to play interview sound', error);
        }
      } else if (interviewSound) {
         // Log if not played (wrong mode/category)
      } else {
         // Log if not loaded
      }

      // --- Play VC Sound (Virtual Communication Category Only, Once, at Start) ---
      if (vcSound && !isWarmUpMode && currentPromptData?.category === 'Virtual Communication') {
        try {
          console.log('Playing VC Sound (Once, at start) for Virtual Communication category');
          vcSound.replayAsync(); // Play once
        } catch (error) {
          console.error('Failed to play VC sound', error);
        }
      } else if (vcSound) {
         // Log if not played (wrong mode/category)
      } else {
         // Log if not loaded
      }

      // --- Play Room Sound (All Categories except Warm-up AND Virtual Communication, Looping) ---
      if (roomSound && !isWarmUpMode && currentPromptData?.category !== 'Virtual Communication') {
        try {
          console.log(`Playing Room Sound (Looping) for category: ${currentPromptData?.category || 'Unknown'}`);
          roomSound.replayAsync(); // Plays and loops as looping is enabled
        } catch (error) {
          console.error('Failed to play room sound', error);
        }
      } else if (roomSound) {
        // Log why it wasn't played if the sound exists
        console.log('Room sound exists but not playing (Warm-up mode).');
      } else {
        console.log('Room sound object not loaded, cannot play.');
      }

      // --- Play Clapping Sound (Conditionally and NOT in warm-up) ---
      if (!isWarmUpMode && CLAPPING_PROMPT_IDS.includes(selectedPromptId) && sound) {
        try {
          console.log('Playing Clapping Sound (conditional)');
          sound.replayAsync().then(() => {
            clapSoundTimeoutId = setTimeout(() => {
              sound.stopAsync();
            }, 3000);
          });
        } catch (error) {
          console.error('Failed to play clapping sound', error);
        }
      } else if (!isWarmUpMode && CLAPPING_PROMPT_IDS.includes(selectedPromptId)) {
           console.log('Clapping appropriate, but sound object not loaded.');
      }
      // --- End Play Clapping Sound ---
    }
    // --- End Handle Countdown Logic ---

    // Cleanup function
    return () => {
      clearInterval(countdownIntervalId);
      clearTimeout(raceSoundTimeoutId);
      clearTimeout(clapSoundTimeoutId);

      // Stop looping/playing sounds on cleanup (if countdown finished)
      if (!showCountdown) { 
        if (roomSound) { 
          roomSound.getStatusAsync().then(status => {
            if (status.isPlaying) {
              console.log('Stopping looping room sound on cleanup');
              roomSound.stopAsync();
            }
          }).catch(error => console.error("Error checking room sound status on cleanup", error));
        }
        // Add speechSound stop to cleanup
        if (speechSound) { 
          speechSound.getStatusAsync().then(status => {
            if (status.isPlaying) {
              console.log('Stopping speech sound on cleanup'); // Updated log
              speechSound.stopAsync();
            }
          }).catch(error => console.error("Error checking speech sound status on cleanup", error));
        }
        // Add interviewSound stop to cleanup
        if (interviewSound) { 
          interviewSound.getStatusAsync().then(status => {
            if (status.isPlaying) {
              console.log('Stopping interview sound on cleanup');
              interviewSound.stopAsync();
            }
          }).catch(error => console.error("Error checking interview sound status on cleanup", error));
        }
        // Add vcSound stop to cleanup
        if (vcSound) {
          vcSound.getStatusAsync().then(status => {
            if (status.isPlaying) {
              console.log('Stopping VC sound on cleanup');
              vcSound.stopAsync();
            }
          }).catch(error => console.error("Error checking VC sound status on cleanup", error));
        }
      }
    };

  }, [countdown, showCountdown, sound, raceSound, roomSound, speechSound, interviewSound, vcSound, selectedPromptId, isWarmUpMode, currentPromptData]); // <<< Added vcSound dependency here too

  // --- Get fixed paddingBottom from styles --- (Helper)
  const getPaddingBottom = () => {
      // Use the value set in styles, ensure it's a number
      return typeof styles.scrollViewContent.paddingBottom === 'number' 
             ? styles.scrollViewContent.paddingBottom 
             : screenHeight; // Fallback to screenHeight if style is dynamic/unavailable
  };

  // --- Calculate Initial Scroll Position --- (Helper - Start at Top)
  const calculateInitialScrollPos = () => {
      // For normal scrolling, start at the top (0)
      console.log("CALC Initial Scroll (Normal View): Returning 0.");
      return 0;
  }

  // --- Effect to Set Initial Scroll Position Once Dimensions Known ---
  /* DEBUG: Disable initial scroll */
  useEffect(() => {
    // For the flipped view, we always initialize scrollY to 0.
    const initialPos = 0;
    console.log(`Initial Scroll Effect (Flipped View): Setting scrollY to ${initialPos}`);
    scrollY.setValue(initialPos);
    // Ensure ScrollView is also manually set initially
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: initialPos, animated: false });
    }
    // Dependencies are still needed to trigger this *once* dimensions are known,
    // even though the value set is constant.
  }, [contentHeight, containerHeight]); // Keep dependencies
  /* */

  // --- Scrolling Animation Effect (UPDATED for Top-Down) ---
  useEffect(() => {
    if (isScrolling && contentHeight > 0 && containerHeight > 0 && contentHeight > containerHeight) {
      const currentScrollY = scrollY._value; // Get current animated value

      // Target is the END of the scroll view
      const targetScrollY = Math.max(0, contentHeight - containerHeight);

      // If we are already at or past the target end, stop
      if (currentScrollY >= targetScrollY - 1) { // Small threshold
        console.log("Animation already at or past target end. Stopping.");
        setIsScrolling(false);
        return;
      }

      // Calculate remaining distance
      const remainingDistance = targetScrollY - currentScrollY;
      const pixelsPerSecond = scrollSpeed * 50; // Adjust base speed (pixels/sec) if needed
      const duration = Math.max((remainingDistance / pixelsPerSecond) * 1000, 1); // Ensure duration is positive

      console.log(`Starting/Resuming animation: Current=${currentScrollY.toFixed(2)}, Target=${targetScrollY.toFixed(2)}, Remaining=${remainingDistance.toFixed(2)}, Duration=${duration.toFixed(0)}ms`);

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
      animation.start(({ finished }) => {
        animationRef.current = null;
        if (finished) {
          console.log("Animation finished naturally.");
          setIsScrolling(false);
          // Record practice session completion
          if (!practiceRecordedRef.current) {
            recordPracticeSession();
            practiceRecordedRef.current = true; // Mark as recorded for this mount
          }
        } else {
          console.log("Animation stopped/interrupted.");
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
  }, [isScrolling, scrollSpeed, contentHeight, containerHeight, recordPracticeSession]); // Add recordPracticeSession dependency

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
  const savePracticeTime = useCallback(async (sessionDurationMs) => {
      if (sessionDurationMs <= 0) return; // Don't save if no time tracked
      try {
          const existingTimeStr = await AsyncStorage.getItem('@totalPracticeTimeSeconds');
          const existingTimeSec = existingTimeStr ? parseInt(existingTimeStr, 10) : 0;
          const sessionTimeSec = Math.round(sessionDurationMs / 1000);
          const newTotalTimeSec = existingTimeSec + sessionTimeSec;
          await AsyncStorage.setItem('@totalPracticeTimeSeconds', newTotalTimeSec.toString());
          console.log(`Saved practice time. Session: ${sessionTimeSec}s, New Total: ${newTotalTimeSec}s`);
          
          // Optionally update context/backend immediately (if updateUserStats exists)
          if (updateUserStats) {
             updateUserStats({ totalPracticeTime: newTotalTimeSec }); 
          }

      } catch (e) {
          console.error('Failed to save total practice time.', e);
      }
  }, [updateUserStats]);

  // --- Cleanup effect for unmounting ---
  useEffect(() => {
    isUnmountingRef.current = false;
    return () => {
      isUnmountingRef.current = true; // Mark as unmounting
      console.log("TeleprompterScreen unmounting - saving final time if any");
      stopAllSounds(); // Ensure sounds stop on unmount
      // Save any accumulated time from the final session segment
      let finalDuration = accumulatedPracticeTime;
      if (practiceSessionStartTime) { // If scroll was active when unmounted
          finalDuration += Date.now() - practiceSessionStartTime;
      }
      savePracticeTime(finalDuration);
      // Unload sounds from cache if appropriate (might need more complex cache management)
    };
  }, [stopAllSounds, savePracticeTime, accumulatedPracticeTime, practiceSessionStartTime]); // Add dependencies

  // --- Scroll Logic --- 
  const startScrolling = useCallback((fromPosition = 0) => {
    // ... (existing scroll calculation logic) ...
    
    if (timeToScroll > 0) {
        // Clear previous animation if any
        if (animationRef.current) {
            animationRef.current.stop();
        }
        
        // <<< START tracking time when scrolling starts >>>
        if (!practiceSessionStartTime) { // Only set start time if not already running
             setPracticeSessionStartTime(Date.now());
             console.log("Practice timer started");
        }
        // <<< END tracking time >>>

        // ... (rest of Animated.timing logic) ... 
       animationRef.current = Animated.timing(scrollY, { /* ... animation config ... */ });
       animationRef.current.start(/* ... callback ... */);
    } else {
         console.log("Content fits, no scroll needed or calculation error.");
         // Even if no scroll, mark practice session as started if button pressed
         if (!practiceSessionStartTime) { 
             setPracticeSessionStartTime(Date.now());
             console.log("Practice timer started (no scroll needed)");
         }
    }
  }, [scrollY, containerHeight, contentHeight, scrollSpeed, practiceSessionStartTime]); // Added practiceSessionStartTime dependency

  const pauseScrolling = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.stop();
      animationRef.current = null; // Clear the animation ref
       // <<< PAUSE tracking time >>>
      if (practiceSessionStartTime) {
        const duration = Date.now() - practiceSessionStartTime;
        setAccumulatedPracticeTime(prev => prev + duration);
        setPracticeSessionStartTime(null); // Reset start time
        console.log(`Practice timer paused. Added ${duration}ms. Total session: ${accumulatedPracticeTime + duration}ms`);
      }
      // <<< END PAUSE tracking time >>>
    }
  }, [practiceSessionStartTime, accumulatedPracticeTime]); // Added dependencies

  const stopScrolling = useCallback(async () => {
    console.log("Stopping scroll and saving time...");
    setIsScrolling(false);
    if (animationRef.current) {
        animationRef.current.stop();
        animationRef.current = null;
    }
    // <<< STOP tracking time and SAVE >>>
    let finalDuration = accumulatedPracticeTime;
    if (practiceSessionStartTime) {
        finalDuration += Date.now() - practiceSessionStartTime;
        console.log(`Practice timer stopped. Added ${Date.now() - practiceSessionStartTime}ms.`);
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

    // Stop sounds only if NOT in warm-up mode?
    // Or stop always? Let's stop always for now.
    await stopAllSounds(); 
    setShowCountdown(false); // Hide countdown after stop
    setCountdown(4); // Reset countdown
    setSoundsLoaded(false); // Reset sounds loaded flag to reload on next start

  }, [scrollY, recordPracticeSession, isWarmUpMode, stopAllSounds, accumulatedPracticeTime, practiceSessionStartTime, savePracticeTime]); // Added dependencies

  // --- Button Handlers --- 
  const handleStartPause = () => {
     if (!soundsLoaded) {
        console.warn("Attempted to start/pause before sounds loaded.");
        return; // Prevent action if sounds aren't ready
    }
    if (isScrolling) {
      // Pause logic
      pauseScrolling();
      setIsScrolling(false);
      // Stop looping ambient sounds on pause?
      // roomSound?.stopAsync(); // Consider if ambient should stop on pause
    } else {
      // Start logic
      if (contentHeight > containerHeight) {
         // Check current scroll position to resume correctly
          scrollY.addListener(({ value }) => {
              // We only need the listener temporarily to get the current value
              scrollY.removeAllListeners(); // Remove immediately
              console.log(`Resuming scroll from position: ${value}`);
              startScrolling(value); // Resume from current position
          });
          // Trigger the listener by getting the value (a bit hacky)
          scrollY.extractOffset(); 
      } else {
         startScrolling(0); // Start from top if content fits or first start
      }
      setIsScrolling(true);
      // Start looping ambient sounds on start?
      // roomSound?.playAsync(); // Start room sound loop
      // speechSound?.playAsync(); // Start speech sound loop
      // interviewSound?.playAsync(); // Start interview sound loop
      // vcSound?.playAsync(); // Start VC sound loop
    }
  };
  
  // Modify handleStop to use the new stopScrolling function
  const handleStop = async () => {
      await stopScrolling();
  };

  // Modify navigation handlers to use stopScrolling (saves time)
  const handleNextPrompt = async () => {
      console.log("Next Prompt requested");
      await stopScrolling(); // Stop scroll, save time, stop sounds
      // ... rest of existing next prompt logic ...
  };

  const handleGoBack = async () => {
      console.log("Go Back requested");
      // Time saving now handled by the unmount effect
      // await stopScrolling(); // No longer needed here, unmount effect handles it
      navigation.goBack();
  };

  const handleGoToCategories = async () => {
      console.log("Go To Categories requested");
       // Time saving now handled by the unmount effect
      // await stopScrolling(); // No longer needed here, unmount effect handles it
      navigation.navigate('PracticeTab', { screen: 'CategorySelection' });
  };
  // ... (rest of functions: playCompletionSounds, getPaddingBottom, etc.) ...

  // --- Determine Text Overlay Style ---
  // Use default or dynamic style, but ensure background is appropriate for warm-up
  const textOverlayStyle = {
    ...defaultLayoutConfig,
    ...(routeLayoutConfig || {}),
    // Override background for warm-up mode to ensure visibility
    backgroundColor: isWarmUpMode ? 'rgba(0,0,0,0.8)' : (routeLayoutConfig?.backgroundColor || defaultLayoutConfig.backgroundColor),
  };
  
  // Determine text color for warm-up
  const dynamicTextStyle = isWarmUpMode 
    ? styles.promptTextWhite // Always white for warm-up on dark overlay
    : (currentPromptData?.textColor === 'white' ? styles.promptTextWhite : styles.promptTextDefault);

  // --- Determine Control Bar Style ---
  const controlsStyle = [
    styles.controlsContainer, // Base style
    imageSource && !isWarmUpMode // Apply override only if image exists and not in warm-up mode
      ? { backgroundColor: 'rgba(255, 255, 255, 0.1)' } // Minimally visible white background
      : {} // Otherwise, use the default (semi-transparent black) from styles.controlsContainer
  ];

  // --- Function to play sounds on completion ---
  const playCompletionSounds = async () => {
    // Play clapping sound if needed
    if (soundsNeeded.clapping && sound) {
      console.log('Playing clapping sound');
      await sound.replayAsync();
    }
    // // Play VC sound if needed
    // if (soundsNeeded.vc && vcSound) { 
    //   console.log('Playing Virtual Communication sound');
    //   await vcSound.replayAsync();
    // }
  };

  return (
    <View style={styles.container}>
      {/* Conditionally render background image */}
      {imageSource && <Image source={imageSource} style={styles.backgroundImageElement} />}
      <View style={styles.contentWrapper}>
        <View style={textOverlayStyle}>
          <ScrollView
            ref={scrollViewRef}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView} // Use base style
            contentContainerStyle={styles.scrollViewContent}
            onLayout={e => {
              setContainerHeight(e.nativeEvent.layout.height);
            }}
            onContentSizeChange={(width, height) => {
              setContentHeight(height);
            }}
          >
            {/* Use dynamic text style */}
            <Text style={dynamicTextStyle}>
              {promptText}
            </Text>
          </ScrollView>
        </View>

        {/* Countdown Timer Overlay */} 
        {showCountdown && (
          <View style={styles.countdownOverlay}>
            <Text style={styles.countdownText}>{countdown}</Text>
          </View>
        )}

        <View style={controlsStyle}>
          <View style={styles.actionButtons}>
            {/* Home button moved to the far left */}
            <TouchableOpacity onPress={handleGoToCategories} style={styles.iconButton}>
              <Ionicons name="home-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoBack} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStartPause} style={styles.iconButton}>
              <Ionicons name={isScrolling ? "pause" : "play"} size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* Conditionally render Next button (only if NOT warm-up) */}
            {!isWarmUpMode && categoryPrompts && categoryPrompts.length > 1 && (
              <TouchableOpacity onPress={handleNextPrompt} style={styles.iconButton}>
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
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  backgroundImageElement: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // Removed padding to fix absolute positioning origin
    // paddingTop: '10%', 
    // paddingBottom: '5%',
    // paddingHorizontal: '5%', 
  },
  textOverlay: {
    width: '60%',
    height: '40%',
    borderRadius: 10,
    padding: 10,
    overflow: 'hidden',
    marginBottom: 10,
    marginLeft: '-5%',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollViewContent: {
    paddingBottom: 50, 
    paddingHorizontal: 10, // Added horizontal padding for text
  },
  promptTextDefault: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    textAlign: 'center',
  },
  promptTextWhite: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    textAlign: 'center',
  },
  controlsContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  controlLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 5,
  },
  slider: {
    width: '90%',
    height: 40,
    marginBottom: 10,
  },
  fontSizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '60%',
  },
  fontSizeDisplay: {
    color: '#FFFFFF',
    fontSize: 16,
    marginHorizontal: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 122, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  // Add Countdown Timer Styles
  countdownOverlay: {
    ...StyleSheet.absoluteFillObject, // Make it cover the whole screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background
    zIndex: 10, // Ensure it's above other elements except maybe modals
  },
  countdownText: {
    fontSize: 120, // Large text
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white text
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Optional text shadow for better visibility
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  // End Countdown Timer Styles
  iconButtonPlaceholder: { // Style to maintain layout spacing when next button is hidden
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

// Default layout config (cleaned up)
const defaultLayoutConfig = {
  backgroundColor: 'rgba(255,255,255,0.9)', // Example default (slightly transparent white)
  padding: 15, // Internal padding within the text overlay
  borderRadius: 10,
  overflow: 'hidden', // Keep overflow hidden
};

export default TeleprompterScreen; 