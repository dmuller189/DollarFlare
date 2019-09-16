import React from 'react';
import './home.css';
import GraphViewController from '../ForexGraph/FXGraphControllerShell/GraphViewController';


export default class Home extends React.Component {

    constructor(props: object) {
        super(props);

        this.state = {
            greeting: "state says hi"
        }
    }



    render() {

        return (
            <div>
                <h2>
                    DF Home
                </h2>
                graphview controller (
            <GraphViewController />
                )
            </div>
        )

    }
}