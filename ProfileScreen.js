import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colors from './constants/colors';

function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.userBio}>Short bio about the user. Loves coding and coffee.</Text>
      </View>
      {/* Add more sections here if needed, e.g., user activity, settings, etc. */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white, // Card-like background for header
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // for Android shadow
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Make it circular
    marginBottom: 15,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  userName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  userBio: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 30, // Add some padding so text doesn't touch edges
  },
  // Remove old text styles if they are no longer used or redefine as needed
  // text: { ... }
  // subText: { ... }
});

export default ProfileScreen; 