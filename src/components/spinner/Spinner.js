import React from 'react';
import './Spinner.css';

const Spinner = ({ active }) => {
    if(!active) {
        return null;
    }

    return (
        <div className="spinner-overlay">
            <div class="spinner slabs" id="slabs">
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
                <div class="slab"></div>
            </div>
        </div>
    )
}

export default Spinner;