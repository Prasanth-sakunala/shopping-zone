import { View, Text, Image, StyleSheet, TouchableOpacity, Button,ScrollView } from 'react-native';
import Header from '../components/header';
import Navigation from '../components/navigation';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { MaterialIcons } from '@expo/vector-icons';

const Product = ({route,navigation}) => {
    const { item,displayCartComponent,navigateToHome,navigateToProfile,navigateToMenu} = route.params;
    const dispatch = useDispatch();
    const cartItems=[{ ...item, quantity: 1 }];
    const handleAddToCart = () => {
        dispatch(addToCart(item));
    };
    const total=item.price;
    const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
        <MaterialIcons
            key={i}
            name="star"
            size={15}
            color={i <= rating ? 'orange' : 'grey'}
        />
        );
    }
    return stars;
    };

return (
    <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>{item.description}</Text>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.rating}>{renderStars(item.rating)}</View>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.shippingInfo}>{item.shippingInformation}</Text>
        <Text style={styles.availability}>{item.availabilityStatus}</Text>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={()=>{
          navigation.navigate('Payment',{cartItems,total})
        }}>
          <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        <Text style={styles.sectionTitle}>Product Details</Text>
        <Text style={styles.subTitle}>Top Highlights</Text>
        <View style={styles.productDetails}>
        <Text>Brand</Text>
        <Text >{item.brand}</Text>
        </View>
        <View style={styles.productDetails}>
        <Text>Dimensions</Text>
        <Text >{item.dimensions.height}H X {item.dimensions.width}W X {item.dimensions.depth}D</Text>
        </View>
        <View style={styles.productDetails}>
        <Text>Weight</Text>
        <Text >{item.weight}</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Customer Reviews</Text>
        {item.reviews.map((review, index) => (
          <View style={{padding:10}}>
            <View key={index} style={styles.review}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name="account-circle" size={24} />
            <Text style={styles.reviewerName}>{review.reviewerName}</Text></View>
            <View style={styles.rating}>{renderStars(review.rating)}</View></View>
            <Text style={styles.comment}>{review.comment}</Text>
            </View>
        ))}
        </ScrollView>
        <Navigation navigateToHome={navigateToHome} navigateToProfile={navigateToProfile} navigateToMenu={navigateToMenu} displayCartComponent={displayCartComponent} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'white'
    },
    scrollContainer:{
      height:50,
      marginBottom:36
    },
    description: {
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      rating: {
        flexDirection: 'row',
        marginBottom: 10,
      },
      price: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
      },
      shippingInfo: {
        marginBottom: 10,
      },
      availability: {
        marginBottom: 10,
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
      },
      subTitle: {
        fontSize: 18,
        marginBottom: 10,
      },
     productDetails:{
       flexDirection:'row',
       justifyContent:'space-between',
     },
      review: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },
      reviewerName: {
        marginLeft: 0,
        fontWeight: 'bold',
      },
      comment: {
        marginTop: 2,
      },
      button: {
        flex: 1,
        backgroundColor: '#ffd633',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
        marginBottom:10
    },
    buyButton: {
        flex: 1,
        backgroundColor: 'orange',
        borderRadius: 30,
        padding: 8,
        marginRight: 8,
        marginBottom:10
    },
    buttonText: {
        textAlign: 'center',
    },
});

export default Product;