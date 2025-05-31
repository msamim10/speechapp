import Purchases from "react-native-purchases";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RevenueCatUI, { PAYWALL_RESULT } from "react-native-purchases-ui";

// TODO: Replace with your RevenueCat public API key
const REVENUECAT_API_KEY = "appl_GNBhKmnIMBTMvoCIusCaGXNFNfr";

export const initRevenueCat = () => {
  Purchases.configure({
    apiKey: REVENUECAT_API_KEY,
    appUserID: null, // Optionally set a custom user ID
    observerMode: false, // Set to true if you want to handle transactions yourself
  });
};

export const getOfferings = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    return offerings;
  } catch (e) {
    console.warn("Error fetching offerings from RevenueCat:", e);
    return null;
  }
};

export const purchasePackage = async (purchasePackage) => {
  try {
    const { customerInfo, productIdentifier } = await Purchases.purchasePackage(
      purchasePackage
    );
    return { customerInfo, productIdentifier };
  } catch (e) {
    if (!e.userCancelled) {
      console.warn("Purchase error:", e);
    }
    return null;
  }
};

export const checkActiveSubscription = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();

    // Check if activeSubscriptions array exists and is not empty
    if (customerInfo && customerInfo.activeSubscriptions && customerInfo.activeSubscriptions.length > 0) {
      // Check if any of the active subscriptions are actually active
      // This can be done by checking expiry dates or specific entitlement identifiers
      // For simplicity, if the array is not empty, we assume one is active.
      // RevenueCat's `customerInfo.entitlements.active` is a more robust way if you use entitlements.
      console.log("User has active subscriptions:", customerInfo.activeSubscriptions);
      return true; // User has at least one active subscription
    } else {
      console.log("No active subscriptions found for the user.");
      return false; // No active subscriptions
    }
  } catch (e) {
    console.warn("Error checking subscription status:", e);
    return false;
  }
};

// Constants for image screen view tracking
const IMAGE_VIEW_LIMIT = 5; // Users get 5 free views, 6th attempt is paywalled
const IMAGE_VIEW_COUNT_KEY = '@imageScreenViewCount';

export const handlePromptViewAttempt = async (navigation, navigationTarget) => {
  // navigationTarget should be an object like { screen: 'PrePractice', params: { ... } }
  console.log("DEBUG: handlePromptViewAttempt called"); // Log entry
  try {
    const hasSubscription = await checkActiveSubscription();
    console.log(`DEBUG: User hasSubscription: ${hasSubscription}`);

    if (hasSubscription) {
      // If subscribed, reset their free view count for good measure and proceed
      try {
        await AsyncStorage.setItem(IMAGE_VIEW_COUNT_KEY, '0');
        console.log(`DEBUG: Subscribed user. Reset ${IMAGE_VIEW_COUNT_KEY} to 0.`);
      } catch (e) {
        console.error("Failed to reset view count for subscribed user", e);
      }
      navigation.navigate(navigationTarget.screen, navigationTarget.params);
      return true; // Proceeded
    }

    // Not subscribed, check view count
    let viewCount = 0; // Default to 0
    try {
      const storedCount = await AsyncStorage.getItem(IMAGE_VIEW_COUNT_KEY);
      console.log(`DEBUG: Stored count for ${IMAGE_VIEW_COUNT_KEY} is: '${storedCount}' (type: ${typeof storedCount})`); 
      if (storedCount !== null && storedCount !== undefined) {
        viewCount = parseInt(storedCount, 10);
        if (isNaN(viewCount)) { // Handle cases where parseInt might return NaN
          console.warn(`DEBUG: parseInt returned NaN for storedCount '${storedCount}'. Resetting viewCount to 0.`);
          viewCount = 0;
          await AsyncStorage.setItem(IMAGE_VIEW_COUNT_KEY, '0'); // Reset corrupted value
        }
      } else {
        console.log(`DEBUG: No stored count found for ${IMAGE_VIEW_COUNT_KEY}, using default 0.`);
        // Ensure it's set to 0 in AsyncStorage if it was null/undefined for the first time for this user
        await AsyncStorage.setItem(IMAGE_VIEW_COUNT_KEY, '0');
      }
    } catch (e) {
      console.error("Failed to load image view count", e);
      viewCount = 0; // Default to 0 on error
    }
    console.log(`DEBUG: Parsed viewCount is: ${viewCount}`);

    if (viewCount < IMAGE_VIEW_LIMIT) {
      console.log(`DEBUG: viewCount (${viewCount}) < IMAGE_VIEW_LIMIT (${IMAGE_VIEW_LIMIT}). Allowing view.`);
      navigation.navigate(navigationTarget.screen, navigationTarget.params);
      // Increment count after successful navigation (meaning the view will occur)
      const newViewCount = viewCount + 1;
      try {
        await AsyncStorage.setItem(IMAGE_VIEW_COUNT_KEY, newViewCount.toString());
        console.log(`DEBUG: Incremented and saved ${IMAGE_VIEW_COUNT_KEY} to: ${newViewCount}`);
        // For verification:
        // const checkStoredCount = await AsyncStorage.getItem(IMAGE_VIEW_COUNT_KEY);
        // console.log(`DEBUG: Verified stored count after setItem: ${checkStoredCount}`);
      } catch (e) {
        console.error("Failed to save incremented view count", e);
      }
      return true; // Proceeded
    } else {
      // Limit reached (viewCount is IMAGE_VIEW_LIMIT or more), show paywall
      console.log(`DEBUG: viewCount (${viewCount}) >= IMAGE_VIEW_LIMIT (${IMAGE_VIEW_LIMIT}). Presenting paywall.`);
      const result = await RevenueCatUI.presentPaywall();

      if (result && (result.paywallResult === PAYWALL_RESULT.PURCHASED || result.paywallResult === PAYWALL_RESULT.RESTORED)) {
        // Purchase successful, reset count and navigate
        try {
          await AsyncStorage.setItem(IMAGE_VIEW_COUNT_KEY, '0');
        } catch (e) {
          console.error("Failed to reset view count after purchase", e);
        }
        navigation.navigate(navigationTarget.screen, navigationTarget.params);
        return true; // Proceeded
      } else {
        // Paywall cancelled or error
        const Alert = require('react-native').Alert; // Require Alert
        Alert.alert("Free Views Limit Reached", "You've used all your free prompt views. Please subscribe for unlimited access.");
        return false; // Blocked
      }
    }
  } catch (error) {
    console.error("Error in handlePromptViewAttempt:", error);
    const Alert = require('react-native').Alert; // Require Alert
    Alert.alert("Error", "An unexpected error occurred. Please try again.");
    return false; // Blocked due to error
  }
};
