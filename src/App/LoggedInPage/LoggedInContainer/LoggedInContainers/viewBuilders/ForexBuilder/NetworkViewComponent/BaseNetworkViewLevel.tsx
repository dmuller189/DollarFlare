import React from 'react';
import { connect } from 'react-redux';


class BaseNetworkViewLevel extends React.Component {




    render() {
        return (
            <h1>
                baseNetworkViewlevel
            </h1>
        )
    }
}


export default connect()(BaseNetworkViewLevel);