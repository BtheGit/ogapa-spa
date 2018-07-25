import React from 'react';
import { connect } from 'react-redux';
import ResultTile from './ResultTile';
import Pager from './Pager';
import { navigateToSearchPage } from '../../services/api/actions';

export class Results extends React.Component {
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
            results = [], 
            total,
            pageSize,
            startFrom,
        } = this.props;
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
                {
                    results.length &&
                        <div className="results__tiles">
                        { 
                            results.map((result) => <ResultTile key={ result.uri } title={ result.uri } id={ result.uri } />) 
                        }
                        </div>
                }
            </div>
        )
    }
}


const mapStateToProps = ({ search }) => ({
    total: search.total,
    pageSize: search['page-length'],
    startFrom: search.start,
    results: search.results,
    searchText: search.qtext,
})

const mapDispatchToProps = {
    navigateToSearchPage,
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);