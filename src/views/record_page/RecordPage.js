import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveRecord } from '../../services/record/actions';
export class RecordPage extends React.Component {
    static propTypes = {

    }

    componentDidMount(){
        const recordID = this.props.match.params.id;
        this.props.retrieveRecord(recordID);
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                <h1>Record</h1>
                <h2>{ this.props.title }</h2>
            </div>
        )
    }
};

const mapStateToProps = ({ record }) => ({
    title: record.uri,
})

const mapDispatchToProps = {
    retrieveRecord,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecordPage);