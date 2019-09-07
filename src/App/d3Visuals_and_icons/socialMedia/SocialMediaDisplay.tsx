import React from 'react';
import './icons.css';
import Twitter_Logo_Blue from './SMicons/Twitter_Logo_Blue.svg';
import github_logo from './SMicons/github_logo.svg';
import youtube_logo from './SMicons/youtube_logo.svg';

interface Iprops {
    twitter: "true" | "false",
    github: "true" | "false",
    youtube: "true" | "false",
    color: string
}

export class SocialMediaDisplay extends React.Component <Iprops> {

    static defaultProps: Iprops = {
        twitter: "true",
        github: "true",
        youtube: "true",
        color: "grey"
    }

    constructor(props: Iprops) {
        super(props);
    }

    render () {
        return (
            <div className="row">
                <img id="tw"src={Twitter_Logo_Blue} />
                <img src={github_logo} />
                <img src={youtube_logo} />
            </div>
        )
    }
}