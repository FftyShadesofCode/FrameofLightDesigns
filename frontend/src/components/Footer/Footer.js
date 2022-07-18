import React from 'react'

import Facebook from '../../assets/icons/kindpng_4801557.png'
import Instagram from '../../assets/icons/Instagram-logo-modern-paint-splash-social-media-png.png'
import Pinterest from '../../assets/icons/—Pngtree—pinterest social media icon_3572490.png'
import Email from '../../assets/icons/email.png'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-inner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="copyright">2022 © <a href='https"//www.fiftyshdesofcode.com'>Fifty Shades of Code</a></div>
                        </div>{" "}
                        {/* /.col */}
                        <div className="col-sm-6">
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.facebook.com/FrameOfLightDesigns"
                                            title="Follow us on Facebook"
                                        >
                                            <img src={Facebook} alt='' className='Facebook'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com/frameoflightdesigns/"
                                            title="Follow us on Instagram"
                                        >
                                            <img src={Instagram} alt='' className='Instagram'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.pinterest.com/frameoflight"
                                            title="Follow us on Pinterest"
                                        >
                                            <img src={Pinterest} alt='' className='Pinterest'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="mailto:frameoflightdesigner@gmail.com"
                                            title="Contact Us"
                                        >
                                            <img src={Email} alt='' className='Email'/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>{" "}
                        {/* /.col */}
                    </div>{" "}
                    {/* /.row */}
                </div>{" "}
                {/* /.container */}
            </div>{" "}
            {/* /.footer-inner */}
        </footer>

    );
};