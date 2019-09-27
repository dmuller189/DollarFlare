import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer/footer';
import NavBar from '../utilityComponents/navBar/NavBar';
import SideBar from '../utilityComponents/sideBar/SideBar';
import { Route } from 'react-router';
//home page after login/coninuing as guest
class Home extends React.Component {



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






        <div className="container-fluid no-padding" id="main-bar" >
          
          <div className="row">

            <div className="col" id="main-bar">
              <SideBar />
            </div>

            <div className="col" id="page-content">
              content
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

export default connect()(Home);

