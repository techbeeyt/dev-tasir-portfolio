import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'


const Button = ({btnStyle, path, text}) => {
    return (
        <Link to={path}>
            <button className={btnStyle}>
                {text}
            </button>
        </Link>
    );
};

export default Button;