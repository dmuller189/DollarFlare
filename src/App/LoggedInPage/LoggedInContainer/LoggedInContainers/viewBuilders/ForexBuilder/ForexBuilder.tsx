import React from 'react';
import { connect } from 'react-redux';


class ForexBuilder extends React.Component {

    componentDidMount() {
        //@ts-ignore
        this.props.dispatch({type:  "ADD_RECENTLY_VIEWED",
                            data: {
                                type: "forex",
                                name: "new forex build",
                                dateModified: "10/01/2019"
                            }
                        })
    }

    render() {
        return(
            <div>
                <h1>
                    forex builder
                </h1>
            </div>
        )
    }
}

export default connect()(ForexBuilder);