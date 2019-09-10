import React from 'react';
import './ForgotPassword.css';

export default class ForgotPassword extends React.Component {
    constructor (props: any) {
        super (props);

        //this.state = {}
    }

    render () {
        return (
            <div className="vertical-center"> 
            <div className="container">
                <h1>Forgot Password here</h1> 
            </div>
        </div>
        )
    }
}