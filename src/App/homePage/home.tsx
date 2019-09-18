import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer';
import github_logo from '../d3Visuals_and_icons/socialMedia/SMicons/github_logo.svg';
import { LoginForm } from '../utilityComponents/LoginForm/LoginForm';


//home page after login/coninuing as guest
class Home extends React.Component {




  render() {

    return (
      <div id="home-root">
        <div className="container" id="main-bar" >
          <nav className="navbar navbar-expand-lg navbar-light" role="navigation" >
            
            <div className="nav navbar-nav" >
              <a href="#" id="logo">
                <div className="container">
                  <img src={github_logo} className="home-img"/>
                </div>
              </a>


              <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                <li className="nav-item active">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Gallery</a>
                </li>
                <li>
                  <a className="nav-link active" href="#">Learning</a>
                </li>
                <li>
                  <a className="nav-link active" href="#">FAQ</a>
                </li>
                <li>
                  <a href="https://github.ccs.neu.edu/dmuller189/DollarFlare/" id="gitlogo">
                    <img src={github_logo} id="githubLogo" className="home-img" />
                  </a>
                </li>     
              </ul>      
            </div>
          </nav>
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

