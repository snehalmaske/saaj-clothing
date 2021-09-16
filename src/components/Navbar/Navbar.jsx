import React from "react";
import "../styles/headerstyles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../logo.svg";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles.js";




function Navbar(){
    const classes = useStyles();
    
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/products">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                    </Badge>

                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Navbar;