import React from 'react';
import { Modal } from 'react-bootstrap';
import DisplayCartItem from './DisplayCartItem';

type Props = {
    setShowCartModal: (flag: boolean) => void;
}

const CartModel: React.FC<Props> = ({setShowCartModal}) => {
    const handleClose = () => setShowCartModal(false);
    return (
        <>
            <Modal show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>your purchase cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DisplayCartItem/>
                </Modal.Body>
            </Modal>
        </>
    );

}
export default CartModel;