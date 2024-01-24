import axios from 'axios';
import store from '../store'; // Import your Redux store

const authApiService = axios.create({
    // baseURL: 'http://localhost:5002/v1/api', // Your API base URL
    baseURL: 'https://ezqcggznth.execute-api.ap-south-1.amazonaws.com/prod/v1/api', 
});

// Request interceptor to include auth token in specific requests
authApiService.interceptors.request.use(
    (config) => {
        // const authToken = store.getState().auth.authToken;
        let authToken = localStorage.getItem('auth_token');

        if (authToken) {
            // Check if the request URL requires authorization (e.g., cart-related endpoints)
            if (config.url.includes('/cart/') || config.url.includes('/auth')) {
                config.headers['Authorization'] = `Bearer ${authToken}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default authApiService;
