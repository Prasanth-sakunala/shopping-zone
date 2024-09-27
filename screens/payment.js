import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
const Payment = ({ navigation,route }) => {
  const {cartItems,total}=route.params;
  const [checked, setChecked] = useState('gpay');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.continueButton} onPress={()=>{
          navigation.navigate('PlaceOrder',{cartItems,total})
        }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select a Payment Method</Text>
        <Text style={styles.title}>UPI</Text>
        <View style={styles.paymentOption}>
          <RadioButton
            value="gpay"
            status={checked === 'gpay' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('gpay')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=am4ltuIYDpQ5&format=png&color=000000"}} style={{marginRight:10,height:20,width:20}}/>
          <Text>Google Pay</Text>
        </View>
        <View style={styles.paymentOption}>
          <RadioButton
            value="PhonePe"
            status={checked === 'PhonePe' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('PhonePe')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=OYtBxIlJwMGA&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}} />         <Text>PhonePe</Text>
        </View>
        <View style={styles.paymentOption}>
          <RadioButton
            value="Paytm"
            status={checked === 'Paytm' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Paytm')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=zB8j6RfneRmV&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}}/>
          <Text>Paytm</Text>
        </View>
        <View style={styles.paymentOption}>
          <RadioButton
            value="Cred"
            status={checked === 'Cred' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Cred')}
          />
         
          <Image source={{uri:"https://static-00.iconduck.com/assets.00/cred-icon-1740x2048-q1yyh1es.png"}} style={{marginRight:10,height:20,width:20}} />
           <Text>Cred</Text>
        </View>
        <Text style={styles.title}>Credit & Debit Card</Text>
        <View style={styles.paymentOption}>
          <RadioButton
            value="Card"
            status={checked === 'Card' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Card')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=22185&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}}/>
          <Text>Credit or Debit Card</Text>
        </View>
        <Text style={styles.title}>More Ways to Pay</Text>
        <View style={styles.paymentOption}>
          <RadioButton
            value="Emi"
            status={checked === 'Emi' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Emi')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=9wDxxp4jshFy&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}}/>
          <Text>EMI</Text>
        </View>
        <View style={styles.paymentOption}>
          <RadioButton
            value="COD"
            status={checked === 'COD' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('COD')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=40468&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}}/>
          <Text>Cash on Delivery</Text>
        </View>
        <View style={styles.paymentOption}>
          <RadioButton
            value="NetBanking"
            status={checked === 'NetBanking' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('NetBanking')}
          />
          
          <Image source={{uri:"https://img.icons8.com/?size=100&id=9Qu2cx0zZ5i9&format=png&color=000000"}}  style={{marginRight:10,height:20,width:20}}/>
          <Text>Net Banking</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor:"#B0E0E6",
  },
  content: {
    padding: 20,
    height:100,
    backgroundColor:'white',
  },
    continueButton: {
        flex: 1,
        backgroundColor: '#ffd633',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
    },
   buttonText: {
        textAlign: 'center',
    },
title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Payment;