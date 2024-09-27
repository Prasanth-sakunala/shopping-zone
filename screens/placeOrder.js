
import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView,FlatList,Modal } from 'react-native';
import {useEffect,useState} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlaceOrder = ({route,navigation}) => {
  const {cartItems,total}=route.params;
  const [quantitySelectorVisible, setQuantitySelectorVisible] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [items, setItems] = useState(cartItems);
  const [totalAmount, setTotalAmount] = useState(total);
   
    

  const openQuantitySelector = (index) => {
    setSelectedItemIndex(index);
    setQuantitySelectorVisible(true);
  };
  useEffect(() => {
    calculateTotalAmount();
    }, [items]); 

  const selectQuantity = (quantity) => {
    const updatedItems = items.map((item, index) => {
    if (index === selectedItemIndex) {
      return { ...item, quantity: quantity };
    }
    return item;
  });
    setItems(updatedItems);
    setQuantitySelectorVisible(false); 
  };

  const deleteItem = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  const calculateTotalAmount = () => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  };

    const deliveryCharge = 5.00; 
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Cancel</Text>
                    </TouchableOpacity>
            </View>
            <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Order Now</Text>
                <View style={styles.shippingContainer}>
                    <Text style={{padding:5,borderBottomWidth:1,borderColor:'#b3b3b3',marginBottom:10}}>Shipping to:<Text style={{fontWeight:'black'}}>Prasanth,Room no 201,spring...</Text></Text>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Items:</Text>
                    <Text style={{fontWeight:'bold'}}>${totalAmount}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Delivery:</Text>
                    <Text style={{fontWeight:'bold'}}>${deliveryCharge}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{fontSize:18,}}>Order Total:</Text>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>${parseFloat(totalAmount+deliveryCharge).toFixed(2)}</Text>
                </View>
              </View>
                <View style={styles.deliveryContainer}>
                    {items.map((item, index) => (
                        <View key={index}>
                            <Text style={{fontSize:20,fontFamily:'semi-bold',marginBottom:10}}>Shipment {index + 1} of {cartItems.length}</Text>
                            <View style={styles.productMain}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'green',padding:10,borderBottomWidth:1,borderColor:'#b3b3b3'}}>{item.shippingInformation}</Text>
                            <View style={styles.productContainer}>
                            <Image source={{uri: item.images[0]}} style={styles.productImage} />
                            <View style={styles.detailsContainer}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <Text style={styles.productPrice}>${item.price}</Text>
                                <TouchableOpacity style={styles.quantityButton} onPress={() => openQuantitySelector(index)}>
                                <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
                                <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{borderWidth:1,borderRadius:20,width:'40%',paddingLeft:10,marginTop:10,backgroundColor:'#f2f2f2'}} onPress={()=>deleteItem(index)}>
                                    <Text>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                            </View>
                        </View>
                        ))}
                  <Modal visible={quantitySelectorVisible} animationType="slide" transparent={true}>
                        <View style={styles.modalContainer}>
                            <FlatList
                                data={Array.from({ length: 20 }, (_, i) => i + 1)}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => selectQuantity(item)}>
                                        <Text style={styles.quantityOption}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.toString()}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </Modal>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('OrderSuccess',{totalAmount})}>
                            <Text style={styles.buttonText}>Place Your Order and Pay</Text>
                        </TouchableOpacity>
                    </ScrollView>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productMain:{
      borderWidth:1,
      borderColor:'#b3b3b3',
      borderRadius:10,
      marginBottom:10,
      backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor:"#B0E0E6",
      },
    mainContainer: {
        padding: 16,
        height:100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    shippingContainer: {
        marginBottom: 16,
        borderWidth:1,
        borderColor:'#b3b3b3',
        borderRadius:10,
        backgroundColor: 'white',
        padding:10
    },
    deliveryContainer: {
        marginTop: 16,
    },
    
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        marginBottom: 10,
      },
      productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
      },
      detailsContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 14,
        color: 'grey',
      },
      quantityButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      quantityText: {
        marginRight: 5,
      },
      button: {
        flex: 1,
        backgroundColor: '#ffd633',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
    },
    buttonText: {
        textAlign: 'center',
    },
    modalContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxHeight: '80%', // Limit the height
        width: '20%', // Set width
        alignSelf: 'center', // Center the modal
        marginTop: '20%', // Adjust the top margin to center the modal vertically
    },
    quantityOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
        width: '100%', // Ensure it spans the width of the modal
    },
});

export default PlaceOrder;