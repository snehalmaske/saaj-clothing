import React from "react";

import "./styles/formInputStyles.scss";

function FormInput({onHandleChange, label, ...otherProps}){
    return(
    <div className="group">
    <input className= "form-input" onChange={onHandleChange} {...otherProps} />
        { label ? (
                <label className={`${
                    otherProps.value.length ? "shrink" : ""

                } form-input-label` } 
                >
                {label}
                </label>
            ) :null }
        
    </div>
    );
}

export default FormInput;