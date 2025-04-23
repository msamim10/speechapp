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

function TeleprompterScreen({ route, navigation }) {
  // --- Get data passed from navigation ---
  const { selectedPromptId, categoryPrompts } = route.params || {};

  // --- Find the current prompt's data using selectedPromptId ---
  const currentPromptData = useMemo(() => {
    return categoryPrompts?.find(p => p.id === selectedPromptId);
  }, [categoryPrompts, selectedPromptId]);

  // --- Fallback if data isn't found (should not happen with proper navigation) ---
  const imageSource = currentPromptData?.image || require('./assets/prompt-backgrounds/good.png'); // Fallback image
  const initialPromptText = currentPromptData?.text || 'Prompt text not found.'; // Fallback text
  const routeLayoutConfig = currentPromptData?.layout; // Layout from current prompt
  
  // --- Add console log to check the layout being used --- 
  console.log("--- TeleprompterScreen Rendering ---");
  console.log("Selected Prompt ID:", selectedPromptId);
  console.log("Layout Config Used:", JSON.stringify(routeLayoutConfig, null, 2));
  // --- End console log ---

  const [promptText] = useState(initialPromptText || sampleText); // Use selected or fallback
  const [isScrolling, setIsScrolling] = useState(false); // Start paused until countdown finishes
  const [scrollSpeed, setScrollSpeed] = useState(1.0); // Keep speed control logic
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const animationRef = useRef(null);
  const [sound, setSound] = useState(); // Add state for the sound object
  const [countdown, setCountdown] = useState(3); // Add countdown state
  const [showCountdown, setShowCountdown] = useState(true); // State to show/hide countdown

  // --- Load Sound Effect ---
  useEffect(() => {
    // --- Configure Audio Session ---
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true, // Important for playing sound even if the device is on silent
      staysActiveInBackground: false,
      shouldDuckAndroid: true, // Optional: Reduce volume of other apps on Android
      playThroughEarpieceAndroid: false,
    }).catch(error => {
      console.error('Failed to set audio mode', error);
    });
    // --- End Audio Session Configuration ---

    async function loadSound() {
      console.log('Loading Sound');
      try {
        const { sound } = await Audio.Sound.createAsync(
           require('./assets/sounds/clapping.mp3') // Use placeholder path
        );
        setSound(sound);
        console.log('Sound loaded successfully');
      } catch (error) {
        console.error('Failed to load sound', error);
        // Handle error appropriately, maybe disable the sound feature
      }
    }
    loadSound();

    // --- Unload Sound Effect on Unmount ---
    return () => {
      if (sound) {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  // --- Countdown Timer Effect ---
  useEffect(() => {
    if (!showCountdown) return; // Don't run if countdown is hidden

    if (countdown === 0) {
      setShowCountdown(false);
      setIsScrolling(true); // Start scrolling after countdown
      // Play sound when countdown finishes
      if (sound) {
        try {
          console.log('Playing Sound (after countdown)');
          sound.replayAsync().then(() => {
            // Optional: Stop the sound after 3 seconds
            setTimeout(() => {
              sound.stopAsync();
              console.log('Sound stopped after 3 seconds');
            }, 3000);
          });
        } catch (error) {
          console.error('Failed to play sound', error);
        }
      } else {
        console.log('Sound object not loaded, cannot play.');
      }
      return;
    }

    const timerId = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000); // Decrease every second

    // Cleanup interval on component unmount or when countdown finishes
    return () => clearInterval(timerId);

  }, [countdown, showCountdown]); // Rerun effect when countdown or its visibility changes

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
    setIsScrolling(prev => !prev); // Enable state change
  };

  // --- Determine Next Prompt Logic ---
  const handleNextPrompt = async () => { // Make the function async
    // REMOVE SOUND LOGIC FROM HERE
    // if (sound) {
    //   try {
    //     console.log('Playing Sound');
    //     await sound.replayAsync(); // Replay the sound from the beginning
    //     // Optional: Stop the sound after 3 seconds
    //     setTimeout(() => {
    //       sound.stopAsync();
    //       console.log('Sound stopped after 3 seconds');
    //     }, 3000);
    //   } catch (error) {
    //     console.error('Failed to play sound', error);
    //   }
    // } else {
    //   console.log('Sound object not loaded, cannot play.');
    // }

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
  const handleGoBack = () => {
    navigation.goBack(); // Navigate to the previous screen in the stack
  };
  // --- END Go Back Handler ---

  // --- Determine Text Overlay Style ---
  const textOverlayStyle = {
    ...defaultLayoutConfig,
    ...(routeLayoutConfig || {}),
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.backgroundImageElement} />
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
            <Text style={currentPromptData?.textColor == 'white' ? styles.promptTextWhite : styles.promptTextDefault}>
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
            <TouchableOpacity onPress={handleGoBack} style={styles.controlButton}>
              <Text style={styles.controlButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStartPause} style={styles.controlButton}>
              <Text style={styles.controlButtonText}>{isScrolling ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            {categoryPrompts && categoryPrompts.length > 1 && (
              <TouchableOpacity onPress={handleNextPrompt} style={styles.controlButton}>
                <Text style={styles.controlButtonText}>Next</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  controlButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  controlButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
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
});

// Default layout config (cleaned up)
const defaultLayoutConfig = {
  backgroundColor: 'rgba(255,255,255,0.9)', // Example default (slightly transparent white)
  padding: 15, // Internal padding within the text overlay
  borderRadius: 10,
  overflow: 'hidden', // Keep overflow hidden
};

export default TeleprompterScreen; 