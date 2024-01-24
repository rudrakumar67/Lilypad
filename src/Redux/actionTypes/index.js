import { CURRENT_PAGE, SET_ACTIVE_SECTION } from "./constant";

// cartActions.js
export const incrementCartCount = () => {
  return {
    type: 'INCREMENT_CART_COUNT',
  };
};

export const fetchCartItems = (cartItems) => {
  return {
    type: 'FETCH_CART_ITEMS',
    payload: cartItems,
  };
};

export const getCartItems = () => {
  return async (dispatch) => {
    try {
      // Make an API call to get cart items
      const response = [{item: 1}, {item: 2},{item: 3}];
      const cartItems = await response.json();
      dispatch(fetchCartItems(cartItems));
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
};
export const updateCartItem = (item) => {
  return {
    type: 'UPDATE_CART_ITEMS',
    payload: item,
  };
};
export const currentPage = (payload) => ({
  type: CURRENT_PAGE,
  payload,
});

export const setActiveSection = (section) => {
  return {
    type: SET_ACTIVE_SECTION,
    payload: section,
  };
};
