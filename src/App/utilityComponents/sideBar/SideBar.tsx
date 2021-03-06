import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from "react-router-dom";
import {RootState} from '../../App';
import './SideBar.css';


class SideBar extends React.Component<propsFromRedux> {

    constructor(props: propsFromRedux) {
        super(props);
    }

    //ensures all names are 19 characters long
    nameSpacePadding(name: string): string {
        let ans = "";
        // for(let i = name.length; i <=19; ) {
        //     ans = ans + " ";
        // }
        return ans;
    }

    componentDidUpdate(nextProps: propsFromRedux) {
        this.props.recentlyViewed.forEach(e => console.log("DID UPDATE:" + e.name));
    }

    render() {
        return (
            <div className="container" id="side-bar">
                <nav className="d-none d-md-block sidebar">
                    <div className="sidebar" id="navigation">
                        <h5 className="sidebar-heading align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Welcome, USERNAME</span>
                        </h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to='/loggedIn/home'>
                                    <a className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <Link to='/logedIn/profile'>
                                <li className="nav-item">
                                    <a className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        Profile
                                    </a>
                                </li>
                            </Link>
                        </ul>
                        <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Recently Viewed</span>
                        </h5>
                        <ul className="nav flex-column mb-2">
                            {   
                                this.props.recentlyViewed.map(e => {
                                    return (
                                      //eventuall biuld in better linking to actual view in data base / redux store
                                      <li className="nav-item" key={e.ID}>
                                          {/* <a className="nav-link" href="/"> */}

                                          <Link to={'/loggedIn/createForex/?ID=' + e.ID}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                              {
                                                  // on view render, read url to check and dynamicly update side bar as user enters editable name
                                                e.name.length < 12 ? e.name+e.ID+this.nameSpacePadding(e.name) : e.name.substring(0,12)+"..."+e.ID}
                                         </Link>
                                          {/* </a> */}
                                      </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    recentlyViewed: state.loggedInState.recentlyViewed
})

const connector = connect(
    mapStateToProps
)

type propsFromRedux = ConnectedProps<typeof connector>;

export default connect(mapStateToProps)(SideBar);
