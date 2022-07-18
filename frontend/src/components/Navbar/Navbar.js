import React from "react";
import { menuItems } from "../menuitems";
import MenuItems from './MenuItems'
import Button from "./Button";

import Logo from '../../assets/logo.png'

function Navbar() {

    return (
        <header>
            <nav className='nav-area'>
                <div className='brand'>
                    <img src={Logo} alt='' className='logo'/>
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
    );
}

export default Navbar;