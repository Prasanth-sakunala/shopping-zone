import React from 'react';
import { TouchableOpacity, StyleSheet,View,Image,Text,ScrollView } from 'react-native';

import Header from '../components/header';
import Navigation from '../components/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import {removeFromCart} from '../redux/cartSlice';

export default function CartComponent({ route,navigation }) {
    const {displayCartComponent,navigateToHome,navigateToProfile,navigateToMenu}=route.params;
    const dispatch=useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const total=useSelector(state=>state.cart.totalPrice);
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    const handleRemoveFromCart=(item)=>{
      dispatch(removeFromCart(item.id));
    }

  return (
    <View style={styles.container}>
            <Header displayCartComponent={displayCartComponent} cartItemsCount={cartItems.length}/>
          <View>
          <Text style={{fontSize:15,padding:10}}>Subtotal $<Text style={{fontSize:25}}> {total}</Text></Text>
          <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate('Payment',{cartItems,total})
        }}>
            <Text style={styles.buttonText}>Proceed To Buy({totalItems} items)</Text>
          </TouchableOpacity>
          </View>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {cartItems.map((item, index) => (
            <View key={index} style={styles.card}>
                <Image source={{ uri: item.images[0] }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity title='-' style={styles.valueButton} 
                        onPress={() => handleRemoveFromCart(item)}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{item.quantity}</Text>
                        <TouchableOpacity title='+' style={styles.valueButton} 
                        onPress={() => handleAddToCart(item)}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        ))}
        </ScrollView>
        
        <Navigation navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} navigateToMenu={navigateToMenu}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    scrollContainer:{
      height:200,
      marginBottom:36
    },
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom:10
    },
    price: {
        fontSize: 14,
        paddingBottom:10
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        borderRadius: 5,
    },
    button: {
        flex: 1,
        backgroundColor: '#ffd633',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
        marginBottom:10
    },
    buttonText: {
        textAlign: 'center',
    },
    quantity: {
        marginHorizontal: 10,
    }
});