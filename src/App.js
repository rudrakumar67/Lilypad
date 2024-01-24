import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { setAuthToken, setUserDetails } from './Redux/actionTypes/authAction';
import { getUserCartList, userLogin } from './api/user';
import { updateCartItem } from './Redux/actionTypes';
import { useDispatch } from 'react-redux';

const App = () => { 
  const dispatch = useDispatch();
  const checkTokenExpiration = async () => {
    const otplessUserToken = JSON.parse(localStorage.getItem("otpless_user_token"));

    if (otplessUserToken) {
      const userData = await userLogin(otplessUserToken);
      const { auth_token, ...userInfo } = userData.data.data;

      // Save token and user info in localStorage
      localStorage.setItem("auth_token", auth_token);
      localStorage.setItem("user_details", JSON.stringify(userInfo));
      dispatch(setAuthToken(auth_token));
      dispatch(setUserDetails(userInfo));
      getUserCartList().then((response) => {
        dispatch(updateCartItem(response));
      });
    } else {
      // Handle the case when there is no token available or token is expired
      // For example, perform logout or clear token/user details from Redux and localStorage
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user_details");
      dispatch(setAuthToken(null));
      dispatch(setUserDetails(null));
    }
  };

  useEffect(() => {
    checkTokenExpiration();

    // Set up interval to periodically check token expiration and refresh if needed
    const tokenRefreshInterval = setInterval(() => {
      checkTokenExpiration();
    }, 60 * 60 * 1000); // Check every hour

    return () => clearInterval(tokenRefreshInterval); // Clear interval on unmount
  }, []);
  return (
   <RouterProvider router={router}/>
  )
}

export default App