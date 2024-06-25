import React from 'react';
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles"
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <Title to={title}><span>{title.toUpperCase()}</span></Title>
            <Preview>
            {
                products
                    .filter((_, index) => index < 4)
                    .map(product => (
                    <ProductCard product={product} key={product.id}/>
                ))
            }
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;