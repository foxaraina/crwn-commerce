import React from 'react';
import {BackgroundImage, CategoryBody, CategoryContainer} from "./category-item.styles";
import {useNavigate} from "react-router-dom";

const CategoryItem = ({category}) => {
    const {imageUrl, title, route } = category
    const navigate = useNavigate();
    return (
        <CategoryContainer onClick={() => navigate(route)}>
            <BackgroundImage imageUrl={imageUrl}  />
            <CategoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBody>
        </CategoryContainer>
    );
};

export default CategoryItem;