import React from 'react';
import './Cart.css';
const Cart = ({ children }) => {
    return (
        <div className='cart'>
            {children}
        </div >
    );
};

export default Cart;