import React from 'react';
import './icons.css';
import Twitter_Logo_Blue from './SMicons/Twitter_Logo_Blue.svg';

interface Iprops {
    twitter: "true" | "false",
    reddit: "true" | "false",
    github: "true" | "false",
    youtube: "true" | "false",
    color: string
}

export class SocialMediaDisplay extends React.Component <Iprops> {

    static defaultProps: Iprops = {
        twitter: "true",
        reddit: "true",
        github: "true",
        youtube: "true",
        color: "grey"
    }

    constructor(props: Iprops) {
        super(props);
    }

    render () {
        return (
            <div>
                <img src={Twitter_Logo_Blue} />
            </div>
        )
    }
}