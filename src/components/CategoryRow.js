import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../utils/constants';

const { width } = Dimensions.get('window');

const CategoryRow = ({ navigation }) => {
  const categories = [
    { id: 1, name: 'Desktop', icon: '🖥️' },
    { id: 2, name: 'Laptop', icon: '💻' },
    { id: 3, name: 'Component', icon: '⚙️' },
    { id: 4, name: 'Monitor', icon: '📺' },
    { id: 5, name: 'Power', icon: '🔌' },
    { id: 6, name: 'Phone', icon: '📱' },
    { id: 7, name: 'Tablet', icon: '📟' },
    { id: 8, name: 'Office Equipment', icon: '🖨️' },
    { id: 9, name: 'Camera', icon: '📷' },
    { id: 10, name: 'Security', icon: '🔒' },
    { id: 11, name: 'Networking', icon: '🌐' },
    { id: 12, name: 'Software', icon: '💿' },
    { id: 13, name: 'Server & Storage', icon: '🗄️' },
    { id: 14, name: 'Accessories', icon: '🎧' },
    { id: 15, name: 'Gadget', icon: '⌚' },
    { id: 16, name: 'Gaming', icon: '🎮' },
    { id: 17, name: 'TV', icon: '📡' },
    { id: 18, name: 'Appliance', icon: '🏠' }
  ];

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 12,
        color: COLORS.text,
        paddingHorizontal: SIZES.padding
      }}>
        Categories
      </Text>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding }}
      >
        <View style={{ flexDirection: 'row' }}>
          {categories.map((category) => (
            <TouchableOpacity 
              key={category.id}
              style={{
                width: 80,
                alignItems: 'center',
                marginRight: 15,
              }}
              onPress={() => navigation.navigate('Category', { category: category.name })}
            >
              <View style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.categoryBg,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 8,
                borderWidth: 1,
                borderColor: COLORS.border,
              }}>
                <Text style={{ fontSize: 20 }}>{category.icon}</Text>
              </View>
              <Text 
                style={{ 
                  fontSize: 12, 
                  textAlign: 'center',
                  color: COLORS.text,
                  fontWeight: '500'
                }}
                numberOfLines={2}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryRow;