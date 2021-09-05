import React from "react";
import MenuItem from "./MenuItem";
import "./styles/homepagestyles.scss";
import "./info";
import contentinfo from "./info";

function createCard(product){
    return(
        <MenuItem
        img = {product.img}
        title = {product.title}
        size = {product.size}
        />
    );
}

function Homepage(){
    return ( 
        <div className="homepage">
        <div className="directory-menu">{contentinfo.map(createCard)}</div>
       
        </div>
        
    
    )
}

export default Homepage;