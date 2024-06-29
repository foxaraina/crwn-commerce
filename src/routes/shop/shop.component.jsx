import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useDispatch} from "react-redux";
import {fetchCategories} from "../../store/categories/categories.slice";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path={":category"} element={<Category/>}/>
        </Routes>
    );
};

export default Shop;