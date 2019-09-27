import React from 'react';
import {BrowserRouter as Router ,Route, Switch } from "react-router-dom";
import Profile from '../../LoggedInContainers/profilePage/Profile';
import HomePage from '../../LoggedInContainers/HomePage/HomePage';
import CommunityPage from '../../LoggedInContainers/CommunityPage/CommunityPage';


export default class LoggedInContainer extends React.Component {

    render() {
        return (
            <div>
                    <Route path="/loggedIn/home" component={HomePage}></Route>
                    <Route path="/loggedIn/profile" component={Profile}></Route>
                    <Route path="/loggedIn/community" component={CommunityPage}></Route>
            </div>
        )
    }
}

