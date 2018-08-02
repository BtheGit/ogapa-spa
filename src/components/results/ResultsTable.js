import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
            <table>
                <thead>
                    <tr>
                        {
                            this.columns.map(column => (
                                <th>
                                    <p>{ column.Header }</p>
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.results.map(result => (
                            <tr>
                                {
                                    this.columns.map(column => (
                                        <td>
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
        )
    }
}

export default ResultsTable;