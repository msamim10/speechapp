import React, { useState, useRef } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    Platform,
    SafeAreaView,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import colors from '../constants/colors';
import { categoryImageSources } from '../constants/imageUtils';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const onboardingSlidesContent = [
    {
        key: '1',
        title: 'Master Your Message',
        subtitle: 'Confidently deliver impactful speeches and presentations.',
        imageKey: 'keynote_speech_stage_audience',
    },
    {
        key: '2',
        title: 'Practice Anytime, Anywhere',
        subtitle: 'Access a library of prompts or create your own.',
        imageKey: 'man_in_suit_speaking_on_stage_side_view',
    },
    {
        key: '3',
        title: 'Track Your Progress',
        subtitle: 'Build streaks and see your improvement over time.',
        imageKey: 'woman_presenting_on_stage_ted_style',
    },
];

const getImage = (key) => {
    const foundImage = categoryImageSources.find(source => source.imageKey === key);
    return foundImage ? foundImage.image : categoryImageSources[0]?.image;
};

const OnboardingFlowScreen = () => {
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    const handleGetStarted = () => {
        navigation.navigate('GetStarted');
    };

    const handleSignIn = () => {
        navigation.navigate('SignIn');
    };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0 && viewableItems[0].index !== null) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;

    const renderBackgroundImage = ({ item }) => (
        <ImageBackground source={getImage(item.imageKey)} style={styles.backgroundImage}>
            <LinearGradient
                colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.7)']}
                style={StyleSheet.absoluteFillObject} // Ensure gradient covers the image
            />
        </ImageBackground>
    );

    // Text content will now be dynamic based on the current slide index
    const currentSlideContent = onboardingSlidesContent[currentIndex];

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <FlatList
                ref={flatListRef}
                data={onboardingSlidesContent} // Data for images
                renderItem={renderBackgroundImage}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.key}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
                style={StyleSheet.absoluteFill} // Make FlatList cover the whole screen behind content
            />

            {/* Static Content Overlay */}
            <View style={styles.overlayContentContainer}>
                <View style={styles.textContainer}>
                    {/* Display dynamic text based on current slide */}
                    <Text style={styles.titleText}>{currentSlideContent.title}</Text>
                    <Text style={styles.subtitleText}>{currentSlideContent.subtitle}</Text>
                </View>

                {/* Buttons and Pagination appear fixed at the bottom */}
                <View style={styles.bottomControlsContainer}>
                    {/* Auth buttons are always visible */}
                    <View style={styles.authButtonContainer}>
                        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                        {/* Styled Sign In Link */}
                        <View style={styles.signInBox}>
                            <TouchableOpacity style={styles.signInLink} onPress={handleSignIn}>
                                <Text style={styles.signInLinkText}>Already have an account? Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.paginationContainer}>
                        {onboardingSlidesContent.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    currentIndex === index ? styles.activeDot : styles.inactiveDot,
                                ]}
                            />
                        ))}
                    </View>
                    {/* "Swipe for more" text, shown if not on the last slide */}
                    {currentIndex < onboardingSlidesContent.length - 1 && (
                        <Text style={styles.swipeMoreText}>Swipe for more</Text>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#000', // Fallback background color
    },
    backgroundImage: {
        width: screenWidth,
        height: screenHeight, // Make each image take full screen
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayContentContainer: {
        ...StyleSheet.absoluteFillObject, // Let this view cover the FlatList
        flex: 1,
        justifyContent: 'space-between', // Pushes text to top, controls to bottom
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 60 : 40, 
        paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    },
    textContainer: {
        alignItems: 'center',
        width: '100%',
        marginTop: '20%', // Push text down a bit from the top
        backgroundColor: 'transparent', // Ensure text container doesn't block image
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.textLight,
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitleText: {
        fontSize: 18,
        color: colors.textLight,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 15,
        lineHeight: 26,
    },
    bottomControlsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    authButtonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20, // Space between auth buttons and pagination dots
    },
    getStartedButton: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 30,
        width: '90%', 
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    buttonText: {
        color: colors.textLight,
        fontSize: 18,
        fontWeight: '600',
    },
    signInLink: {
        paddingVertical: 10, // Padding inside the touchable opacity for better tap area
        paddingHorizontal: 15, // Padding inside the touchable opacity
    },
    signInLinkText: {
        color: colors.textLight,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center', // Ensure text inside the link is centered
    },
    signInBox: { // Style for the blue box around the sign-in link
        backgroundColor: colors.primary, // Assuming colors.primary is your blue
        borderRadius: 25, // Match getStartedButton or choose your own
        paddingVertical: 5, // Small padding around the link to make the box visible
        paddingHorizontal: 10,
        width: '90%', // Match getStartedButton width
        alignItems: 'center', // Center the TouchableOpacity link inside
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // Removed absolute positioning, will be part of bottomControlsContainer flow
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: colors.primary,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    inactiveDot: {
        backgroundColor: colors.white,
        opacity: 0.6, // Slightly more opaque for white dots
    },
    swipeMoreText: {
        color: colors.textLight, // White text
        fontSize: 12,
        fontWeight: '300', // Lighter font weight
        marginTop: 15, // Space above the text, below pagination dots
        opacity: 0.8, // Slightly less prominent
    },
});

export default OnboardingFlowScreen; 