import React from 'react';
import Profile from '../../profilePage/Profile';
import { Route } from "react-router-dom";



export default class LoggedInContainer extends React.Component {


    render() {
        return (
            <div>
                home container
                <Route exact path="/home/profile" component={Profile}></Route>
            </div>
        )
    }
}