import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useDispatch} from "react-redux";
import {fetchCategories, setCategoriesStart} from "../../store/categories/categories.actions";
import {CATEGORIES_ACTION_TYPES} from "../../store/categories/categories.types";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCategoriesStart())
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path={":category"} element={<Category/>}/>
        </Routes>
    );
};

export default Shop;