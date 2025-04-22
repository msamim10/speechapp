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
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1.0); // Keep speed control logic
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const animationRef = useRef(null);

  // --- Get fixed paddingBottom from styles --- (Helper)
  const getPaddingBottom = () => {
      // Use the value set in styles, ensure it's a number
      return typeof styles.scrollViewContent.paddingBottom === 'number' 
             ? styles.scrollViewContent.paddingBottom 
             : screenHeight; // Fallback to screenHeight if style is dynamic/unavailable
  };

  // --- Calculate Initial Scroll Position --- (Helper - Always Start at Top for Flipped View)
  const calculateInitialScrollPos = () => {
      // For a flipped view, the starting visual point (first line at the bottom)
      // corresponds to a scrollY of 0.
      console.log("CALC Initial Scroll (Flipped View): Returning 0.");
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

  // --- Scrolling Animation Effect (UPDATED for Bottom-Up) ---
  /* DEBUG: Disable animation effect */
  useEffect(() => {
    if (isScrolling && contentHeight > 0 && containerHeight > 0 && contentHeight > containerHeight) {
      const currentScrollY = scrollY._value; // Get current animated value

      // Target is the END of the scroll view for flipped content
      const targetScrollY = Math.max(0, contentHeight - containerHeight);

      // If we are already at or past the target end, stop
      if (currentScrollY >= targetScrollY - 1) { // Small threshold
        console.log("Animation already at or past target end. Stopping.");
        setIsScrolling(false);
        // Optional: Reset to 0 on completion?
        // scrollY.setValue(0);
        // if (scrollViewRef.current) scrollViewRef.current.scrollTo({ y: 0, animated: false });
        return;
      }

      // Calculate remaining distance (from current position up to targetScrollY)
      const remainingDistance = targetScrollY - currentScrollY;
      const pixelsPerSecond = scrollSpeed * 50; // Adjust base speed (pixels/sec) if needed
      const duration = Math.max((remainingDistance / pixelsPerSecond) * 1000, 1); // Ensure duration is positive

      console.log(`Starting/Resuming flipped animation: Current=${currentScrollY.toFixed(2)}, Target=${targetScrollY.toFixed(2)}, Remaining=${remainingDistance.toFixed(2)}, Duration=${duration.toFixed(0)}ms`);

      // Stop previous animation if any (e.g., resuming after pause)
      if (animationRef.current) {
        animationRef.current.stop();
      }

      // Create and start the timing animation towards the end
      const animation = Animated.timing(scrollY, {
        toValue: targetScrollY, // Animate towards the maximum scroll offset
        duration: duration,
        useNativeDriver: false, // Still need false for ScrollView interaction
        easing: Easing.linear,
      });
      animationRef.current = animation; // Store the animation reference
      animation.start(({ finished }) => {
        animationRef.current = null; // Clear ref when animation ends or is stopped
        if (finished) {
          console.log("Flipped animation finished naturally.");
          setIsScrolling(false); // Update state
          // Decide if we reset here or let 'Stop' button handle reset
          // scrollY.setValue(0);
          // if (scrollViewRef.current) scrollViewRef.current.scrollTo({ y: 0, animated: false });
        } else {
          console.log("Flipped animation stopped/interrupted (likely paused or stopped manually).");
          // State is already false if stopped, or still true if paused (stop handled in handleStartPause)
        }
      });

    } else if (!isScrolling && animationRef.current) {
      // If scrolling is toggled OFF (Pause or Stop), and an animation is running
      console.log("Pausing/Stopping flipped animation via isScrolling=false.");
      animationRef.current.stop();
      // animationRef.current = null; // Clear ref here? No, handleStop clears it. handleStartPause (pause) keeps it.
    }

    // Cleanup: Stop animation if component unmounts or dependencies change unexpectedly
    return () => {
      if (animationRef.current) {
        console.log("Cleanup: Stopping animation.");
        animationRef.current.stop();
        animationRef.current = null;
      }
    };
  // Add scrollY to dependencies? No, it causes loops. Rely on isScrolling, speed, and dimensions.
  }, [isScrolling, scrollSpeed, contentHeight, containerHeight]);
  /* */

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

  const handleStop = () => {
    console.log("handleStop called.");
    setIsScrolling(false); // Stop scrolling
    if (animationRef.current) {
      console.log("Stopping existing animation.");
      animationRef.current.stop(); // Stop the animation if running
      animationRef.current = null; // Clear the ref
    }
    // Reset scroll position to the top (0) for the flipped view
    const initialPos = 0; // Reset to the top for flipped view
    console.log(`Resetting scrollY to initial position (flipped view): ${initialPos}`);
    scrollY.setValue(initialPos); // Reset scroll value
    // Manually scroll the ScrollView to the reset position immediately
    if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: initialPos, animated: false });
    }
  };

  // --- Determine Next Prompt Logic ---
  const handleNextPrompt = () => {
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
            // Keep transform if needed for flipped text
            transform={[{ scaleY: -1 }]} 
          >
            <Text style={currentPromptData?.textColor == 'white' ? styles.promptTextWhite : styles.promptTextDefault}>
              {promptText}
            </Text>
          </ScrollView>
        </View>

        <View style={styles.controlsContainer}>
          <View style={styles.actionButtons}>
            <TouchableOpacity onPress={handleGoBack} style={styles.controlButton}>
              <Text style={styles.controlButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStartPause} style={styles.controlButton}>
              <Text style={styles.controlButtonText}>{isScrolling ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleStop} style={styles.controlButton}>
              <Text style={styles.controlButtonText}>Stop</Text>
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
    transform: [{ scaleY: -1 }], // Flip the text back upright
  },
  promptTextWhite: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 14 * 1.5,
    textAlign: 'center',
    transform: [{ scaleY: -1 }], // Flip the text back upright
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
});

// Default layout config (cleaned up)
const defaultLayoutConfig = {
  backgroundColor: 'rgba(255,255,255,0.9)', // Example default (slightly transparent white)
  padding: 15, // Internal padding within the text overlay
  borderRadius: 10,
  overflow: 'hidden', // Keep overflow hidden
};

export default TeleprompterScreen; 