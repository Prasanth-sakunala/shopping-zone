// cartReducer.js

// Initial state of the cart
const initialState = {
    cartItems: [],
};

// Reducer function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':{
            const itemInCart = state.cartItems.find(item => item.id === action.payload.id);
            if (itemInCart) {
                // Item exists, increase quantity
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                // Item doesn't exist, add to cart with quantity 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }
        }
        case 'REMOVE_FROM_CART':{
            const itemToRemove = state.cartItems.find(item => item.id === action.payload);
            if (itemToRemove && itemToRemove.quantity > 1) {
                // Reduce quantity if more than 1
                return {
                    ...state,
                    cartItems: state.cartItems.map(item =>
                        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                    ),
                };
            } else {
                // Remove item from cart if quantity is 1
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.id !== action.payload),
                };
            }
        }
        case 'DELETE_FROM_CART':
            // Completely remove the item from cart, regardless of quantity
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;