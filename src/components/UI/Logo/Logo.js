import React from 'react';
import './Logo.scss';

const Logo = ({className}) => {
    return (
        <a href={'#'} className={`logo ${className}`}>EDUSPACE</a>
    );
};

export default Logo;