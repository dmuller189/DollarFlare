
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SignUp from './signUpPage/SignUp';
import Login from './LoginPage/Login';
import ForgotPassword from './ForgotPasswordPage/ForgotPassword';
import LoggenIn from './LoggedInPage/LoggenIn';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import loggedInReducer from './LoggedInPage/LoggedInReducer';

let rootReducer = combineReducers({
  loggedInState: loggedInReducer
})

const store = createStore(rootReducer, applyMiddleware(createLogger()));

const App = () => {
    return (
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
    </Provider>
    )
}

export default App;