import React from 'react';
import './home.css';
import { connect } from 'react-redux';
import Footer from '../utilityComponents/footer';



//home page after login/coninuing as guest
class Home extends React.Component {




  render() {

    return (
      <div id="home-root">



        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light" role="navigation" id="raw-navbar">
            <div className="nav navbar-nav">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                <li className="nav-item active">
                  <a className="nav-link" href="#">About</a>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="#">Link</a>
                </li>

                <li>
                  <a className="nav-link active" href="#">Learning</a>
                </li>

                <li>
                  <a className="nav-link active" href="#">Faq</a>
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

