import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // This matches the default export from your CartSlice.jsx

const store = configureStore({
    reducer: {
        // This 'cart' key must match the state access in your components 
        // (e.g., state.cart.items)
        cart: cartReducer,
    },
});

export default store;
