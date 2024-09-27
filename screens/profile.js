import React from 'react';
import { View, Text, TouchableOpacity,Image,FlatList,ScrollView,StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Navigation from '../components/navigation';
import { useSelector } from 'react-redux';
const Profile = ({route,navigation}) => {
  const {navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent} = route.params;
  const cartItems = useSelector(state => state.cart.cartItems);
  const pastOrders=[
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    },
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    },
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    },
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    },
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    },
    {
      "image":"https://tse3.mm.bing.net/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
      "title":"Perfume",
    }
  ]
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.logoContainer}>
                    <Image 
                    source={{uri : "https://logodownload.org/wp-content/uploads/2014/04/amazon-logo-0.png"}}
                    style={{ width: 120, height: 70,marginTop:10 }}/>
                </View>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialIcons name="notifications" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <MaterialIcons name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.user}>
            <MaterialIcons name="account-circle" size={24} color="black" style={{marginRight:6}}/>
            <Text style={styles.userTitle}>Hello, User</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </TouchableOpacity>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Your Orders</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Buy Again</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('ProfileAccount',{navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent})
                    }}>
                        <Text style={styles.buttonText}>Your Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Your Lists</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Your Orders</Text>
                <TouchableOpacity style={styles.seeAllButton}>
                    <Text style={styles.seeAllButtonText}>See All</Text>
                </TouchableOpacity>
                <FlatList
                  data={pastOrders}
                  renderItem={({ item }) => ( 
                    <TouchableOpacity style={styles.productItem}>
                      <Image source={{ uri: item.image }} style={styles.poster} />
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()} // Use index as a fallback key
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
            </View>
            </ScrollView>
            <Navigation navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} navigateToMenu={navigateToMenu} displayCartComponent={displayCartComponent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'white'
    },
    scrollContainer:{
      height:100,
      marginBottom:38
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,
        height:50,
        backgroundColor:'#B0E0E6',
        padding:10
    },
    logoContainer: {
        // Add styles for logo containe
        marginRight:80,
    },
    iconContainer: {
        // Add styles for icon container
  
    },
    user:{
      flexDirection:'row',
    },
    buttonContainer: {
        marginTop:10,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    button: {
        flex: 1,
        borderWidth:1,
        borderRadius: 20,
        padding: 10,
        marginRight: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    userTitle: {
        fontSize: 15,
        marginBottom: 8,
    },
    seeAllButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        padding: 8,
        alignSelf: 'flex-start',
        marginBottom:10,
    },
    seeAllButtonText: {
        fontWeight: 'bold',
    },
    poster: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    productItem: {
        flex: 1,
        width:100,
        padding: 8,
        marginRight:10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
    },
});

export default Profile;