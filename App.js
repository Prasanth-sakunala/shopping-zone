import Home from './screens/homescreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './screens/product';
import Cart from './screens/cartComponent';
import Profile from './screens/profile';
import { Provider } from 'react-redux';
import store from './redux/cartSlice';
import Menu from './screens/menu';
import ProfileAccount from './screens/profileAccount';
import Payment from './screens/payment';
import PlaceOrder from './screens/placeOrder';
import OrderSuccess from './screens/orderSuccess';
export default function App() {
  const Stack=createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
  <Stack.Screen name="Product" component={Product} />
  <Stack.Screen name="Cart" component={Cart} />
  <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="Menu" component={Menu} />
  <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
  <Stack.Screen name="Payment" component={Payment} />
  <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
  <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
