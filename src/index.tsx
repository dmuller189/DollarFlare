import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './App/LandingPage/LandingPage';
import SignUp from './App/signUp/SignUp';
import Login from './App/Login/Login';
import ForgotPassword from './App/ForgotPassword/ForgotPassword';


ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
      </Switch>  
    </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




































