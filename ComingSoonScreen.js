import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from './constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

function ComingSoonScreen() {
  const navigation = useNavigation();
  const route = useRoute(); // Get route params
  const categoryName = route.params?.categoryName || 'This category';

  return (
    <View style={styles.container}>
      <Ionicons name="construct-outline" size={80} color={colors.textSecondary} style={styles.icon} />
      <Text style={styles.title}>Coming Soon!</Text>
      <Text style={styles.message}>
        Content for the "{categoryName}" category is currently under development.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: colors.background,
    paddingTop: 50, // Status bar padding
  },
  icon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComingSoonScreen; 