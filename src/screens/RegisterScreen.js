import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../utils/constants';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: COLORS.background,
      padding: SIZES.padding 
    }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: COLORS.primary }}>
        Register Screen
      </Text>
      <Text style={{ 
        fontSize: 16, 
        color: COLORS.textLight, 
        marginBottom: 30, 
        textAlign: 'center' 
      }}>
        Registration functionality coming soon!
      </Text>
      
      <TouchableOpacity 
        style={{
          backgroundColor: COLORS.primary,
          padding: 15,
          borderRadius: SIZES.borderRadius,
          minWidth: 200,
          alignItems: 'center'
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;