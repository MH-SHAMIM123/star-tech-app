/**
 * Star Tech - E-commerce Mobile App
 * Main App Component
 * 
 * Features:
 * - Redux Store Provider
 * - Navigation Setup
 * - Status Bar Configuration
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppNavigator />
    </Provider>
  );
}