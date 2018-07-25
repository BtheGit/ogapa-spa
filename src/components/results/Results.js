import React from 'react';
import ResultTile from './ResultTile';
import { connect } from 'react-redux';

export const Results = ({ results }) => (
    <div className="results__container">
        { 
            results.map((result) => <ResultTile key={ result.uri } title={ result.uri } id={ result.uri } />) 
        }
    </div>
)

const mapStateToProps = ({ search }) => ({
    results: (search.searchResults && search.searchResults.results) || [],
})

export default connect(mapStateToProps)(Results);