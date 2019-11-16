import React from 'react';
import { connect } from 'react-redux';


class BaseNetworkView extends React.Component {




    render() {
        return (
            <h1>
                baseNetworkView
            </h1>
        )
    }
}

export default connect()(BaseNetworkView);