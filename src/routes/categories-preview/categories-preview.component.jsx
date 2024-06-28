import React from 'react';
import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsLoading} from "../../store/categories/categories.selectors";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
    const  categoriesMap  = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsLoading)
    if (isLoading) {
        return <Spinner/>
    }
    return (
        <>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} products={products} title={title}/>
                )
            })}
        </>
    );
};

export default CategoriesPreview;