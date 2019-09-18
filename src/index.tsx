import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './App/LandingPage/LandingPage';
import SignUp from './App/signUp/SignUp';
import Login from './App/LoginPage/Login';
import ForgotPassword from './App/ForgotPasswordPage/ForgotPassword';
import Home from './App/homePage/home';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import LandingPageReducer from './App/LandingPage/LandingPageReducer';

let rootReducer = combineReducers({
  landingState: LandingPageReducer
})

const store = createStore(rootReducer, applyMiddleware(createLogger()));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgotPassword" component={ForgotPassword}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>  
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




































