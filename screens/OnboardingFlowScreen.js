import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const Bird = require("../assets/Bird.png");
const BirdTumbsUp = require("../assets/BirdTumbsUp.png");

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const onboardingSlidesContent = [
  {
    key: "1",
    title: "Get rid of your filler words and become more concise.",
    subtitle: "",
    image: Bird,
    backgroundColor: "#27AE60",
    fullScreenImage: false,
    activeDotColor: "#FFFFFF",
    inactiveDotColor: "#A5D6C9",
  },
  {
    key: "2",
    title: "Improve your Pace and Vocal Clarity.",
    subtitle: "",
    image: Bird,
    backgroundColor: "#E74C3C",
    fullScreenImage: false,
    activeDotColor: "#FFFFFF",
    inactiveDotColor: "#F4B1A1",
  },
  {
    key: "3",
    title: "Get rid of jitters and become more confident.",
    subtitle: "",
    image: BirdTumbsUp,
    backgroundColor: "#2980EF",
    fullScreenImage: false,
    activeDotColor: "#FFFFFF",
    inactiveDotColor: "#A5C7F6",
  },
];

const OnboardingFlowScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleGetStarted = () => navigation.navigate("GetStarted");
  const handleSignIn = () => navigation.navigate("SignIn");

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const renderSlide = ({ item }) => (
    <View style={styles.slideContainer}>
      <View style={[styles.slideContent]}>
        <Text style={styles.titleText}>{item.title}</Text>
        {!!item.subtitle && (
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
        )}
      </View>
      {item.image && (
        <Image
          source={item.image}
          style={
            item.fullScreenImage ? styles.fullSlideImage : styles.slideImage
          }
          resizeMode="contain"
        />
      )}
    </View>
  );

  const currentSlideStyle =
    onboardingSlidesContent[currentIndex] || onboardingSlidesContent[0];
  const buttonBgColor = "rgba(255,255,255,0.95)";
  const buttonTextColor = "#222";
  const signInBoxBgColor = "rgba(255,255,255,0.85)";
  const signInTextColor = "#222";

  return (
    <View
      style={[
        styles.safeAreaContainer,
        { backgroundColor: currentSlideStyle.backgroundColor },
      ]}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.13)", "rgba(0,0,0,0.22)"]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <SafeAreaView style={styles.flexContainer}>
        <FlatList
          ref={flatListRef}
          data={onboardingSlidesContent}
          renderItem={renderSlide}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          style={styles.flatList}
        />
        <View style={styles.bottomControlsContainer}>
          <View style={styles.authButtonContainer}>
            <TouchableOpacity
              style={[
                styles.getStartedButton,
                { backgroundColor: buttonBgColor },
              ]}
              onPress={handleGetStarted}
              activeOpacity={0.85}
            >
              <Text style={[styles.buttonText, { color: buttonTextColor }]}>
                Get Started
              </Text>
            </TouchableOpacity>
            <View
              style={[
                styles.signInBox,
                {
                  backgroundColor: signInBoxBgColor,
                  borderColor: buttonTextColor,
                },
              ]}
            >
              <TouchableOpacity
                style={styles.signInLink}
                onPress={handleSignIn}
                activeOpacity={0.75}
              >
                <Text
                  style={[styles.signInLinkText, { color: signInTextColor }]}
                >
                  Already have an account? Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.paginationContainer}>
            {onboardingSlidesContent.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      index === currentIndex
                        ? currentSlideStyle.activeDotColor
                        : currentSlideStyle.inactiveDotColor,
                    opacity: index === currentIndex ? 1 : 0.6,
                    borderWidth: index === currentIndex ? 1 : 0,
                    borderColor:
                      index === currentIndex ? buttonTextColor : "transparent",
                  },
                  index === currentIndex && styles.activeDotDimensions,
                ]}
              />
            ))}
          </View>
          {currentIndex < onboardingSlidesContent.length - 1 && (
            <Text style={[styles.swipeMoreText, { color: buttonTextColor }]}>
              Swipe for more
            </Text>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  slideContainer: {
    width: screenWidth,
    height: screenHeight * 0.62,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  slideContent: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 0.1,
    lineHeight: 36,
    color: "#FFFFFF",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 26,
    marginBottom: 8,
    color: "#FFFFFF",
  },
  slideImage: {
    width: screenWidth * 0.58,
    height: screenHeight * 0.28,
    marginTop: 24,
    marginBottom: 10,
    alignSelf: "center",
  },
  fullSlideImage: {
    width: "100%",
    height: "100%",
  },
  bottomControlsContainer: {
    alignItems: "center",
    paddingBottom: Platform.OS === "ios" ? 40 : 30,
  },
  authButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  getStartedButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 28,
    width: "92%",
    alignItems: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  signInBox: {
    borderRadius: 22,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: "92%",
    alignItems: "center",
    marginBottom: 2,
    borderWidth: 1,
  },
  signInLink: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  signInLinkText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  activeDotDimensions: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  swipeMoreText: {
    fontSize: 12,
    fontWeight: "300",
    marginTop: 15,
    opacity: 0.8,
  },
});

export default OnboardingFlowScreen;
