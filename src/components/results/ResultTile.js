import React from 'react';
import { Link } from 'react-router-dom';

export const ResultTile = ({
    title,
    id,
}) => (
    <div className="results__tile">
        <p><Link to={`/record/${ id }`}> { title }</Link></p>
    </div>
)

export default ResultTile;