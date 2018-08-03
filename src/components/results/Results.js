import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResultsTable from './ResultsTable';
import Pager from './Pager';
import Spinner from '../spinner/Spinner';
import { navigateToSearchPage } from '../../services/api/actions';
import './Results.css';
export class Results extends React.Component {
    static propTypes = {
        metadata: PropTypes.object.isRequired,
        results: PropTypes.array.isRequired,
    }

    static defaultProps = {
        metadata: {},
        results: [],
    }

    onClick = (start, isCurrent) => e => {
        e.preventDefault();
        if(!isCurrent){
            this.props.navigateToSearchPage({
                q: this.props.searchText,
                start,
            })
        }
    }

    render(){
        const { 
            total,
            "page-length": pageSize,
            start: startFrom,
        } = this.props.metadata;
        const { results } = this.props;
        return (
            <div className="results__container">
                {
                    results.length 
                        ? 
                            <React.Fragment>
                                <Pager
                                    total={ total }
                                    pageSize={ pageSize }
                                    startFrom={ startFrom }
                                    resultsSize={ results.length }
                                    onClick={ this.onClick }
                                />
                                <ResultsTable results={ results }/>
                            </React.Fragment>
                        : 
                            null
                    }
                {
                    !results.length && !this.props.isFetching
                        ?
                            <div className="results__no-results">No Results Found</div>
                        :
                            null

                }
                <Spinner active={ this.props.isFetching }/>
            </div>
        )
    }
}


const mapStateToProps = ({ search, api }) => ({
    isFetching: api.isFetching,
    metadata: search.metadata,
    results: search.results,
    searchText: search.metadata && search.metadata.qtext,
})

const mapDispatchToProps = {
    navigateToSearchPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);