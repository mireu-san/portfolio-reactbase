import React from 'react'
import "../App.css";
import { Button } from "./Button";
import "./VideoFile.css";

// this section is : front-top-page

function VideoFile() {
    return (
        <div className="video-container">
            {/*<video src="/videos/video-1.mp4" autoplay loop muted />*/}
        <h1>Welcome, this is MireuSpace.</h1>
        <p>A front-end engineer enthusiast, who is skilled in problem-solving</p>
        <div className="video-button">
            <Button 
                className="button" 
                buttonStyle="button--outline"
                buttonSize="button--large"
            >
                어떤 사람인지 알아볼까요?
            </Button>
            
            {/* <Button 
                className="button" 
                buttonStyle="button--primary"
                buttonSize="button--large"
            >
                WATCH OPENING SECTION <i className="far fa-play-circle" />
            </Button> */}
        </div>
        </div>
    )
}

export default VideoFile
