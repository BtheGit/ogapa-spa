import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import "./ResultsTable.css";

class ResultsTable extends React.Component {
    static propTypes = {
        results: PropTypes.array.isRequired,
    }

    columns = [
        {
            Header: "Award ID",
            accessor: "award_id_piid",
            Cell: value => <Link to={`/record/${ value }`}> { value }</Link>
        },
        {
            Header: "Recipient Name",
            accessor: "recipient_name",
        },
        {
            Header: "Awarding Agency",
            accessor: "awarding_agency_name",
        },
        {
            Header: "Awarding Sub Agency",
            accessor: "awarding_sub_agency_name",
        },
        {
            Header: "Action Date",
            accessor: "action_date",
        },
        {
            Header: "Transaction Amount",
            accessor: "federal_action_obligation",
            Cell: value => `$${parseFloat(value).toLocaleString()}`
        },
        {
            Header: "Award Type",
            accessor: "award_type",
        },
    ];

    render(){
        return(
            <div className="results__table-container">
                <table className="results__table">
                    <thead className="table__head">
                        <tr className="table__row table__row--head">
                            {
                                this.columns.map(column => (
                                    <th className="table__cell table__cell--head">
                                        <p>{ column.Header }</p>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        {
                            this.props.results.map(result => (
                                <tr className="table__row table__row--body">
                                    {
                                        this.columns.map(column => (
                                            <td className="table__cell table__cell--body">
                                                {
                                                    column.Cell 
                                                        ? column.Cell(result[column.accessor])
                                                        : result[column.accessor]
                                                }
                                            </td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsTable;