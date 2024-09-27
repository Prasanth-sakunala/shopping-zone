import React from 'react';
import { View, Text, Image, Button, StyleSheet,TouchableOpacity} from 'react-native';

const OrderSuccess = ({route,navigation}) => {
  const {totalAmount}=route.params;
    return (
        <View style={styles.container}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/5290/5290058.png'}} style={styles.successImage} />
            <Text style={styles.header}>Your order has been placed!</Text>
            <Text style={styles.summaryHeader}>Order Summary:</Text>
            <View style={styles.summary}>
            <View style={styles.summaryDetails}>
            <Text>Item Price:</Text> <Text>${totalAmount}</Text>
            </View><View style={styles.summaryDetails}>
            <Text>Shipment Charges:</Text> <Text> $5</Text>
            </View><View style={styles.summaryDetails}>
            <Text style={{fontSize:16}}>Total Price:</Text> <Text style={{fontWeight:'bold',fontSize:16}}> ${totalAmount+5}</Text>
            </View>
             <View style={{marginTop:20}}>
            <Button title="Generate Invoice" onPress={generateInvoice} />
            </View>
            </View>
          <TouchableOpacity style={styles.homeNav} onPress={()=>navigation.navigate('Home')}>
         
          <Text style={{color:'white',fontWeight:'bold'}}>Go Back to Home</Text>
          </TouchableOpacity>

        </View>
    );
};

const generateInvoice = () => {
    alert('Invoice generated successfully!');
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor:'white',
    },
    successImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    homeNav:{
      borderRadius:10,
      margin:10,
      padding:10,
      backgroundColor:'#3399ff'

    },
    summary:{
      padding:10,
      width:'90%',
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:20
    },
    summaryDetails:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
});

export default OrderSuccess;