import React from 'react';
import Name from '../Name/Name';
import './Cart.css';

const Cart = (props) => {
    // destructuring cart as object
    const { cart } = props
    // show total income in ui
    let total = 0;
    for (const company of cart) {
        total = total + company.income
    }
    return (
        <div className="cart">
            <h2>Company Added: {cart.length}</h2>
            <h2>Total Income: {total}</h2>
            {
                cart.map(name => <Name
                    key={name.established}
                    name={name}
                ></Name>)
            }
        </div>
    );
};

export default Cart;