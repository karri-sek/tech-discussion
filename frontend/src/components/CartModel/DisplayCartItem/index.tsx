import React from 'react';
import { useSelector } from 'react-redux';
import { AiFillDelete } from "react-icons/ai";
import { IProductDomain } from '../../../store/modules/product/model';
import { cartSelector } from '../../../store/modules/product/selectors';
import { DisplayCartItemStyles } from './DisplayCartItemStyles';

const DisplayCartItem = () => {
    const cartItems: IProductDomain[] = useSelector(cartSelector);
    return <>{cartItems.map((prod: IProductDomain) => (
        <DisplayCartItemStyles>
            <span className="cartitem" key={prod.id}>
                <img
                    src={prod.image}
                    className="cartItemImg"
                    alt={prod.name}
                />
                <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>{prod.quantity}</span>
                </div>
                <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                />
            </span>
        </DisplayCartItemStyles>
    ))}</>
}

export default DisplayCartItem;