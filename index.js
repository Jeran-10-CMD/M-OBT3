import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubjectsScreen from './SubjectsScreen';
import SettingsScreen from './SettingsScreen';
import SubjectDetailScreen from './SubjectDetailScreen';
import LoginScreen from './LoginScreen';
import { COLORS } from './theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ tabBarActiveTintColor: COLORS.primary }}>
    <Tab.Screen name="Subjects" component={SubjectsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const Obt3 = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="SubjectDetail" component={SubjectDetailScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Obt3;