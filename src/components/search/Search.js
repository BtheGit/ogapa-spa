import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { updateFormField } from '../../services/form/actions';
import { navigateToSearchPage } from '../../services/api/actions';
import './Search.css';

export class Search extends React.Component {
    searchbarOnChange = e => {
        e.preventDefault();
        this.props.updateFormField('searchbar', e.target.value)
    }

    searchbarOnSubmit = e => {
        e.preventDefault();
        this.props.navigateToSearchPage({
            q: this.props.value,
        })
    }

    render(){
        return (
            <div className="search__container">
                <h1>HHS - Award Search</h1>
                <SearchForm
                    onChange={ this.searchbarOnChange }
                    onSubmit={ this.searchbarOnSubmit }
                    value={ this.props.value }
                    placeholder="Search by keyword..."
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
    navigateToSearchPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);