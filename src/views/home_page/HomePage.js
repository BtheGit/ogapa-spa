import React from 'react';
import Search from '../../components/search/Search';
import './HomePage.css';

export class HomePage extends React.Component {
    render(){
        return(
            <div className="home__container">
                <Search />
            </div>
        )
    }
};

export default HomePage;