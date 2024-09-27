import { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Dimensions, TouchableOpacity, FlatList,TextInput, Image,ScrollView } from 'react-native';
import axios from 'axios';
import Header from '../components/header';
import Swiper from 'react-native-swiper';
import Navigation from '../components/navigation';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');
const HomeScreen = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [categories,setCategories]=useState([]);
    const [searchQuery,setSearchQuery] = useState('');
    const ads={
      "images": [
            "https://i.ytimg.com/vi/Zzk1JAbKMeg/maxresdefault.jpg",
            "https://i.pinimg.com/originals/21/4c/03/214c035eaee40a3cb5209af31dd6c99e.jpg",
            "https://images.all-free-download.com/images/graphiclarge/ecommerce_website_banner_template_shoppers_sketch_6920121.jpg"
        ]
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
          try {
              const response = await axios.get('https://dummyjson.com/products');
              const products = response.data;
              setProducts(products.products); 
          } catch (error) {
              console.error(error);
          }
      };
    
      useEffect(() => {
        fetchCategoriesWithImages();
    }, []);
      const fetchCategoriesWithImages = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            const categories = response.data;
            const categoriesWithImages = await Promise.all(categories.map(async (category) => {
                const categoryDetailsResponse = await axios.get(category.url);
                const product = categoryDetailsResponse.data.products;
                const representativeImage = product.length > 0 ? product[0].thumbnail : null; // Use the first product's thumbnail as the category image
                return {
                    ...category,
                    image: representativeImage, // Add the image URL to the category object
                };
            }));
    
            setCategories(categoriesWithImages); // Update your state with the new data
        } catch (error) {
            console.error(error);
        }
    };
    

    const displayCartComponent = () => {
        navigation.navigate('Cart',{displayCartComponent,navigateToHome,navigateToProfile,navigateToMenu});
    };
    const navigateToHome = () => {
        navigation.navigate('Home');
    };
     const navigateToProfile=()=>{
       navigation.navigate('Profile', {navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent});
     }
     const navigateToMenu=()=>{
       navigation.navigate('Menu', {categories,navigateToHome,navigateToProfile,navigateToMenu,displayCartComponent});
     }

    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const renderProductItem = ({ item }) => (
        <TouchableOpacity style={styles.gridItem} 
         onPress={() => navigation.navigate("Product", {item,displayCartComponent,navigateToHome,navigateToProfile,navigateToMenu})}>
         <View style={styles.overlayContainer} />
          <Image source={{ uri: item.images[0] }} style={styles.poster} />            
            <Text style={{padding:5}}>{item.title}</Text>
            <Text style={{padding:5,fontWeight:'bold'}}>$ {item.price}</Text>
        
            
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.deliveryContainer}>
                <TouchableOpacity style={styles.locationContainer}>
                    <MaterialIcons name="location-on" size={24} color="black" style={{marginRight:6,}} />
                    <Text style={styles.deliveryText}>Deliver to Prasanth-Hyderabad 53314</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </TouchableOpacity>
            </View>
        
           <FlatList
                  data={categories}
                  renderItem={({ item }) => ( 
                    <TouchableOpacity style={styles.categoryItem}>
                      <Image source={{ uri: item.image }} style={styles.categoryPoster} />
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()} // Use index as a fallback key
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
            <View style={styles.gridContainer}>    
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                {ads.images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </Swiper>
             </View>
            <FlatList
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
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
      height:300,
      marginBottom:36
    },
    deliveryContainer: {
      flexDirection: 'row', // Align children in a single row
      alignItems: 'center', // Align items vertically in the center
      justifyContent: 'space-between', // Distribute space between children
      padding: 8, // Add some padding around the container
      backgroundColor:"#ADD8E6",
      marginBottom:10,
    },
    locationContainer: {
      flexDirection: 'row', // Align icon and text in a single row
      alignItems: 'center', // Align items vertically in the center
    },
    deliveryText: {
      fontSize: 12, // Set text size
      color: 'black', // Set text color
    },
    wrapper: {
        height: 200,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width - 40, // Subtracting padding from both sides
        height:'100%',
        resizeMode: 'contain',
    },
    categoryPoster: {
        width: '100%',
        height: '60%',
        borderRadius:5
    },
    categoryItem: {
        flex: 1,
        width:90,
        height:80,
        marginRight:10,
        justifyContent:'center'
    },
    poster: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingBottom:20,
    },
    gridItem: {
        flex: 0.5,
        marginBottom: 16,
        marginHorizontal:10,
        borderWidth: 1,
        height:180,
        borderColor: 'gray',
        borderRadius: 8,
        overflow: 'hidden',
        paddingTop:20,
        position: 'relative', 
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
});


export default HomeScreen;