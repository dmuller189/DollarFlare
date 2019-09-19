import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer/footer';
import NavBar from '../utilityComponents/navBar/NavBar';

//home page after login/coninuing as guest
class Home extends React.Component {


  render() {

    return (
      <div id="home-root">

        <div className="container" id="main-bar" >
          <NavBar where="Home" />
        </div>

        <div id="page-content">
          content
          </div>

        <div id="page-footer">
          <Footer />
        </div>

      </div>
    )
  }
}

export default connect()(Home);

