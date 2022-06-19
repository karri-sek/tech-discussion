import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppStyles } from './AppStyles';
import Products from '../../containers/Products';
import CreateProducts from '../../containers/CreateProducts';
import Header from '../Header';

function App() {
    return (
        <BrowserRouter>
            <AppStyles className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/create" element={<CreateProducts />}>
                    </Route>
                </Routes>
            </AppStyles>
        </BrowserRouter>
    );
}

export default App;
