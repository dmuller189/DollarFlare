import React from 'react';
import Profile from '../../LoggedInContainers/profilePage/Profile';
import { BrowserRouter, Route, Switch } from "react-router-dom";




export default class LoggedInContainer extends React.Component {


    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/loggedIn/profile" component={Profile}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}