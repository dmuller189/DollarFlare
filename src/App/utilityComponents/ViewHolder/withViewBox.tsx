import React from 'react';
import './withViewBox.css';

interface IData {
    title: string,
}

//HOC to render pretty and interactive template views
const withViewBox = (WrappedComponent: any, data: IData) => {

    class VH extends React.Component {
        render() {
            return(
                <div>
                    In HOC!!!
                    <br>
                    </br>
                    <WrappedComponent />
                </div>
                // <div>
                //     ViewHolder
                //     <br>
                //     </br>
                //     title: {selectData.title}
                //     <br></br>
                //     wrappedComponent:
                //     <br></br>
                //     {/* <WrappedComponent /> */}
                // </div>
            )
        }
    }
    return VH;
}

export default withViewBox;