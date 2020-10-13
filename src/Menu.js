import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ol>
                <li>
                    <NavLink exact to="/P01">
                        Project 01
                    </NavLink>
                </li>
                <br/>
                <li>
                    <NavLink exact to="/P02">
                        Project 02 
                    </NavLink>
                </li>
            </ol>
        </>
    )
};
export default Menu;