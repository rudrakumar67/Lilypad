import axios from 'axios';
import store from '../store'; // Import your Redux store

const orderApiService = axios.create({
    // baseURL: 'http://localhost:5001/v1/api', // Your API base URL
    baseURL: 'https://r36j3yytzi.execute-api.ap-south-1.amazonaws.com/prod/v1/api',
});

// Request interceptor to include auth token in specific requests
orderApiService.interceptors.request.use(
    (config) => {
        // const authToken = store.getState().auth.authToken;
        let authToken = localStorage.getItem('auth_token');

        if (authToken) {
            // Check if the request URL requires authorization (e.g., cart-related endpoints)
            if (config.url.includes('/cart/') || config.url.includes('/address') || config.url.includes('order')) {
                config.headers['Authorization'] = `Bearer ${authToken}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default orderApiService;
