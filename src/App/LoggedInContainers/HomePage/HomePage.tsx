import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ViewHolder from '../../utilityComponents/ViewHolder/ViewHolder';
import NetDisplay from '../../utilityComponents/ViewHolder/TemplateViews/ForexTemplate/NetDisplay';
import './HomePage.css';



class HomePage extends React.Component {

    render() {
        return (
                <div className="center-div" id="page-header">
                    <h1>
                        Welcome to DollarFlare!
                    </h1>
                    <br></br>
                    <h4>
                        Choose a template to begin your creation!
                    </h4>
                    viewholder:
                    <br></br>
                        {ViewHolder(<div> indiv</div>, {title: "forex"})}
                </div>
        )
    }
}

export default connect()(HomePage);