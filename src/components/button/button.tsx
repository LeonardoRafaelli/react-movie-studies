import React from 'react'
import './Button.scss'

function Button({onClick, children} : any) {
    return (
        <button onClick={onClick} className="search-button">
            {children}
        </button>
    )
};

export default Button;