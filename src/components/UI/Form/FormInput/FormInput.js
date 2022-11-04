import React from 'react';
import './FormInput.scss';

const FormInput = ({type, name, value, onChange, placeholder, className, required}) => {
    return (
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
                required={required}
            />
    );
};

export default FormInput;