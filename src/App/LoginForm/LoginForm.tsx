import React, { MouseEvent } from 'react';
import './LoginForm.css';
import { Link } from "react-router-dom";


interface IProps {
    forgotPassword: string;
    submitButton: string;
    submitMsg: string;
    submitT: string;
    submitColor: string;
    field1: string;
    field2: string;
    field3: string;
    field4: string;
    field5: string;
    field6: string;
    field7: string;
    field8: string;
    field9: string;
    field10: string;
    field2P: string;
}

export class LoginForm extends React.Component<IProps> {

    static defaultProps:IProps = {
        forgotPassword: "false",
        submitButton: "true",
        submitMsg: "...",
        submitT: "",
        submitColor: "primary",
        field1: "null",
        field2: "null",
        field3: "null",
        field4: "null",
        field5: "null",
        field6: "null",
        field7: "null",
        field8: "null",
        field9: "null",
        field10: "null",
        field2P: "fd"
    };

    constructor(props: IProps) {
        super(props);
        this.state = {
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
    }

    handleInput(event: any): void {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event: MouseEvent<HTMLButtonElement>): void {
        //handling the login process
        console.log(this.state);
        //handle server transmissions
        event.preventDefault();
    }

    forgotPassword(event: MouseEvent<HTMLButtonElement>): void {
        //trigger url change
    }

    render() {

        let forgotPassword;
        if (this.props.forgotPassword === "true") {
            forgotPassword = <button onClick={this.forgotPassword} type="submit" className="btn btn-outline-dark mb-2">
                <a href="#" id="FGL">
                    ForgotPassword
                </a>
            </button>
        }

        let loginButton  = <button onClick={this.handleSubmit} type="submit" className={"btn btn-" + this.props.submitT  + this.props.submitColor + " mb-2"}>
                {this.props.submitMsg}
            </button>


        let iFieldsProps: string[] = [];
        for (let i: number = 1; i < 11; ++i) {
            let prop: string = this.props["field" + i]
            if (this.props["field" + i] !== "null") {
                iFieldsProps[i - 1] = prop;
            }
        }

        return (
            <form className="form-inline" id="pageForm">
                {
                    iFieldsProps.map(e => {  
                        return (
                            <div className="form-group mx-sm-3 mb-2">
                                <label className="sr-only">username</label>
                                <input type={e} onChange={this.handleInput} className="form-control" id={e} placeholder={e} />
                            </div>
                        )
                    })
                }
                {loginButton}
                <Link to="/forgotPassword">
                {forgotPassword}
                </Link>

            </form>
        )
    }
}