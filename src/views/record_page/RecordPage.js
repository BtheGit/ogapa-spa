import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const retrieveRecord = () => ({})

export class RecordPage extends React.Component {
    static propTypes = {

    }

    componentDidMount(){
        const recordID = this.props.match.params.id;
        // this.props.retrieveRecord(recordID);
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div>
                Record
            </div>
        )
    }
};

const mapDispatchToProps = {
    retrieveRecord,
}

export default connect(null, mapDispatchToProps)(RecordPage);