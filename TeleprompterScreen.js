import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  const imageSource = isWarmUpMode ? null : (currentPromptData?.image || require('./assets/prompt-backgrounds/good.png'));
  
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
  const [countdown, setCountdown] = useState(4); // Countdown duration
  const [showCountdown, setShowCountdown] = useState(true); // Countdown visibility

  // --- Helper function to stop all sounds ---
  const stopAllSounds = async () => {
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
  };

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
      console.log('Loading Sounds');
      try {
        // Load Clapping Sound
        const { sound: loadedClapSound } = await Audio.Sound.createAsync(
           require('./assets/sounds/clapping.mp3')
        );
        setSound(loadedClapSound);
        console.log('Clapping sound loaded successfully');

        // Load Race Noise Sound
        const { sound: loadedRaceSound } = await Audio.Sound.createAsync(
           require('./assets/sounds/racenoise.mp3')
        );
        setRaceSound(loadedRaceSound);
        console.log('Race noise loaded successfully');

        // Load Room Sound
        const { sound: loadedRoomSound } = await Audio.Sound.createAsync(
           require('./assets/sounds/room.mp3')
        );
        // Add this line: Set room sound to loop
        await loadedRoomSound.setIsLoopingAsync(true);
        setRoomSound(loadedRoomSound);
        console.log('Room sound loaded successfully and set to loop');
        // End modification

      } catch (error) {
        console.error('Failed to load sound(s)', error);
      }
    }
    loadSounds();

    // Unload sounds on unmount
    return () => {
      if (sound) {
        console.log('Unloading Clapping Sound');
        sound.unloadAsync();
      }
      if (raceSound) {
        console.log('Unloading Race Sound');
        raceSound.unloadAsync();
      }
      if (roomSound) {
        console.log('Unloading Room Sound');
        roomSound.unloadAsync();
      }
    };
  }, []);

  // --- Countdown Timer and Sound Trigger Effect ---
  useEffect(() => {
    if (!showCountdown) return;

    let raceSoundTimeoutId = null;
    let countdownIntervalId = null;
    let clapSoundTimeoutId = null;

    // --- Start Race Noise Immediately ---
    if (countdown === 4 && raceSound) {
        try {
            console.log('Playing Race Noise (during countdown)');
            raceSound.replayAsync().then(() => {
              raceSoundTimeoutId = setTimeout(() => {
                raceSound.stopAsync();
                console.log('Race Noise stopped after 4 seconds (countdown end)');
              }, 4000);
            });
        } catch (error) {
            console.error('Failed to play race noise at start', error);
        }
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

      // --- Play Room Sound (Always and Looping) ---
      if (roomSound) {
        try {
          console.log('Playing Room Sound (Looping)');
          // Start playing (it's set to loop, no stop timeout needed)
          roomSound.replayAsync();
        } catch (error) {
          console.error('Failed to play room sound', error);
        }
      } else {
        console.log('Room sound object not loaded, cannot play.');
      }

      // --- Play Clapping Sound (Conditionally) ---
      if (CLAPPING_PROMPT_IDS.includes(selectedPromptId) && sound) {
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
      } else if (CLAPPING_PROMPT_IDS.includes(selectedPromptId)) {
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

      // Add this block: Explicitly stop looping sound if component unmounts *after* countdown finished
      if (roomSound && !showCountdown) { // Check if roomSound exists and countdown finished
          roomSound.getStatusAsync().then(status => {
              if (status.isPlaying) {
                  console.log('Stopping looping room sound on cleanup');
                  roomSound.stopAsync();
              }
          }).catch(error => console.error("Error checking room sound status on cleanup", error));
      }
      // End block
    };

  }, [countdown, showCountdown, sound, raceSound, roomSound, selectedPromptId]);

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
        } else {
          console.log("Animation stopped/interrupted.");
        }
      });

    } else if (!isScrolling && animationRef.current) {
      console.log("Pausing/Stopping animation via isScrolling=false.");
      animationRef.current.stop();
    }

    return () => {
      if (animationRef.current) {
        console.log("Cleanup: Stopping animation.");
        animationRef.current.stop();
        animationRef.current = null;
      }
    };
  }, [isScrolling, scrollSpeed, contentHeight, containerHeight]);

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

  // --- Button Handlers ---
  const handleStartPause = () => {
    console.log(`handleStartPause called. Current state: ${isScrolling ? 'Scrolling' : 'Paused/Stopped'}`);

    // Add this block: Reset to top if starting from the end
    if (!isScrolling) { // Check if we are trying to START scrolling
      const currentScrollY = scrollY._value;
      const targetScrollY = Math.max(0, contentHeight - containerHeight);
      // Check if scroll position is at or very near the end
      if (contentHeight > 0 && containerHeight > 0 && currentScrollY >= targetScrollY - 1) {
        console.log("Scrolling finished, resetting to top before starting.");
        // Reset scroll value
        scrollY.setValue(0);
        // Manually scroll the ScrollView to the reset position immediately
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: false });
        }
      }
    }
    // End block

    // Toggle scrolling state (as before)
    setIsScrolling(prev => !prev);
  };

  // --- Determine Next Prompt Logic ---
  const handleNextPrompt = async () => {
    await stopAllSounds(); // Stop sounds before navigating
    // Existing navigation logic
    if (!categoryPrompts || categoryPrompts.length < 2) {
      console.log("Not enough prompts in category to navigate.");
      return; // Cannot navigate if only 0 or 1 prompt
    }
    
    const currentIndex = categoryPrompts.findIndex(p => p.id === selectedPromptId);
    if (currentIndex === -1) {
      console.error("Current prompt ID not found in category list.");
      return; // Should not happen
    }

    const nextIndex = (currentIndex + 1) % categoryPrompts.length; // Wrap around
    const nextPromptId = categoryPrompts[nextIndex].id;

    console.log(`Navigating to next prompt: ${nextPromptId}`);

    // Use replace to swap the screen without adding to history
    navigation.replace('Teleprompter', {
      selectedPromptId: nextPromptId,
      categoryPrompts: categoryPrompts, // Pass the same list again
    });
  };

  // --- Go Back Handler ---
  const handleGoBack = async () => {
    await stopAllSounds(); // Stop sounds before navigating
    navigation.goBack(); // Navigate to the previous screen in the stack
  };
  // --- END Go Back Handler ---

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

        <View style={styles.controlsContainer}>
          <View style={styles.actionButtons}>
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
            {/* Add placeholder if in warm-up mode and only two buttons shown */}
            {isWarmUpMode && <View style={styles.iconButtonPlaceholder} />}
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