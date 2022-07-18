import React from 'react'

export default function Home() {
    return (
        <div>
            <>
                {/* ==============================
		/////// Begin body content ///////
		=============================== */}
                <div id="body-content">
                    {/* ==============================
			/////// Begin intro section ///////
			===================================
			* Use class "bg-image-scroll-horizontal" or "bg-image-scroll-vertical" to enable background image scrolling animation (otherwise use class "bg-image" or "bg-image-fixed").
			* Use class "full-page" to enable fullscreen intro.
			*/}
                    <section
                        id="intro-section"
                        className="full-page bg-image-scroll-vertical"
                        style={{
                            backgroundImage: "url(assets/img/scrolling-bg.jpg)",
                            backgroundPosition: "50% 50%"
                        }}
                    >
                        {/* Element cover */}
                        {/*<div className="cover bg-transparent-6-dark" />*/}
                        {/* Begin intro caption
				=========================
				* Use classes "align-center" and "text-center" to align caption to the center.
				*/}
                        {/*<div className="intro-caption bg-transparent-8-dark text-gray-3">*/}
                        {/*    <h1 className="intro-title">Agatha's Photography</h1>*/}
                        {/*    <p className="intro-text hide-from-xs">*/}
                        {/*        Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum*/}
                        {/*        atque aperiam similique velit enim soluta necessi atentis taker.*/}
                        {/*    </p>*/}
                        {/*    <div className="intro-button-wrap">*/}
                        {/*        <a*/}
                        {/*            href="portfolio-list-masonry-5col.html"*/}
                        {/*            className="btn btn-default btn-rounded-5x"*/}
                        {/*        >*/}
                        {/*            View Our Work*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            target="_blank" rel='noreferrer'*/}
                        {/*            href="http://themeforest.net/item/agatha-photography-portfolio-website-template/15349868?ref=Themetorium"*/}
                        {/*            className="btn btn-primary btn-rounded-5x margin-top-10 hide-from-xs"*/}
                        {/*        >*/}
                        {/*            Buy This Template*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/* End intro caption */}
                        {/* End made with love */}
                    </section>
                    {/* End intro section */}
                </div>
            </>

        </div>
    );
};