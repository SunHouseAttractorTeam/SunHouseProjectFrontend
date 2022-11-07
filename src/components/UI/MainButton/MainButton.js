import React from 'react';
import './MainButton.scss';

const MainButton = ({text, onClick, className}) => {
    return (
        <button className={`MainButton ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default MainButton;