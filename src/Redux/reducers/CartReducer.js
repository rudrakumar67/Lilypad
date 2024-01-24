// cartReducer.js
const initialState = {
  cartCount: 0,
  cartItems: [], // If you're managing the cart items in the store
  // Other relevant state properties
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "FETCH_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    // Add cases for other actions if needed
    default:
      return state;
  }
};

export default cartReducer;
