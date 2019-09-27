import React from 'react';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer/footer';
import NavBar from '../utilityComponents/navBar/NavBar';
import SideBar from '../utilityComponents/sideBar/SideBar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from '../profilePage/Profile';
import './LoggedIn.css';

//home page after login/coninuing as guest
class LoggenIn extends React.Component {



  render() {


    /**
     * render a side bar (tablue example),
     * then a router for the 'center' of the page
     * between various view
     */
    return (
      <div id="home-root">

        <div className="container" id="main-bar" >
          <NavBar where="Home" />
        </div>


        <div className="container-fluid" id="main-bar" >
          <div className="row">
            <div className="col-fluid" id="main-bar">
              <SideBar />
            </div>

            <div className="col" id="page-content">
              <Profile />
              <Route exact path="/home/profile" component={Profile}></Route>
            </div>

          </div>
        </div>



        <div id="page-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default connect()(LoggenIn);

