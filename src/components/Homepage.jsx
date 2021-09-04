import React from "react";
import "./styles/homepagestyles.scss"

function Homepage(){
    return(
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Sarees</h1>
                    <span className="subtitle">Shop Now</span>
            </div>
            
        </div>

        <div className="menu-item">
            <div className="content">
                <h1 className="title">Jewlery</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>

        <div className="menu-item">
            <div className="content">
                <h1 className="title">Shoes</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>

        <div className="menu-item">
            <div className="content">
                <h1 className="title">WOMEN</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>

        <div className="menu-item">
            <div className="content">
                <h1 className="title">MEN</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    </div>
    </div>
    )}

export default Homepage;