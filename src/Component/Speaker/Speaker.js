import React from 'react';
import './Speaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 


const Speaker = (props) => {
    const{Name, Age, Occupation, Salary, img, Country } = props.speaker;
    return (
        <div className="speaker">
            <div>
            <img className="speaker-image" src={img} alt="" />
            <h3>Name: {Name}</h3>
            <p> <strong>Age :</strong> {Age}</p>
            <p> <strong>Country:</strong> {Country}</p>
            <p> <strong>Occupation:</strong> {Occupation}</p>
            <p> <strong>Salary:</strong> {Salary}</p>
            <button 
            onClick={()=>props.handleAddToSpeakerAndCost(props.speaker)}
            className="hire-speaker-btn">
                <FontAwesomeIcon icon={faShoppingCart} />Hire Speaker</button>
                <br />
                <FontAwesomeIcon 
                className="social-icon"  
                icon={faFacebookF} />
                <FontAwesomeIcon
                 className="social-icon" 
                 icon={faTwitter} />
                <FontAwesomeIcon 
                className="social-icon" 
                icon={faInstagram} />
                
            </div>
        </div>
    );
};

export default Speaker;