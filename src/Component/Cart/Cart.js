import React from 'react';
import Name from '../show added speaker name/Name';
import './Cart.css'

const Cart = (props) => {
    // distructure the obect 
    const {cartSpeaker} = props;
    // show total update on the ui 
    let total = 0;
    for(const speaker of cartSpeaker){
                total = total + speaker.Salary;
    }
    return (
        <div className="cart">
            <h2>Total Speaker Added:{props.cartSpeaker.length}</h2>
            <h2>Total Cost:{total}</h2>
            {
             cartSpeaker.map(speaker => <Name
             speaker={speaker}
             key={speaker.id}></Name>)
            }
        </div>
    );
};

export default Cart;