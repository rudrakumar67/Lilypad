import axios from 'axios';

const productApiService = axios.create({
    // baseURL: 'http://localhost:5000/v1/api', // Your API base URL
    baseURL: 'https://rzf8hgnfma.execute-api.ap-south-1.amazonaws.com/prod/v1/api', // Your API base URL    
});

// Request interceptor to include auth token in specific requests
productApiService.interceptors.request.use(
    (config) => {
        let authToken = localStorage.getItem('auth_token');

        if (authToken) {
            // Check if the request URL requires authorization (e.g., cart-related endpoints)
            if (config.url.includes('cart') || config.url.includes('review')) {
                config.headers['Authorization'] = `Bearer ${authToken}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default productApiService;
