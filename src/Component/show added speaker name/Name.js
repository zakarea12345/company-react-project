import React from 'react';
import './Name.css'

const Name = (props) => {
    return (
        <div>
            <h2 className="speaker-name">Name:{props.speaker.Name}</h2>
            <button className="hire-btn">Hire Him</button>
        </div>
    );
};

export default Name;