import React from 'react';
import './Login.css';

export default class Login extends React.Component {
    constructor(props: any) {
        super (props);

        this.state = {
            identifier: "username or email",
            password: "Password"
        }
    }

    render() {
        return (
            <div className="vertical-center"> 
            <div className="container">
                <h1>Login here</h1> 
            </div>
        </div>
        )
    }
}