import productApiService from "./productApiService";

// GET All product
export const getAllProduct = async () => {
  const products = await productApiService.get("product-bulk");
  // products.data = products?.data?.data?.filter(product => product.isPublished);
  return products?.data;
};
// GET product by id
export const getProduct = async (productId) => {
  return await productApiService.get(`product/${productId}`);
};
export const createReview = async (userReview) => {
  try {
    const review = await productApiService.post("review", userReview);
    return review;
  } catch (error) {
    // Handle the error here, log it, and return an empty array
    console.error("Error writing review:", error);
    return {}; // Return an empty array in case of failure
  }
};
