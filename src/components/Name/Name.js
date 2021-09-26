import React from 'react';
import './Name.css';

const Name = (props) => {
    return (
        <div>
            <h4>{props.name.company}</h4>
        </div>
    );
};

export default Name;