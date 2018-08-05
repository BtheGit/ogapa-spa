import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveRecord } from '../../services/api/actions';
import Spinner from '../../components/spinner/Spinner';
import './RecordPage.css';
export class RecordPage extends React.Component {
    static propTypes = {
        record: PropTypes.object,
        isFetching: PropTypes.bool.isRequired,
        retrieveRecord: PropTypes.func.isRequired,
    }

    componentDidMount(){
        const recordID = this.props.match.params.id;
        this.props.retrieveRecord(recordID);
    }

    render(){
        return(
            <div className="record__container">
                {
                    (this.props.record && this.props.record["award_id_piid"]) && !this.props.isFetching
                        ?
                        <React.Fragment>
                            <header className="record__header">
                                <h1>Contract Summary</h1>
                                <p>{ this.props.record['award_id_piid']}</p>
                            </header>
                            <main className="record__main page-container">
                                <div className="record__award">
                                    <h2>Award <span>({ this.props.record['award_id_piid']})</span></h2>
                                    <p>Award Description: { this.props.record['award_description'] }</p>
                                    <p>Current Award Amount: ${ this.props.record['current_total_value_of_award'] }</p>
                                    <p>Potential Award Amount: ${ this.props.record['potential_total_value_of_award'] }</p>
                                </div>
                                <div className="record__agency">
                                    <h2>Awarding Agency</h2>
                                    <p>{ this.props.record['awarding_agency_name'] }</p>
                                    <p>Awarding Sub Agency: { this.props.record['awarding_sub_agency_name'] }</p>
                                    <h2>Funding Agency</h2>
                                    <p>{ this.props.record['funding_agency_name'] }</p>
                                    <p>Funding Sub Agency: { this.props.record['funding_sub_agency_name'] }</p>
                                </div>
                                <div className="record__recipient">
                                    <h2>Recipient</h2>
                                    <p>{ this.props.record['recipient_name'] }</p>
                                    <p>Duns: { this.props.record['recipient_duns'] }</p>
                                    <p>Parent Duns: { this.props.record['recipient_parent_duns'] }</p>
                                </div>
                            </main>
                        </React.Fragment>
                        :
                            null
                }{
                    this.props.isFetching
                        ?
                            <Spinner active={ this.props.isFetching }/>
                        :
                            null
                }
            </div>
        )
    }
};

const mapStateToProps = ({ record, api }) => ({
    record,
    isFetching: api.isFetching,
})

const mapDispatchToProps = {
    retrieveRecord,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordPage);