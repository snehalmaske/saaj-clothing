import React from "react";
import "./styles/buttonstyles.scss";

function Button({children, ...otherProps }){
    return(
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    );
}

export default Button;

