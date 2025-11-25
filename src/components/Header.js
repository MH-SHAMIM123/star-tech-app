/**
 * App Header Component
 * 
 * Features:
 * - Logo display
 * - Search bar
 * - Shopping cart with badge
 * - Menu button
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../utils/constants';

const Header = ({ onSearchPress, onCartPress, cartCount, onMenuPress }) => {
  return (
    <View style={{
      backgroundColor: COLORS.headerBg,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.border,
      paddingVertical: 10,
    }}>
      {/* Top Bar with Menu, Logo and Cart */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        marginBottom: 8,
      }}>
        {/* Menu Button */}
        <TouchableOpacity onPress={onMenuPress} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>☰</Text>
        </TouchableOpacity>
        
        {/* Logo */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.primary }}>
            Star Tech
          </Text>
        </View>
        
        {/* Cart Icon with Badge */}
        <TouchableOpacity onPress={onCartPress} style={{ position: 'relative', marginLeft: 15 }}>
          <Text style={{ fontSize: 20 }}>🛒</Text>
          {cartCount > 0 && (
            <View style={{
              position: 'absolute',
              top: -5,
              right: -5,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {cartCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      
      {/* Search Bar */}
      <TouchableOpacity 
        onPress={onSearchPress}
        style={{
          marginHorizontal: SIZES.padding,
          padding: 12,
          backgroundColor: COLORS.searchBg,
          borderRadius: SIZES.borderRadius,
          borderWidth: 1,
          borderColor: COLORS.border,
        }}
      >
        <Text style={{ color: COLORS.textLight, fontSize: 14 }}>
          🔍 Search products...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;