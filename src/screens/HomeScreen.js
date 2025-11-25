import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import CategoryRow from '../components/CategoryRow';
import ProductCard from '../components/ProductCard';
import { COLORS, SIZES } from '../utils/constants';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.items.length);
  const [showMenu, setShowMenu] = useState(false);

  const offers = [
    'Labor Officer', 'Happy Hour', 'Special Chair', 'Account', 
    'Register or Login', 'PC Builder'
  ];

  const featuredProducts = [
    { id: 1, name: 'Gaming Laptop ASUS TUF Dash F15', price: 125000, image: '' },
    { id: 2, name: 'Samsung 32" Curved Gaming Monitor', price: 22000, image: '' },
    { id: 3, name: 'Mechanical Keyboard RGB Backlit', price: 4500, image: '' },
    { id: 4, name: 'Wireless Mouse Logitech MX Master', price: 1800, image: '' },
    { id: 5, name: 'iPhone 15 Pro Max 256GB', price: 145000, image: '' },
    { id: 6, name: 'PlayStation 5 Console + Controller', price: 65000, image: '' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <Header 
        onSearchPress={() => navigation.navigate('Search')}
        onCartPress={() => navigation.navigate('Cart')}
        onMenuPress={() => setShowMenu(!showMenu)}
        cartCount={cartCount}
      />
      
      {/* Side Menu */}
      {showMenu && (
        <View style={{
          position: 'absolute',
          top: 120,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          padding: SIZES.padding,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.border,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: COLORS.primary }}>
            OFFERS
          </Text>
          {offers.map((offer, index) => (
            <TouchableOpacity key={index} style={{ paddingVertical: 8 }}>
              <Text style={{ fontSize: 14, color: COLORS.text }}>{offer}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Banner Section */}
        <View style={{
          height: 150,
          backgroundColor: COLORS.primary,
          margin: SIZES.margin,
          borderRadius: SIZES.borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
            🎉 Star Tech - Best Deals 🎉
          </Text>
          <Text style={{ color: 'white', fontSize: 14, marginTop: 8, textAlign: 'center' }}>
            Genuine Products | Fast Delivery | Best Prices
          </Text>
        </View>

        {/* Categories Section */}
        <CategoryRow navigation={navigation} />

        {/* Featured Products */}
        <View style={{ paddingHorizontal: SIZES.padding }}>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: 12 
          }}>
            <Text style={{ 
              fontSize: 18, 
              fontWeight: 'bold',
              color: COLORS.text 
            }}>
              🔥 Featured Products
            </Text>
            <TouchableOpacity>
              <Text style={{ 
                color: COLORS.primary, 
                fontSize: 14,
                fontWeight: '500'
              }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Products Grid */}
          <View style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between' 
          }}>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetails', { product })}
              />
            ))}
          </View>
        </View>

        {/* Special Offers */}
        <View style={{ paddingHorizontal: SIZES.padding, marginTop: 20 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold',
            color: COLORS.text,
            marginBottom: 12
          }}>
            💫 Special Offers
          </Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row' }}>
              {offers.map((offer, index) => (
                <TouchableOpacity 
                  key={index}
                  style={{
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 20,
                    marginRight: 10,
                    minWidth: 120,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: '500', textAlign: 'center' }}>
                    {offer}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;