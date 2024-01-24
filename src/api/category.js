import productApiService from "./productApiService";

// GET request
export const getAllCategory = async () => {
    return productApiService.get('category');
};