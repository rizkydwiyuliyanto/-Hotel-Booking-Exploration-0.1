import React from "react";
import "../../style.css";

const Card = ({ children }) => {

    return (
        <div className={"card-1 position-relative col-12 col-xl fs-normal"}>
            { children }
        </div>
    )
}

export default Card