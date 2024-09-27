import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/header';
import Navigation from '../components/navigation';

const ProfileAccount = ({route}) => {
    const { navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent} = route.params;
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.profile}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>John Doe</Text>
            <Text>+91-8903702837 .johndoe@example.com</Text>
            <TouchableOpacity style={{flexDirection:'row',width:100}}>
                <Text style={{color:'#FF4500'}}>Edit Profile</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color='#ff471a' />
                
            </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontWeight:'semibold',fontSize:15}}>Orders</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Your Orders</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Subscribe & Save</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                 </View>
                <Text style={{fontWeight:'semibold',fontSize:15}}>Account Settings</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text>Login & security</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Your Addresses</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Content Library</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Devices</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Payments & Refunds</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Review Your Purchases</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} />
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            <Navigation navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} navigateToMenu={navigateToMenu} displayCartComponent={displayCartComponent} />
        </View>
    );
};

export default ProfileAccount;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    scrollContainer:{
      height:200,
      padding:10
    },
    buttonContainer:{
      borderWidth:1,
      borderRadius:5,
      padding:5,
      borderColor:'#f0f0f0',
      margin:5
    },
    profile:{
      borderBottomWidth:1,
      borderBottomColor:'#FF4500'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#f0f0f0'
    }
})

