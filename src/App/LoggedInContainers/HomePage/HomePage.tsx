import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './HomePage.css';



class HomePage extends React.Component {

    render() {
        return (
            <div>

                <div className="center-div" id="page-header">
                    <h1>
                        Welcome to DollarFlare!
                    </h1>
                    <br></br>
                    <h4>
                        Choose a template to begin your creation!
                    </h4>
                </div>








            </div>
        )
    }
}

export default connect()(HomePage);