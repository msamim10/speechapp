import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors'; // Corrected import
import { categoryImageSources } from '../constants/imageUtils'; // Assuming you have image utils

const OnboardingScreen1 = () => {
    const navigation = useNavigation();

    const handleNext = () => {
        // Navigate to OnboardingScreen2 or WelcomeScreen if it's the last one
        navigation.navigate('Onboarding2'); // Changed to OnboardingScreen2
    };

    const handleSkip = () => {
        navigation.navigate('Welcome');
    };

    // Choose an image for the background, e.g., from 'speeches' or a generic one
    const backgroundImage = categoryImageSources.find(source => source.imageKey === 'keynote_speech_stage_audience') || categoryImageSources[0];


    return (
        <ImageBackground source={backgroundImage.image} style={styles.background}>
            <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
                style={styles.overlay}
            >
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Master Your Message</Text>
                            <Text style={styles.subText}>
                                Confidently deliver impactful speeches and presentations.
                            </Text>
                        </View>

                        <View style={styles.progressContainer}>
                            {/* Progress Dots - active for screen 1 */}
                            <View style={[styles.dot, styles.activeDot]} />
                            <View style={styles.dot} />
                            <View style={styles.dot} />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                                <Text style={styles.nextButtonText}>Next</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                                <Text style={styles.skipButtonText}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around', // Distribute space
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
        paddingBottom: 40, // More space at the bottom
    },
    headerContainer: {
        alignItems: 'center',
        marginTop: '20%', // Push content down a bit
        flex: 2, // Allow header to take more space
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.textLight,
        textAlign: 'center',
        marginBottom: 15,
    },
    subText: {
        fontSize: 18,
        color: colors.textLight,
        textAlign: 'center',
        paddingHorizontal: 10, // Keep subtext from touching edges
        lineHeight: 26,
    },
    progressContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30, // Space before buttons
        flex: 0.5,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.textLight, // Inactive dot color
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: colors.primary, // Active dot color (e.g., your app's primary color)
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        flex: 1, // Allow button container to take space
        justifyContent: 'flex-end', // Push buttons to bottom of their flex space
    },
    nextButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        width: '90%',
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    nextButtonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    skipButton: {
        paddingVertical: 10,
    },
    skipButtonText: {
        color: colors.textLight,
        fontSize: 16,
    },
});

export default OnboardingScreen1; 