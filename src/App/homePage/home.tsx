import React from 'react';
import './home.css';
import ForexGraph from '../ForexGraph/ForexGraphLanding'


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


            <ForexGraph />
                )
            </div>
        )

    }
}