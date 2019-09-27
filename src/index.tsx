import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './App/LandingPage/LandingPage';
import SignUp from './App/signUpPage/SignUp';
import Login from './App/LoginPage/Login';
import ForgotPassword from './App/ForgotPasswordPage/ForgotPassword';
import LoggenIn from './App/LoggedInPage/LoggenIn';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import loggedInReducer from './App/LoggedInPage/LoggedInReducer';


import App from './App/App';


ReactDOM.render(<App /> ,
    document.getElementById('root'));

serviceWorker.unregister();




































