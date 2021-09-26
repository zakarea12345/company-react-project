import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-div">
            <h1>Welcome To Our Life Changing Seminar.</h1>
            <h2>World's best motivational speaker will give speach to motivate you.</h2>
            <h1>Total Budget: <span className="budget">100</span> Million</h1>
        </div>
    );
};

export default Header;