import orderApiService from "./orderApiService";
import authApiService from "./authApiService";

// GET All product
export const userLogin = async (tokenObj) => {
  return authApiService.post(`/auth/otpless-user-login`, tokenObj);
};
export const updateUserDetails= async (userDetails) => {
  return authApiService.put(`/auth`, userDetails);
};
export const getUserCartList = async () => {
  try {
    const response = await orderApiService.get('/cart/item');
    return response.data.data; // Assuming the data is returned in the response property named 'data'
  } catch (error) {
    // Handle the error here
    console.error('Error fetching user cart list:', error);
    // You can choose to throw the error further or return a default value
    // throw error; // Throw the error to handle it elsewhere or use a default return value
    return []; // Return an empty array or any default value
  }
};
export const getUserAddress = async () => {
  try {
    const response = await orderApiService.get('/address');
    return response.data.data; // Assuming the data is returned in the response property named 'data'
  } catch (error) {
    // Handle the error here
    console.error('Error fetching user address list:', error);
    // You can choose to throw the error further or return a default value
    // throw error; // Throw the error to handle it elsewhere or use a default return value
    return []; // Return an empty array or any default value
  }
};
export const addAddress = async (addressObj) => {
  try {
    const response = await orderApiService.post('/address', addressObj);
    return response.data.data; // Assuming the data is returned in the response property named 'data'
  } catch (error) {
    // Handle the error here
    console.error('Error saving user address:', error);
    // You can choose to throw the error further or return a default value
    // throw error; // Throw the error to handle it elsewhere or use a default return value
    return []; // Return an empty array or any default value
  }
};
export const addProductToCart = async (productData) => {
  return orderApiService.post('/cart/item', productData);
};
export const deleteProductFromCart = async (productId) => {
  try {
    const response = await orderApiService.delete(`/cart/item/${productId.id}`);
    return response.data;
  } catch (error) {
    console.error('Delete Error:', error);
    throw error;
  }
};
export const deleteAllProductFromCart = async () => {
  try {
    const response = await orderApiService.delete(`/cart/item`);
    return response.data;
  } catch (error) {
    console.error('Delete Error:', error);
    throw error;
  }
};
export const updateProductFromCart = async (payload) => {
  try {
    const response = await orderApiService.put(`/cart/item`, payload);
    return response.data;
  } catch (error) {
    console.error('update Error:', error);
    throw error;
  }
};