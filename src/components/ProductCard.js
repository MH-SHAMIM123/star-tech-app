import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { COLORS, SIZES } from '../utils/constants';

const ProductCard = ({ product, onPress }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    }));
  };

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{
        width: '48%',
        backgroundColor: 'white',
        borderRadius: SIZES.borderRadius,
        marginBottom: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View style={{
        width: '100%',
        height: 120,
        backgroundColor: '#F5F5F5',
        borderRadius: 4,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ color: COLORS.textLight, fontSize: 12 }}>📦 Product Image</Text>
      </View>
      
      <Text 
        numberOfLines={2} 
        style={{ 
          fontSize: 14, 
          fontWeight: '500',
          color: COLORS.text,
          marginBottom: 4,
          height: 40,
          lineHeight: 18
        }}
      >
        {product.name}
      </Text>
      
      <Text style={{ 
        color: COLORS.primary, 
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 8
      }}>
        ৳{product.price.toLocaleString()}
      </Text>
      
      <TouchableOpacity 
        onPress={handleAddToCart}
        style={{
          backgroundColor: COLORS.primary,
          padding: 8,
          borderRadius: 4,
          alignItems: 'center'
        }}
      >
        <Text style={{ 
          color: 'white', 
          fontSize: 12,
          fontWeight: 'bold' 
        }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;