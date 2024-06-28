import {CATEGORIES_ACTION_TYPES} from "./categories.types";
import {CART_ACTIONS_TYPE} from "../cart/cart.types";

export const initialState = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: {
            return {...state, isLoading: true}
        }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: {
            return {...state, categories: payload, isLoading: false}
        }
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL: {
            return {...state, isLoading: false, error: payload}
        }
        default: {
            return state
        }
    }
}