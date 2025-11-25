/**
 * App Navigation Setup
 * 
 * Stack Navigator: For screen transitions
 * Bottom Tab Navigator: Main app navigation
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator for main app sections
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E51C36',  // Star Tech red for active tab
        tabBarInactiveTintColor: 'gray',   // Gray for inactive tabs
        headerShown: false,                // Hide header for tabs
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen}
        options={{ 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🏠</Text>
        }}
      />
      <Tab.Screen 
        name="CartTab" 
        component={CartScreen}
        options={{ 
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>🛒</Text>
        }}
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen}
        options={{ 
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Text style={{ fontSize: size, color }}>👤</Text>
        }}
      />
    </Tab.Navigator>
  );
}

// Main App Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={HomeTabs} options={{ headerShown: false }} />
        {/* Add more screens here for product details, search, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}