// authReducer.js - Redux reducer for authentication
const initialState = {
    authToken: null,
    userDetails: {},
    // other relevant authentication status
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            return {
                ...state,
                authToken: action.payload,
            };
        case 'SET_USER_DETAILS':
            return {
                ...state,
                userDetails: action.payload,
            };
        // other cases for authentication status handling
        default:
            return state;
    }
};

export default authReducer;
