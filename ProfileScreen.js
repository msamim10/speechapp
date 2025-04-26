import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './constants/colors';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={styles.subText}>Content coming soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundLight,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  subText: {
      fontSize: 16,
      color: colors.textSecondary,
  }
});

export default ProfileScreen; 