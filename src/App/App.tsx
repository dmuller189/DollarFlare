
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SignUp from './signUpPage/SignUp';
import Login from './LoginPage/Login';
import ForgotPassword from './ForgotPasswordPage/ForgotPassword';
import LoggedIn from './LoggedInPage/LoggedIn';
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
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgotPassword" component={ForgotPassword}></Route>
          <Route path="/loggedIn/home" component={LoggedIn}></Route>
          <Route path="/loggedIn/profile" component={LoggedIn}></Route>
          <Route path="/loggedIn/community" component={LoggedIn}></Route>
        </Switch>  
      </Router>
    </Provider>
    )
};

export default App;