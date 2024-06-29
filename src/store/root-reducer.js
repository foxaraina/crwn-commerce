import {combineReducers} from '@reduxjs/toolkit';
import {categoriesReducer} from "./categories/categories.slice";
import {cartReducer} from "./cart/cart.slice";
import {userReducer} from "./user/user.slice";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
})