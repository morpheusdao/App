import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./loader.scss";
import TraverseIcon from "../../assets/icons/traver_black.gif";

function Loader() {
    return (
        <div className="loader-wrap">
            <img alt="" src={TraverseIcon} width={130}/>
        </div>
    );
}

export default Loader;