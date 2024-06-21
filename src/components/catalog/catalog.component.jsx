import React from 'react';
import CategoryItem from "../category-item/category-item.component";
import "./catalog.styles.scss"

const Catalog = ({categories}) => {

    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/>
            ))}
        </div>
    );
};

export default Catalog;