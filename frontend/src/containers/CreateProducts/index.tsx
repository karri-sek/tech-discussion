import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { validationSchema } from './validationSchema';
import { CreateProductStyles } from './CreateProductStyles';
import { submitProduct } from '../../services/index';
import { ICreateProduct } from '../../types';
import { productsSelector } from '../../store/modules/product/selectors';
import { IProductDomain } from '../../store/modules/product/model';


export const CreateProducts = () => {
    const products: IProductDomain[] = useSelector(productsSelector);
    const productNames = products.map((product: IProductDomain) => product.name.toLowerCase());
    const formik = useFormik({
        initialValues: {
            name: '',
            customerPrice:0.0,
            cost:0.0
        },
        validationSchema: validationSchema(productNames),
        onSubmit: (values: ICreateProduct) => {
            submitProduct(values);
        },
    });
    return (
        <CreateProductStyles>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control id="name" type="text" name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} placeholder="Enter product name" className={formik.touched.name && formik.errors.name ? "error" : undefined} />
                    {formik.errors.name && formik.touched.name && formik.errors.name}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Customer Price</Form.Label>
                    <Form.Control type="number" id='customerPrice' name='customerPrice' onChange={formik.handleChange} value={formik.values.customerPrice} onBlur={formik.handleBlur} placeholder="Enter Customer price" className={formik.touched.customerPrice && formik.errors.customerPrice ? "error" : undefined} />
                    {formik.errors.customerPrice && formik.touched.customerPrice && formik.errors.customerPrice}
                    <Form.Label>Cost</Form.Label>
                    <Form.Control type="number" id='cost' name='cost' onChange={formik.handleChange} value={formik.values.cost} onBlur={formik.handleBlur} placeholder="Enter cost" className={formik.touched.cost && formik.errors.cost ? "error" : undefined} />
                    {formik.errors.cost && formik.touched.cost && formik.errors.cost}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </CreateProductStyles>
    )
}

export default CreateProducts;