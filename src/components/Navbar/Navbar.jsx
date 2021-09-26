import React from "react";
import "../styles/headerstyles.scss";
import { Link, useLocation } from "react-router-dom";
import {ReactComponent as Logo} from "../../logo.svg";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles.js";





function Navbar({ totalItems}){
    const classes = useStyles();
    const location= useLocation();
    
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
                {location.pathname === "/cart" || "/" && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                    </Badge>

                    </IconButton>
                </div>)}
            </div>

        </div>
    )
}

export default Navbar;