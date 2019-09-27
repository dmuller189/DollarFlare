import React from 'react';
import Profile from '../../LoggedInContainers/profilePage/Profile';
import { Route } from "react-router-dom";



export default class LoggedInContainer extends React.Component {


    render() {
        return (
            <div>
                logged in container
                <Route exact path="/loggedIn/profile" component={Profile}></Route>
            </div>
        )
    }
}