import React from "react";
import { withRouter } from "react-router";
import "./styles/menuItem.scss";


function MenuItem(props){
    return (
       <div className = {`${props.size} menu-item`} onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
            <div className = "background-image"
            style={{
                    backgroundImage: `url(${props.img})`  
            }} />
            
                <div className="content">
                
                    <h1 className="title">{props.title.toUpperCase()}</h1>
                    <span className="subtitle">Shop Now</span>
            </div>
        
        </div>
       
    );
}

export default withRouter(MenuItem);