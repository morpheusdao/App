import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loader.scss";
import TraverseIcon from "../../assets/icons/traver_black.gif";

function Loader() {
    return (
        <div className="loader-wrap">
            <div className="loader-image">
                <img alt="" src={TraverseIcon} width={130}/>
            </div>
        </div>
    );
}

export default Loader;