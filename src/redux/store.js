import { configureStore } from "@reduxjs/toolkit";
import { default as FilterReducer } from '../redux/FilterSlice';
import {default as CartReducer} from "../redux/CartListSlice"

export const store = configureStore({
    reducer: {
        filter: FilterReducer,
        cart: CartReducer
    }
})