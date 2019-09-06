import React from 'react';


interface ToF {
    val: "true" 
}

interface Iprops {
    twitter: "true" | "false",
    facebook: "true" | "false",
    reddit: "true" | "false",
    instagram: "true" | "false",
    youtube: "true" | "false"
}


export class SocialMediaDisplay extends React.Component <Iprops, ToF> {

    static defaultProps: Iprops = {
        twitter: "true",
        facebook: "true",
        reddit: "true",
        instagram: "true",
        youtube: "true"
    }

    constructor(props: object) {
        super(props);
    }



    render () {
        return (
            <div>
                d
            </div>
        )
    }
}