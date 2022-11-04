import React from 'react';
import './MainButton.scss';

const MainButton = ({text, onClick, className}) => {
    return (
        <button className={`CourseButton ${className}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default MainButton;