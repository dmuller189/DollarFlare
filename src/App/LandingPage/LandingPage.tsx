import React from 'react';
import './LandingPage.css';
import { LoginForm } from '../LoginForm/LoginForm';
import { Pie1 } from '../d3Visuals_and_icons/Pie1';
import { SocialMediaDisplay } from '../d3Visuals_and_icons/socialMedia/SocialMediaDisplay';
import { Link } from "react-router-dom";

interface IFootList {
  title: string;
  url: string;
}

let footList: IFootList[] = [
  {
    title: "About",
    url: "#",
  },
  {
    title: "Help",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
  {
    title: "Privacy",
    url: "#",
  },
  {
    title: "Apps",
    url: "#",
  },
  {
    title: "Advertise",
    url: "#",
  },
  {
    title: "Developers",
    url: "#",
  },
  {
    title: "@ DollarFare",
    url: "#",
  },
];

interface IState {
  fireClicked: boolean;
}

export default class LandingPage extends React.Component<{}, IState, null> {

  constructor(props: object) {
    super(props);

    this.state = {
      fireClicked: false
    };

    this.fireClicked = this.fireClicked.bind(this);
  }

  fireClicked(): void {
    const next: boolean = !this.state.fireClicked;
    this.setState({ fireClicked: next });
  }

  render() {
    return (
      <div className="container-fluid" id="m">
        <div className="row h-100"  >
          <div className="col-6 no-float"
            id={!this.state.fireClicked ? "left" : "leftClicked"}>
            <div id="left-content">
              <div id="left-content-header" className="content-header">
                <h2>
                  Unlock your Portofio. <br></br>
                  Start Today for Free with DollarFlare
                </h2>
                <br></br>
              </div>
              <div id="left-content-body" className="content-header">
                <div id="left-content-body-itme1">
                  <ul className="justify-content-center">
                    <h4>
                      Explore awesome features
                    </h4>
                    <li id="query">
                      <div className="row">
                        <div className="col-" id="DBIcon">
                          <svg id="bulletIcon" xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="32"
                            viewBox="0 -9 30 33">
                            <g id="layer2" transform="translate(1, 0)">
                              <path d="M22 18.055v2.458c0 1.925-4.655 3.487-10 3.487-5.344 0-10-1.562-10-3.487v-2.458c2.418 1.738 7.005 2.256 10 2.256 3.006 0 7.588-.523 10-2.256zm-10-3.409c-3.006 0-7.588-.523-10-2.256v2.434c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.434c-2.418 1.738-7.005 2.256-10 2.256zm0-14.646c-5.344 0-10 1.562-10 3.488s4.656 3.487 10 3.487c5.345 0 10-1.562 10-3.487 0-1.926-4.655-3.488-10-3.488zm0 8.975c-3.006 0-7.588-.523-10-2.256v2.44c0 1.926 4.656 3.487 10 3.487 5.345 0 10-1.562 10-3.487v-2.44c-2.418 1.738-7.005 2.256-10 2.256z" />
                            </g>
                          </svg>
                        </div>
                        <div className="col-sm">
                          <span className="list-title">
                            Query:
                          </span>
                          <br></br>
                          Up-to-date financial data from Stocks, Bonds, and Options, or upload your own CSV file
                          </div>
                      </div>
                    </li>
                    <br></br>
                    <li id="saveIt">
                      <div className="row">
                        <div className="col-">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="32"
                            viewBox="400 160 300 400">
                            <g id="layer3" transform="translate(45, 130)">
                              <path d="M620,305.666v-51.333l-31.5-5.25c-2.333-8.75-5.833-16.917-9.917-23.917L597.25,199.5l-36.167-36.75l-26.25,18.083  c-7.583-4.083-15.75-7.583-23.916-9.917L505.667,140h-51.334l-5.25,31.5c-8.75,2.333-16.333,5.833-23.916,9.916L399.5,163.333  L362.75,199.5l18.667,25.666c-4.083,7.584-7.583,15.75-9.917,24.5l-31.5,4.667v51.333l31.5,5.25  c2.333,8.75,5.833,16.334,9.917,23.917l-18.667,26.25l36.167,36.167l26.25-18.667c7.583,4.083,15.75,7.583,24.5,9.917l5.25,30.916  h51.333l5.25-31.5c8.167-2.333,16.333-5.833,23.917-9.916l26.25,18.666l36.166-36.166l-18.666-26.25  c4.083-7.584,7.583-15.167,9.916-23.917L620,305.666z M480,333.666c-29.75,0-53.667-23.916-53.667-53.666s24.5-53.667,53.667-53.667  S533.667,250.25,533.667,280S509.75,333.666,480,333.666z" />
                            </g>
                          </svg>
                        </div>
                        <div className="col-sm">
                          <span className="list-title">Build:</span>
                          <br></br>
                          Manipulate and save custom data visualizations and dashboards
                          </div>
                      </div>
                    </li>
                    <br></br>
                    <li id="saveIt">
                      <div className="row">
                        <div className="col-">
                          <svg xmlns="http://www.w3.org/2000/svg" height="100" width="30" viewBox="0 20 17 17">
                            <g id="layer1" transform="translate(1, -1034.4)">
                              <path id="rect2985" d="m1.9688 1040.4c-1.0939 0-1.9688 0.8-1.9688 1.9v8.0625c0 1.0938 0.87489 1.9687 1.9688 1.9687h8.0625c1.0939 0 1.9688-0.8749 1.9688-1.9687v-6.0313h-1v6c0 0.554-0.446 1-1 1h-8c-0.554 0-1-0.446-1-1v-8c0-0.554 0.446-1 1-1h6v-1h-6.0312z" />
                              <path id="rect3763" d="m9 1036.4v1h5.3125l-8.5 8.5 0.6875 0.6875 8.5-8.5v5.3125h1v-6-1h-7z" />
                            </g>
                          </svg>
                        </div>
                        <div className="col-sm">
                          <span className="list-title">Export:</span>
                          <br></br>
                          Deploy and share your visual creations with the world!
                        </div>
                      </div>
                    </li>                
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 no-float" id="right">
            <div id="right-content">
              <div id="right-content-header" className="justify-content-center">
                <LoginForm
                  field1="Email / Username"
                  field2="password"
                  forgotPassword="true"
                  submitMsg="Log-in"
                  submitT="outline-" />
              </div>
              <div id="right-content-main" className="justify-content-center">
                <h2>
                  Sign Up Now and Begin Exploring
                </h2>
                <br></br>
                <br></br>
                <br></br>
                <h6>Join!</h6>


                <Link to='/sign-up'>
                  <button id="main-sign" type="button" className="btn btn-primary btn-block round">Sign-up</button>
                </Link>

                <Link to="/login"> 
                  <button id="main-log" type="button" className="btn btn-outline-primary btn-block round">Log-in</button>
                </Link>

                
                  <button id="main-guest" type="button" className="btn btn-outline-dark round">Continue as Guest</button>
              
              </div>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="row justify-content-center" id="divider-header">
            <div className="justify-content-between">
              <div className="d-flex flex-column">
                <h1>
                  Complex Visualization Simplified
                </h1>
                <h4>
                  made possible with DollarFlare
                </h4>
                <Pie1 />
              </div>
            </div>
          </div>
        </div>
        <div className="row h-100" id="second-row-left">
          <div className="col-6 no-float">
            <div className="arrow-down"></div>
            <div id="left-content">
              <div id="left-content-header">
                <h2>
                  Join our mailing list fot the latest features and updates <br></br>
                </h2>
                <LoginForm field1="name" field2="Email" submitMsg="Join!" />
                <br></br>
              </div>
              <div id="left-content-body">
                <div id="left-content-body-itme1">
                  <ul className="justify-content-center">
                    <h4>
                      Read about what's going on at DollarFlare.com.  You'll get:
                    </h4>
                    <li>
                      Every tutorial you'll ever need to master DollarFlare
                    </li>
                    <li>
                      Starter templates to bootstrap your projects
                    </li>
                    <li>
                      Proven strategies for modern data visualization and analytics
                    </li>
                    <SocialMediaDisplay />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 no-float" id="second-row-right">
            <div id="right-content-row2">
              <div id="right-content-header-row2">
                right header second row
              </div>
              <div id="right-content-main-row2">
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer" id="pFooter">
          <div className="fixed-bottom bg-light">
            <ul id="foot" className="list-group list-group-horizontal-sm justify-content-center">
              {footList.map((item) => {
                return (
                  <li key={item.title} className="list-group-item">
                    <a href={item.url}>
                      {item.title}
                    </a>
                  </li>
                )
              })}
              <li className="list-group-item">
                <a href='#' onClick={this.fireClicked}>
                  Fire
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}