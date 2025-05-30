import Purchases from "react-native-purchases";
import { Platform } from "react-native";

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

    if (
      customerInfo.activeSubscriptions &&
      customerInfo.activeSubscriptions.length === 0
    ) {
      console.log("customerInfo ", customerInfo);

      return false;
    }
  } catch (e) {
    console.warn("Error checking subscription status:", e);
    return false;
  }
};
