import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResultsTable from './ResultsTable';
import Pager from './Pager';
import { navigateToSearchPage } from '../../services/api/actions';

export class Results extends React.Component {
    static propTypes = {
        metadata: PropTypes.object.isRequired,
        results: PropTypes.array.isRequired,
    }

    static defaultProps = {
        metadata: {},
        results: [],
    }

    onClick = (from, isCurrent) => e => {
        e.preventDefault();
        if(!isCurrent){
            this.props.navigateToSearchPage({
                q: this.props.searchText,
                from,
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
                    results.length && 
                        <Pager
                            total={ total }
                            pageSize={ pageSize }
                            startFrom={ startFrom }
                            resultsSize={ results.length }
                            onClick={ this.onClick }
                        />
                }
                <ResultsTable results={ results }/>
            </div>
        )
    }
}


const mapStateToProps = ({ search }) => ({
    metadata: search.metadata,
    results: search.results,
    searchText: search.metadata && search.metadata.qtext,
})

const mapDispatchToProps = {
    navigateToSearchPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);