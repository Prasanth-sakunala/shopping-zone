import { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Navigation from '../components/navigation';

const MenuScreen = ({route}) => {
    const {categories,navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent}=route.params
    const [searchQuery, setSearchQuery] = useState('');


    const renderCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.overlayContainer} />
            <Text style={styles.category}>{item.name}</Text>
            <Image source={{ uri: item.image }} style={styles.image} />
            
        </View>
    );

    return (
        <View style={styles.container}>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View>
            <FlatList
                data={categories}
                renderItem={renderCard}
                keyExtractor={(item,index) => index.toString()}
                numColumns={2}
            />
        </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
          <Text>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text>Buy Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text>Lists</Text>
          </TouchableOpacity>
        </View>
          <Navigation navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} navigateToMenu={navigateToMenu} displayCartComponent={displayCartComponent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:'white'
    },
    scrollContainer:{
      height:100,
      marginBottom:80

    },
    card: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        padding:10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    overlayContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '55%', 
        backgroundColor: '#AFEEEE', // Second background color
        borderTopRightRadius: 60, // Adjust the curve
        borderTopLeftRadius: 60, // Adjust the curve
    },
    buttonContainer:{
      position:'absolute',
      flexDirection:'row',
      backgroundColor:'white',
      left:0,
      right:0,
      bottom:55,
      padding:20,
      paddingBottom:10,
      justifyContent:'space-between',
      borderTopRightRadius: 20, // Adjust the curve
      borderTopLeftRadius: 20, // Adjust the curve
      shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4,
    },
    button:{
      paddingTop:5,
      paddingBottom:5,
      padding:10,
      borderWidth:1,
      borderColor: '#ddd',
      borderRadius:8,
    }
});

export default MenuScreen;