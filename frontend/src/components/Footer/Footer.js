import React from 'react'

import Facebook from '../../assets/icons/kindpng_4801557.png'
import Instagram from '../../assets/icons/Instagram-logo-modern-paint-splash-social-media-png.png'
import Pinterest from '../../assets/icons/—Pngtree—pinterest social media icon_3572490.png'
import Email from '../../assets/icons/email.png'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-site-info">
                            2022 © All Rights Reserved by{" "}
                            <a
                                href="https://www.fiftyshdesofcode.com"
                                target="_blank" rel='noreferrer'
                            >
                                FIFTY SHADES OF CODE
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/*<nav*/}
                        {/*    id="footer-navigation"*/}
                        {/*    className="site-navigation footer-navigation centered-box"*/}
                        {/*    role="navigation"*/}
                        {/*>*/}
                        {/*    <ul*/}
                        {/*        id="footer-menu"*/}
                        {/*        className="nav-menu styled clearfix inline-inside"*/}
                        {/*    >*/}
                        {/*        <li*/}
                        {/*            id="menu-item-26"*/}
                        {/*            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26"*/}
                        {/*        >*/}
                        {/*            <a href="/">Support</a>*/}
                        {/*        </li>*/}
                        {/*        <li*/}
                        {/*            id="menu-item-27"*/}
                        {/*            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-27"*/}
                        {/*        >*/}
                        {/*            <a href="/">Contact Us</a>*/}
                        {/*        </li>*/}
                        {/*        <li*/}
                        {/*            id="menu-item-28"*/}
                        {/*            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"*/}
                        {/*        >*/}
                        {/*            <a href="/">Disclaimer</a>*/}
                        {/*        </li>*/}
                        {/*        <li*/}
                        {/*            id="menu-item-29"*/}
                        {/*            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"*/}
                        {/*        >*/}
                        {/*            <a href="/">Add more</a>*/}
                        {/*        </li>*/}
                        {/*    </ul>*/}
                        {/*</nav>*/}
                    </div>
                    <div className="col-md-3">
                        <div id="footer-socials">
                            <div className="socials inline-inside socials-colored">
                                <a target="_blank" rel='noreferrer' href="https://www.facebook.com" title="Follow us on Facebook">
                                    <img src={Facebook} alt='' className='facebook'/>
                                </a>
                                <a target="_blank" rel='noreferrer' href="https://www.facebook.com" title="Follow us on Instagram">
                                    <img src={Instagram} alt='' className='instagram'/>
                                </a>
                                <a target="_blank" rel='noreferrer' href="https://www.facebook.com" title="Follow us on Pinterest">
                                    <img src={Pinterest} alt='' className='pinterest'/>
                                </a>
                                <a target="_blank" rel='noreferrer' href="mailto:frameoflightdesigns@gmail.com" title="Email us">
                                    <img src={Email} alt='' className='email'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};