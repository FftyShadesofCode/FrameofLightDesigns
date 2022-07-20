import React from "react"

import MenuItems from "./MenuItems";
import Button from "./Button"

import { menuItems } from '../menuItems'
import Logo from '../../assets/logo.png'

function Navbar() {

    return (
        <header>
            <nav className='nav-area'>
                <div className='logo'>
                    <a href="/" >
                        <img src={Logo} alt='' />
                    </a>
                </div>
                <ul className="menus">
                    {menuItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                    })}
                </ul>
                <Button />
            </nav>
        </header>
    )
}

export default Navbar;