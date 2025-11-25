import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { removeFromCart } from '../store/cartSlice';
import { COLORS, SIZES } from '../utils/constants';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header 
        onSearchPress={() => navigation.navigate('Search')}
        onCartPress={() => navigation.navigate('Cart')}
        cartCount={cartItems.length}
      />
      
      <ScrollView style={{ flex: 1, padding: SIZES.padding }}>
        {cartItems.length === 0 ? (
          <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 50 }}>
            <Text style={{ fontSize: 18, color: COLORS.textLight, marginBottom: 10 }}>🛒 Your cart is empty</Text>
            <Text style={{ fontSize: 14, color: COLORS.textLight, textAlign: 'center' }}>
              Browse our products and add items to your cart!
            </Text>
          </View>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <View key={index} style={{
                backgroundColor: 'white',
                borderRadius: SIZES.borderRadius,
                padding: SIZES.padding,
                marginBottom: 12,
                borderWidth: 1,
                borderColor: COLORS.border,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <View style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#F5F5F5',
                  borderRadius: 4,
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{ fontSize: 12, color: COLORS.textLight }}>📦</Text>
                </View>
                
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.text }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.primary, marginVertical: 4 }}>
                    ৳{item.price.toLocaleString()}
                  </Text>
                  <Text style={{ fontSize: 12, color: COLORS.textLight }}>
                    Qty: {item.quantity}
                  </Text>
                </View>
                
                <TouchableOpacity 
                  onPress={() => dispatch(removeFromCart(item.id))}
                  style={{
                    padding: 8,
                    backgroundColor: COLORS.primary,
                    borderRadius: 4,
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 12 }}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
            
            {/* Total Section */}
            <View style={{
              backgroundColor: 'white',
              borderRadius: SIZES.borderRadius,
              padding: SIZES.padding,
              borderWidth: 1,
              borderColor: COLORS.border,
              marginTop: 10,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: COLORS.text }}>Subtotal:</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.text }}>৳{total.toLocaleString()}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                <Text style={{ fontSize: 16, color: COLORS.text }}>Shipping:</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.text }}>৳100</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: COLORS.border, paddingTop: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.text }}>Total:</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.primary }}>৳{(total + 100).toLocaleString()}</Text>
              </View>
              
              <TouchableOpacity 
                style={{
                  backgroundColor: COLORS.primary,
                  padding: 16,
                  borderRadius: SIZES.borderRadius,
                  alignItems: 'center',
                  marginTop: 16,
                }}
              >
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;