import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Company from '../Company/Company';
import './Main.css';

const Main = () => {
    // state declare
    const [companies, setCompanies] = useState([])
    const [cart, setCart] = useState([])

    // data load using use effect
    useEffect(() => {
        fetch('./companies.JSON')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])

    // handle button using function
    const addToCart = (company) => {
        let newCart = [...cart, company]
        setCart(newCart)
    }
    return (
        <div className="main-container">
            {/* companies details here */}
            <div className="companies-container">
                {
                    companies.map(company => <Company
                        key={company.id}
                        company={company}
                        addToCart={addToCart}
                    ></Company>)
                }
            </div>
            {/* cart details in right side */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;