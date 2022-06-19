import React, { useState } from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { cartSelector } from '../../store/modules/product/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModel from '../CartModel';
import { HeaderStyles } from './HeaderStyles';


function Header() {
    const cartItems = useSelector(cartSelector);
    const [showCartModal, setShowCartModal] = useState(false);
    const handleShow = () => {
        if (cartItems.length > 0) {
            setShowCartModal(true);
        }
    }
    return (
        <Navbar bg='primary' variant='dark' style={{ height: 80 }}>
            <Container>
                <HeaderStyles>
                    <Nav className='me-auto nav'>
                        <Link to="/" className='me-auto nav'>
                            Home   
                        </Link>
                        <Link to="/create">
                            product
                        </Link>
                    </Nav>
                </HeaderStyles>
                <Button variant="primary" onClick={handleShow}>
                    cart ({cartItems.length})
                </Button>
                {showCartModal && <CartModel setShowCartModal={setShowCartModal} />}
            </Container>
        </Navbar>

    );
}

export default Header;
