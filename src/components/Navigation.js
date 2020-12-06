import React from "react";
import {NavLink} from "react-router-dom";

export default () => {
	return (
        <div>
            <ul>
                <li>
                    <NavLink 
                        exact
                        to="/" 
                        className="NLink"
                        activeClassName="NLink-active"
                    >
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contacts" 
                        className="NLink"
                        activeClassName="NLink-active"
                    >
                        CONTACTS
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className="NLink"
                        activeClassName="NLink-active"
                    >
                        ABOUT
                    </NavLink>
                </li>
            </ul>
            <hr />
        </div>
    )
}