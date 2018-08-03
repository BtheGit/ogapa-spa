import React from 'react';
import './Spinner.css';

const Spinner = ({ active }) => {
    if(!active) {
        return null;
    }

    return (
        <div className="spinner-overlay">
            <div className="spinner-container"/>
        </div>
    )
}

export default Spinner;