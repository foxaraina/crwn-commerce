import React from 'react';
import CategoryItem from "../category-item/category-item.component";
import {CategoriesContainer} from "./catalog.styles";

const Catalog = ({categories}) => {

    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </CategoriesContainer>
    );
};

export default Catalog;