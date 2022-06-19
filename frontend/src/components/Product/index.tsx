import React from 'react';
import { Card } from "react-bootstrap";
import { IProductDomain } from '../../store/modules/product/model';

export const Product: React.FC<IProductDomain> = ({ name, image, cost, customerPrice }) => {
    return (
        <Card>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>cost: {cost}$</Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Product;
