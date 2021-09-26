import React from 'react';
// import fontawesome solid and free icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './Company.css';

const Company = (props) => {
    // destructuring object properties
    const { company, country, established, img, income, types } = props.company
    // declare fontawesome icon
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="company">
            {/* single company details here */}
            <img src={img} alt="" />
            <p><strong>Name:</strong> {company}</p>
            <p><strong>Established:</strong> {established}</p>
            <p><strong>Types:</strong> {types}</p>
            <p><strong>Income:</strong> {income}</p>
            <p><strong>Country:</strong> {country}</p>
            {/* button handler send as props*/}
            <button onClick={() => props.addToCart(props.company)} className="common-btn">{cartIcon} Add to cart</button>
            {/* call fontawesome icons */}
            <div className="social-icons">
                <FontAwesomeIcon className="facebook" icon={faFacebook} />
                <FontAwesomeIcon className="twitter" icon={faTwitter} />
                <FontAwesomeIcon className="youtube" icon={faYoutube} />
            </div>
        </div>
    );
};

export default Company;