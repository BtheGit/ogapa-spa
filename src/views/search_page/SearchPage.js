import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search/Search';
import Results from '../../components/results/Results';

export class SearchPage extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }

    componentDidMount(){

    }

    componentDidUpdate(){

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

export default SearchPage;