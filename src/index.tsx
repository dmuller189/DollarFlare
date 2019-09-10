import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import SignUp from './signUp/SignUp';
import Login from './Login/Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";


ReactDOM.render((
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>  
    </BrowserRouter>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




































