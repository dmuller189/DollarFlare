import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import './signUp.css';


export default class SignUp extends React.Component {

    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="vertical-center"> 
                <div className="container">
                    <h1>sign up here</h1> 
                </div>
            </div>
        )
    }
}



