import React from 'react';
import { Route, Switch } from "react-router-dom";
import Profile from '../../LoggedInContainers/profilePage/Profile';
import HomePage from '../../LoggedInContainers/HomePage/HomePage';



export default class LoggedInContainer extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/loggedIn/home" component={HomePage}></Route>
                    <Route exact path="/loggedIn/profile" component={Profile}></Route>
                </Switch>
            </div>
        )
    }
}

