import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Search from '../../components/search/Search';
import Results from '../../components/results/Results';
import {
    submitSearch,
} from '../../services/api/actions';

export class SearchPage extends React.Component {
    static propTypes = {
        submitSearch: PropTypes.func.isRequired,
    }

    newSearchByUrl = () => {
        const params = this.props.location.search;
        this.props.submitSearch(params);
    }

    componentDidMount(){
        this.newSearchByUrl();
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.location.search && prevProps.location.search !== this.props.location.search){
            this.newSearchByUrl();
        }
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                <Search />
                <Results />
            </div>
        )
    }
};

const mapDispatchToProps = {
    submitSearch,
}

export default connect(null, mapDispatchToProps)(SearchPage);