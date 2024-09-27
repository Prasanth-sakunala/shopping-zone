import { StyleSheet, View,TouchableOpacity,Image,Text } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';

export default function navigation({navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent}) {
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartItemsCount=cartItems.length;
  return (
    <View style={styles.navigation}>
        <TouchableOpacity style={styles.iconContainer} onPress={navigateToHome}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10263/10263405.png' }}
                style={{ width: 20, height: 20 }} // Adjust size as needed
            />
            <Text style={{fontSize:12,}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={navigateToProfile}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10264/10264787.png' }}
                style={{ width: 20, height: 20 }} // Adjust size as needed
            />
            <Text style={{fontSize:12,}}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartIconContainer} onPress={displayCartComponent}>
                <Image
                    source={{ uri: 'https://cdn-icons-png.flaticon.com/128/13882/13882237.png' }}
                    style={{ width: 20, height: 20 }} // Adjust size as needed
                />
                <Text style={{fontSize:12,}}>Cart</Text>
                {cartItemsCount > 0 && (
                    <View style={styles.badge}>
                    <Text style={styles.badgeText}>{cartItemsCount}</Text>
                    </View>
                )}
            </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={navigateToMenu}>
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5234/5234126.png' }}
                style={{ width: 20, height: 20 }} // Adjust size as needed
            />
            <Text style={{fontSize:12,}}>Menu</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    navigation: {
        position: 'absolute', // Position the navigation bar absolutely
        bottom: 0, // Align it to the bottom of the screen
        left: 0, // Align it to the left of the screen
        right: 0, // Align it to the right of the screen
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        paddingTop:5,
        backgroundColor:'white'
    },
    iconContainer: {
        padding: 8,
    },
    cartIconContainer: {
        padding: 8,
        position: 'relative',
      },
      badge: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: 10,
      },
})