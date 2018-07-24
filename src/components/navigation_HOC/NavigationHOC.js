import React from 'react';

export class NavigationHandler extends React.Component{
    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location){
            window.scrollTo(0,0);
        }
    }

    render(){
        return this.props.children;
    }
};

export default NavigationHandler;