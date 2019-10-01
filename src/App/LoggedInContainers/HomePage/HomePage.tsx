import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './HomePage.css';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <h1>
                    HomePage Container
                </h1>
                
            </div>
        )
    }
}

export default connect()(HomePage);