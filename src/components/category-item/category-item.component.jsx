import React from 'react';
import {BackgroundImage, CategoryBody, CategoryContainer} from "./category-item.styles";

const CategoryItem = ({category}) => {
    const {imageUrl, title } = category
    return (
        <CategoryContainer>
            <BackgroundImage imageUrl={imageUrl}  />
            <CategoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBody>
        </CategoryContainer>
    );
};

export default CategoryItem;