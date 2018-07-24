import React from 'react';
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';

export const SearchForm = ({
    onSubmit,
    onChange,
    value,
    placeholder,
}) => (
    <form className="searchform__container" onSubmit={ onSubmit }>
        <SearchBar onChange={ onChange } placeholder={ placeholder } value={ value } />
        <SubmitButton />
    </form>
)

export default SearchForm;