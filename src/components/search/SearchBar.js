import React from 'react';

export const SearchBar = ({
    onChange,
    placeholder,
    value,
}) => (
    <input type="text" value={ value } onChange={ onChange } aria-label="Input search text here" placeholder={ placeholder } />
)

export default SearchBar;