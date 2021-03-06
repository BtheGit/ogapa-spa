import React from 'react';

export class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    componentDidCatch(_error, _info){
        this.setState({hasError: true})
    }

    render() {
        return this.state.hasError ? <div>Error</div> : this.props.children;
    }
};

export default ErrorBoundary;