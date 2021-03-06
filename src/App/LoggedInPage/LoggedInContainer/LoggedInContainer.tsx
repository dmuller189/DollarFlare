import React from 'react';
import { Route } from "react-router-dom";
import { connect, ConnectedProps } from 'react-redux';
import Profile from './LoggedInContainers/profilePage/Profile';
import HomePage from './LoggedInContainers/HomePage/HomePage';
import ForexBuilder from './LoggedInContainers/viewBuilders/ForexBuilder/ForexBuilder';
import './LoggedInContainer.css';

class LoggedInContainer extends React.Component {

    render() {
        return (
            <div className="container-fluid" id="LC">
                    <Route path="/loggedIn/home" component={HomePage}></Route>
                    <Route path="/loggedIn/profile" component={Profile}></Route>
                    <Route path="/loggedIn/createForex" component={ForexBuilder}></Route>
                    
            </div>
        )
    }
}


export default connect()(LoggedInContainer);