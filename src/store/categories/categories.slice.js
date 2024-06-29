import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
}


export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        try {
            return await getCategoriesAndDocuments("categories");
        } catch (e) {
            console.error(e);
        }
    }
)
const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchCategories.pending, (state, action) => {
               state.isLoading = true;
            }
        )
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        })
    }
})

export const {reducer: categoriesReducer, } = categoriesSlice