// authActions.js - Redux action creators for authentication
export const setAuthToken = (token) => ({
    type: 'SET_AUTH_TOKEN',
    payload: token,
});

export const setUserDetails = (user) => ({
    type: 'SET_USER_DETAILS',
    payload: user,
});
// other action creators related to authentication
