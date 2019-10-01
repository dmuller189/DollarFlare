import React from 'react';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer/footer';
import NavBar from '../utilityComponents/navBar/NavBar';
import SideBar from '../utilityComponents/sideBar/SideBar';
import LoggedInContainer from './LoggedInContainer/LoggedInContainer';
import './LoggedIn.css';

//home page after login/coninuing as guest
class LoggenIn extends React.Component {


  render() {
    return (
      <div id="home-root">

        <div className="container" id="main-bar" >
          <NavBar where="Home" />
        </div>

        <div className="container-fluid" id="main-bar" >
          <div className="row" id="page-row">
            <div className="col-fluid" id="side-bar">
              <SideBar />
            </div>
            <div className="col" id="page-content">
              <LoggedInContainer />
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

