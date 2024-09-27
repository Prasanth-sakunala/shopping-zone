// Import createSlice from Redux Toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Define the initial state of the cart
const initialState = {
    cartItems: [],
    totalPrice:0,
};

// Create a slice for the cart
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add item to cart
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
            if (itemInCart) {
                // Item exists, increase quantity
                itemInCart.quantity += 1;
            } else {
                // Item doesn't exist, add to cart with quantity 1
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
          state.totalPrice = parseFloat(state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
},
        // Remove item from cart (decrement quantity or remove if quantity is 1)
        removeFromCart: (state, action) => {
            const itemToRemove = state.cartItems.find(item => item.id === action.payload);
            if (itemToRemove && itemToRemove.quantity > 1) {
                // Reduce quantity if more than 1
                itemToRemove.quantity -= 1;
            } else {
                // Remove item from cart if quantity is 1
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
          state.totalPrice = parseFloat(state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
},
        // Delete item from cart (regardless of quantity)
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
    },
});

// Export the generated action creators
export const { addToCart, removeFromCart, deleteFromCart,calculateTotal } = cartSlice.actions;

// Create the Redux store with the defined slice
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

export default store;