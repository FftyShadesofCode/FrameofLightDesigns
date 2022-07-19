import React from "react";
import TopMenuItem from "./TopMenuItem"
import Button from "./Button";

import Logo from '../../assets/logo.png'

function Navbar() {

    const menus = require("./config")

    return (
        <header>
            <nav className='nav'>
                <div className='brand'>
                    <a href="/" >
                        <img src={Logo} alt='' className='logo'/>
                    </a>
                </div>
                <ul className="menu">
                    {menus && menus.map((item,idx) =>
                        <TopMenuItem item={item} key={idx}></TopMenuItem>
                    )}
                </ul>
                <Button />
            </nav>
        </header>
    );
}

export default Navbar;