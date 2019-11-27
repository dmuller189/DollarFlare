
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SignUp from './signUpPage/SignUp';
import Login from './LoginPage/Login';
import ForgotPassword from './ForgotPasswordPage/ForgotPassword';
import LoggedIn from './LoggedInPage/LoggedIn';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import loggedInReducer from './LoggedInPage/LoggedInReducer';
import forexBuilderReducer from './LoggedInPage/LoggedInContainer/LoggedInContainers/viewBuilders/ForexBuilder/forexGraphStructureAndLogic/ForexReducer';

let rootReducer = combineReducers({
  forexBuilderState: forexBuilderReducer,
  loggedInState: loggedInReducer
})

export type RootState = ReturnType<typeof rootReducer>;

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
          <Route path="/:loggedIn([A-Za-z]+)" component={LoggedIn}></Route>
        </Switch>  
      </Router>
    </Provider>
    )
};
//https://stackoverflow.com/questions/48723370/react-router-4-regex-paths-match-doesnt-find-parameters
//look into react redirect for user fucking with url

export default App;