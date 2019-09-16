import React from 'react';
import './home.css';
import ForexGraph from '../ForexGraph/ForexGraphLanding'


//home page after login/coninuing as guest
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
                DF HomePAGE
              </h2>
              <ForexGraph />
            </div>
        )

    }
}