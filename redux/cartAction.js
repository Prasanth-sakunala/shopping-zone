// Action Types
export const ActionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
};


// Add item to cart
export const addToCart = (productItem) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: productItem,
});

// Remove item from cart (decrement quantity or remove if quantity is 1)
export const removeFromCart = (productId) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
});

// Delete item from cart (regardless of quantity)
export const deleteFromCart = (productId) => ({
    type: ActionTypes.DELETE_FROM_CART,
    payload: productId,
});