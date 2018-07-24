import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { updateFormField } from '../../services/form/actions';
import { submitSearch } from '../../services/api/actions';

export class Search extends React.Component {
    searchbarOnChange = e => {
        e.preventDefault();
        this.props.updateFormField('searchbar', e.target.value)
    }

    searchbarOnSubmit = e => {
        e.preventDefault();
        this.props.submitSearch({
            q: this.props.value,
        })
    }

    render(){
        return (
            <div className="search__container">
                <h1>HHS - OGAPA Grants Search Tool</h1>
                <SearchForm
                    onChange={ this.searchbarOnChange }
                    onSubmit={ this.searchbarOnSubmit }
                    value={ this.props.value }
                    placeholder="Search for grants here..."
                />
            </div>
        );
    }
} 

const mapStateToProps = ({ form }) => ({
    value: form.searchbar,
});

const mapDispatchToProps = {
    updateFormField,
    submitSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);