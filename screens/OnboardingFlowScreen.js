import React, { useState, useRef } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    Platform,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../constants/colors';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const onboardingSlidesContent = [
    {
        key: '1',
        title: 'Master Your Message',
        subtitle: 'Confidently deliver impactful speeches and presentations.',
        image: null,
        backgroundColor: '#FFFFFF',
        fullScreenImage: false,
        textColor: '#000000',
        activeDotColor: colors.primary,
        inactiveDotColor: '#CCCCCC'
    },
    {
        key: '2',
        title: 'Practice Anytime, Anywhere',
        subtitle: 'Access a library of prompts or create your own.',
        image: null,
        backgroundColor: '#FFFFFF',
        fullScreenImage: false,
        textColor: '#000000',
        activeDotColor: colors.primary,
        inactiveDotColor: '#CCCCCC'
    },
    {
        key: '3',
        title: 'Track Your Progress',
        subtitle: 'Build streaks and see your improvement over time.',
        image: null,
        backgroundColor: '#FFFFFF',
        fullScreenImage: false,
        textColor: '#000000',
        activeDotColor: colors.primary,
        inactiveDotColor: '#CCCCCC'
    },
];

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

    const renderSlide = ({ item }) => (
        <View style={[
            styles.slideContainer,
            item.backgroundColor ? { backgroundColor: item.backgroundColor } : {}
        ]}>
            {item.image && (
                <Image 
                    source={item.image} 
                    style={item.fullScreenImage ? styles.fullSlideImage : styles.slideImage} 
                    resizeMode={item.fullScreenImage ? "contain" : "contain"}
                />
            )}
            {!item.fullScreenImage && (
                <View style={styles.slideContent}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.subtitleText}>{item.subtitle}</Text>
                </View>
            )}
        </View>
    );

    const currentSlideStyle = onboardingSlidesContent[currentIndex] || onboardingSlidesContent[0];

    return (
        <SafeAreaView style={[
            styles.safeAreaContainer,
            { backgroundColor: currentSlideStyle.backgroundColor }
        ]}>
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

            {/* Bottom Controls */}
            <View style={[
                styles.bottomControlsContainer,
                { backgroundColor: currentSlideStyle.backgroundColor }
            ]}>
                {/* Auth buttons */}
                <View style={styles.authButtonContainer}>
                    <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    {/* Sign In Link */}
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
                                {
                                    backgroundColor: index === currentIndex 
                                        ? currentSlideStyle.activeDotColor 
                                        : currentSlideStyle.inactiveDotColor,
                                    opacity: index === currentIndex ? 1 : 0.6,
                                },
                                index === currentIndex && styles.activeDotDimensions
                            ]}
                        />
                    ))}
                </View>
                {/* "Swipe for more" text, shown if not on the last slide */}
                {currentIndex < onboardingSlidesContent.length - 1 && (
                    <Text style={[styles.swipeMoreText, { color: currentSlideStyle.textColor }]}>Swipe for more</Text>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
    },
    flatList: {
        flex: 1,
    },
    slideContainer: {
        width: screenWidth,
        height: screenHeight * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImage: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.4,
        marginBottom: 20,
    },
    fullSlideImage: {
        width: '100%',
        height: '100%',
    },
    slideContent: {
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 15,
    },
    subtitleText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '500',
        textAlign: 'center',
        paddingHorizontal: 15,
        lineHeight: 26,
    },
    bottomControlsContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'ios' ? 40 : 30,
    },
    authButtonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
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
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    signInLinkText: {
        color: colors.textLight,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    signInBox: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '90%',
        alignItems: 'center',
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        fontWeight: '300',
        marginTop: 15,
        opacity: 0.8,
    },
});

export default OnboardingFlowScreen; 