import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer';
import { LoginForm } from '../LoginForm/LoginForm';



//home page after login/coninuing as guest
class Home extends React.Component {




  render() {

    return (
      <div id="home-root">

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    Navbar
                   
                        <div className="navbar-nav">
                            <div className="nav-item nav-link">Features</div>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link" href="#">Disabled</a>
                        </div>
                    
                </nav> */}

        <header className="navbar navbar-static-top" role="navigation" id="raw-nav">
          <div className="container">
            {/* <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#raw-navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span> <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="" target="_blank">
                
              </a>
        </div> */}

              <nav className="collapse navbar-collapse" role="navigation" id="raw-navbar">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="" target="_blank">About</a>
                  </li>
                  <li>
                    <a href="" >Gallery</a>
                  </li>
                  <li>
                    <a href="" target="_blank">Learning</a>
                  </li>
                  <li>
                    <a href="" target="_blank">FAQs</a>
                  </li>
                  <li>
                    <a href="" target="_blank">User survey</a>
                  </li>
                  <li>
                    <a href="" target="_blank">Developer Guide</a>
                  </li>
                </ul>
              </nav>

          
      </div>
    </header>

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

