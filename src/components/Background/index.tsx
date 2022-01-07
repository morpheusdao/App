import React from "react";
import "./background.scss";
// import BlobsTop from "../../../../assets/icons/landing-blobs-top.png";

function Background() {
    return (
        <div className="App-Video">
            <video autoPlay muted loop className="App-Video-background">
                <source  src="background.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default Background;
