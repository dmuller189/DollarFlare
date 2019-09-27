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

let rootReducer = combineReducers({
  loggedInState: loggedInReducer
})

const store = createStore(rootReducer, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route  path="/sign-up" component={SignUp}></Route>
          <Route  path="/login" component={Login}></Route>
          <Route  path="/forgotPassword" component={ForgotPassword}></Route>
          <Route  path="/loggedIn/home" component={LoggenIn}></Route>
        </Switch>  
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();




































