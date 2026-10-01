import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { COLORS, SPACE, RADIUS } from './theme';

const SettingsScreen = ({ navigation }) => {
  const logOut = () => {
    Alert.alert('Logged out', 'You have been logged out.', [
      { text: 'OK', onPress: () => navigation.dispatch(StackActions.replace('Login')) },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.button} onPress={logOut}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  box: { padding: SPACE.lg },
  button: { backgroundColor: COLORS.danger, borderRadius: RADIUS.md,
            padding: SPACE.md, alignItems: 'center' },
  buttonText: { color: COLORS.surface, fontWeight: '700' },
});

export default SettingsScreen;