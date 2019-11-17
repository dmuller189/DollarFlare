import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import FXTemplate from '../../../../utilityComponents/TemplateViews/FXTemplate/FXTemplate';
import './HomePage.css';


interface IViewTemplate {
    title: string,
    description: string[],
    link: string,
    ViewComponent: any,
}

let viewTemplates: IViewTemplate[] = [
    {
        title: "Forex Networks",
        description: [
            "Query Real-time and Historical Currency-pair Values",
            "Build custom networks from any major currency",
            "Uncover arbirage with advanced graph algorithms"
        ],
        link: "./createForex",
        ViewComponent: <FXTemplate gid="templateView" />,
    },
]

class HomePage extends React.Component {

    render() {
        return (
            <div className="center-div" id="page-header">
                <h1>
                    Welcome to DollarFlare!
                    </h1>
                <h5>
                    Choose a template to begin your creation!
                    </h5>
                <br></br>
                {viewTemplates.map(e => {
                        return (
                            <div id={e.title}>
                                <div className = "view-holder">
                                <div className="center-div">

                                    <Link to={e.link} >
                                        <h2>
                                          <button id="main-log" type="button" className="btn btn-outline-dark title-Button">
                                            <h4>
                                              {e.title}
                                            </h4>
                                            </button>
                                        </h2>
                                    </Link>

                                </div>
                                {e.ViewComponent}
                                <div className="container center-div">
                                    <ul className="d-list">
                                        {e.description.map(d => {
                                            return (
                                                <li>
                                                    {d}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                </div>
                                <br></br>
                            </div>)})}
                <br>
                </br>
            </div>
        )
    }
}

export default connect()(HomePage);