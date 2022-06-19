import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ProductStyles } from './ProductStyles';
import { addToCartRequestAction, addProductsRequestAction } from '../../store/modules/product/actions';
import { Button } from "react-bootstrap";
import { IProductDomain } from '../../store/modules/product/model';
import Product from '../../components/Product';
import {getProducts} from '../../services/index';

export const Products: React.FC = () => {
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    useEffect( () => {
        (async()=>{
            const data = await getProducts();
            dispatch(addProductsRequestAction(data));
            setList(data);
        })();
    }, [dispatch])
    const handleAddToCartRequestClick = useCallback((product) => {
        dispatch(addToCartRequestAction(product));
    }, [dispatch]);
    return (
        <ProductStyles>
            {list.map((product: IProductDomain) => (
                <ul key={product.id}>
                    <Product {...product} />
                    <Button className='button' onClick={(e) => handleAddToCartRequestClick(product)}>addToCart</Button>
                </ul>
            ))}
        </ProductStyles>
    )
}

export default Products;
