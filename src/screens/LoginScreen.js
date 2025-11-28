/**
 * Login Screen
 * 
 * Features:
 * - Email/password login
 * - Form validation
 * - Error handling
 * - Navigation to register
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../store/authSlice';
import { COLORS, SIZES } from '../utils/constants';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      const result = await dispatch(loginUser(formData));
      if (result.payload?.token) {
        Alert.alert('Success', 'Login successful!');
        // Navigation will be handled by useEffect in AppNavigator
      }
    } catch (err) {
      // Error handled by Redux
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: 'center',
          padding: SIZES.padding,
          backgroundColor: COLORS.background,
        }}
      >
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: COLORS.primary }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.textLight, marginTop: 8 }}>
            Sign in to your Star Tech account
          </Text>
        </View>

        {/* Error Message */}
        {error && (
          <View style={{
            backgroundColor: '#FFE6E6',
            padding: 12,
            borderRadius: SIZES.borderRadius,
            marginBottom: 16,
            borderLeftWidth: 4,
            borderLeftColor: COLORS.primary,
          }}>
            <Text style={{ color: '#D32F2F', fontSize: 14 }}>❌ {error}</Text>
          </View>
        )}

        {/* Login Form */}
        <View style={{
          backgroundColor: 'white',
          padding: SIZES.padding * 1.5,
          borderRadius: SIZES.borderRadius,
          borderWidth: 1,
          borderColor: COLORS.border,
        }}>
          {/* Email Input */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '500', 
              marginBottom: 8,
              color: COLORS.text 
            }}>
              Email Address
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: COLORS.border,
                borderRadius: SIZES.borderRadius,
                padding: 12,
                fontSize: 16,
                backgroundColor: '#F9F9F9',
              }}
              placeholder="Enter your email"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View style={{ marginBottom: 25 }}>
            <Text style={{ 
              fontSize: 16, 
              fontWeight: '500', 
              marginBottom: 8,
              color: COLORS.text 
            }}>
              Password
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: COLORS.border,
                borderRadius: SIZES.borderRadius,
                padding: 12,
                fontSize: 16,
                backgroundColor: '#F9F9F9',
              }}
              placeholder="Enter your password"
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              secureTextEntry
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={{
              backgroundColor: loading ? '#CCCCCC' : COLORS.primary,
              padding: 16,
              borderRadius: SIZES.borderRadius,
              alignItems: 'center',
              marginBottom: 20,
            }}
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={{ 
              color: 'white', 
              fontSize: 16, 
              fontWeight: 'bold' 
            }}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: COLORS.textLight, fontSize: 14 }}>
              Don't have an account?{' '}
              <Text 
                style={{ color: COLORS.primary, fontWeight: 'bold' }}
                onPress={() => navigation.navigate('Register')}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </View>

        {/* Demo Credentials */}
        <View style={{ 
          marginTop: 30, 
          padding: 16, 
          backgroundColor: '#F0F8FF',
          borderRadius: SIZES.borderRadius,
        }}>
          <Text style={{ 
            fontSize: 14, 
            fontWeight: 'bold', 
            color: COLORS.primary,
            marginBottom: 8,
          }}>
            Demo Credentials:
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.textLight }}>
            Email: demo@startech.com
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.textLight }}>
            Password: password123
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;