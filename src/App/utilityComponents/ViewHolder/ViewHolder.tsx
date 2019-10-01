import React from 'react';
import './ViewHolder.css';


interface IData {
    title: string,
}



const ViewHolder = (WrappedComponent: any, selectData: IData) => {

    return class extends React.Component {

        render() {
            return(
                <div>
                    ViewHolder
                    <br>
                    </br>
                    title: {selectData.title}
                    <br></br>
                    wrappedComponent:
                    <br></br>
                    
                    {/* <WrappedComponent /> */}

                </div>
            )
        }
    }
}

export default ViewHolder;