import React from 'react';

interface IProps {
    where: "Home" | "About"
}

export default class NavBar extends React.Component<IProps> {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-primary" id="main-nav">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <form className="form-inline">
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}