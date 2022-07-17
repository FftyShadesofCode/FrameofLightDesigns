import React from 'react'

import Logo from '../../assets/logo.png'

export default function Navbar() {
    return (

        <div id='header' className='fixed-top'>
            <div className='header-inner'>

                {/*Logo*/}
                <div id='logo'>
                    <a href='/' className='logo'><img src={Logo} alt='logo' /></a>
                </div>

                {/*End Logo*/}

                {/*Header Tools*/}
                <div className='header-tools'>
                    <ul>
                        <li>
                            {/*Off-Canvas Menu Trigger(Menu Button)*/}
                            <a id='cd-menu-trigger' href='/'><span className='cd-menu-icon'></span></a>
                        </li>
                    </ul>
                </div>
                {/*End Header Tools*/}

                {/*Navbar*/}
                <nav className='navbar navbar-toggleable-sm navbar-fixed-top navbar-light bg-faded'>
                    <div className='navbar-inner'>

                        {/*Toggle for Mobile Display*/}
                        <div className='navbar-header'>
                            <button className='navbar-toggle collapsed' data-toggle='collapse'>
                                <span className='sr-only'>Toggle Navigation</span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                        </div>
                        {/*End Toggle*/}

                        {/*Nav Links, Forms, for Toggling*/}
                        <div className='collapse navbar-collapse' id='navbar-collapse-1'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li className='nav-item active'>
                                    <a className='nav-link' href='/'>Home <span className="sr-only">(current)</span></a>
                                </li>

                                {/*Dropdown*/}
                                    <li className="dropdown dropdown-hover">
                                        <a
                                            href="/"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            About Us
                                            <span className="caret-2">
        <i className="fas fa-chevron-down" />
      </span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown dropdown-submenu dropdown-hover">
                                                <a
                                                    href="/"
                                                    className="dropdown-toggle keep-inside-screen"
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Our Family
                                                </a>
                                            </li>
                                            <li className="dropdown dropdown-submenu dropdown-hover">
                                                <a
                                                    href="/"
                                                    className="dropdown-toggle keep-inside-screen"
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Our Story
                                                </a>
                                            </li>
                                            <li className="dropdown dropdown-submenu dropdown-hover">
                                                <a
                                                    href="/"
                                                    className="dropdown-toggle keep-inside-screen"
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Why Us?
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-hover">
                                        <a
                                            href="/"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Services
                                            <span className="caret-2">
            <i className="fas fa-chevron-down" />
          </span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown dropdown-submenu dropdown-hover">
                                                <a
                                                    href="/"
                                                    className="dropdown-toggle keep-inside-screen"
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Floral Design
                                                </a>
                                            </li>
                                            <li className="dropdown dropdown-submenu dropdown-hover">
                                                <a
                                                    href="/"
                                                    className="dropdown-toggle keep-inside-screen"
                                                    data-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Photography and Media
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Reviews</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'>Contact Us</a>
                                    </li>
                                        {/* End dropdown */}
                                        {/* /.nav */}
                                        {/* /.navbar-collapse */}
                                        {/* /.navbar-inner */}
                                        {/* End menu */}
                                        {/* /.header-inner */}
                                        {/* End header */}


                            </ul>
                        </div>

                    </div>
                </nav>

                <>
                    {/* ==================================================================================================
		///// Begin off-canvas menu (more info: http://codyhouse.co/gem/secondary-expandable-navigation/) /////
		=================================================================================================== */}
                    <nav id="cd-lateral-nav">
                        <div className="nav-inner">
                            {/* Menu header */}
                            <div className="menu-header">Extra Stuff</div>
                            {/* Begin nav content box */}
                            <div className="cd-content-box margin-top-20">
                                <form id="cd-search-form">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cd-search"
                                            name="search"
                                            placeholder="Search"
                                        />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/* End nav content box */}
                            {/* Begin nav links
				===================== */}
                            <ul className="cd-navigation">
                                <li>
                                    <a className="link" href="page-about-us.html">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a className="link" href="album-list-grid-5col.html">
                                        Photo Gallery
                                    </a>
                                </li>
                                <li>
                                    <a className="link" href="portfolio-list-grid-5col.html">
                                        Portfolio
                                    </a>
                                </li>
                                <li>
                                    <a className="link" href="blog-list-sidebar-right.html">
                                        Articles
                                    </a>
                                </li>
                                <li>
                                    <a className="link" href="page-contact.html">
                                        Contact
                                    </a>
                                </li>
                                {/* Begin submenu */}
                                <li className="item-has-children">
                                    <a href="/">
                                        Submenu
                                        <span className="caret-2">
              <i className="fas fa-chevron-down" />
            </span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="link" href="#">
                                                Sub Link 1
                                            </a>
                                        </li>
                                        <li>
                                            <a className="link" href="#">
                                                Sub Link 2
                                            </a>
                                        </li>
                                        <li>
                                            <a className="link" href="#">
                                                Sub Link 3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/* End submenu */}
                                <li className="cd-menu-separator" />
                            </ul>
                            {/* End nav links */}
                            {/* Begin nav content box */}
                            <div className="cd-content-box">
                                <h2 className="cd-menu-heading">Instagram:</h2>
                                {/* Begin thumbnail list
					==========================
					* Use class "col-2", "col-3", "col-4" "col-5" or "col-6" for thumbnail list columns.
					* Use class "gutter-1", "gutter-2", "gutter-3", "gutter-4" or "gutter-5" to add more space between items.
					*/}
                                <ul className="thumb-list col-3 gutter-3">
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-1.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-2.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-3.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-4.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-5.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-6.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-7.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-8.jpg)"
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <a
                                            target="_blank" rel='noreferrer'
                                            href="https://www.instagram.com"
                                            className="thumb-list-item bg-image"
                                            style={{
                                                backgroundImage: "url(assets/img/album-list/small/img-9.jpg)"
                                            }}
                                        />
                                    </li>
                                </ul>
                                {/* End thumbnail list */}
                            </div>
                            {/* End nav content box */}
                            {/* Begin nav content box */}
                            <div className="cd-content-box margin-top-20">
                                <a
                                    target="_blank" rel='noreferrer'
                                    href="http://themeforest.net/item/agatha-photography-portfolio-website-template/15349868?ref=Themetorium"
                                    className="link btn btn-primary btn-rounded-5x btn-sm btn-block"
                                >
                                    Buy This Template
                                </a>
                                <p className="margin-top-15 small">
                                    Enimat illum atera ates expedita obcaecati atque.
                                </p>
                            </div>
                            {/* End nav content box */}
                        </div>{" "}
                        {/* /.nav-inner */}
                    </nav>
                    {/* End off-canvas menu */}
                </>

            </div>
        </div>
    );
};