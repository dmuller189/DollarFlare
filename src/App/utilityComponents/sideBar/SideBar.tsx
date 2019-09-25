import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './SideBar.css';


class SideBar extends React.Component {



    render() {
        return (

            /**
             * replacing <a> with <link>
             */
            <nav className="col-md-2 d-none d-md-block sidebar" id="side-bar">
                <div className="sidebar-sticky">
                    <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Welcome, USERNAME</span>
                    </h5>
                    <ul className="nav flex-column">

                        <li className="nav-item">
                            <Link to='/home'>
                                <a className="nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    Home
                                </a>
                            </Link>
                        </li>


                        <Link to='/profile'>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    Profile
                                </a>
                            </li>
                        </Link>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                Reports
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                Community
                            </a>
                        </li>
                    </ul>

                    <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Recently Viewed</span>
                    </h5>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                iterate over recent views
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}


export default connect()(SideBar);
