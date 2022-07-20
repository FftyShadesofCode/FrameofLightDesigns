import React from 'react'

import Slide1 from "../../assets/slide/slide-1.jpg"
import Slide2 from "../../assets/slide/slide-2.jpg"
import Slide3 from "../../assets/slide/slide-3.jpg"
import Slide4 from "../../assets/slide/slide-4.jpg"
import Slide5 from "../../assets/slide/slide-5.jpg"
import Slide6 from "../../assets/slide/slide-6.jpg"
import Slide7 from "../../assets/slide/slide-7.jpg"
import Slide8 from "../../assets/slide/slide-8.jpg"
import Slide9 from "../../assets/slide/slide-9.jpg"
import Slide10 from "../../assets/slide/slide-10.jpg"
import Slide11 from "../../assets/slide/slide-11.jpg"
import Slide12 from "../../assets/slide/slide-12.jpg"
import Slide13 from "../../assets/slide/slide-13.jpg"

export default function Slider() {
    return (
        <div className='carousel'>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='13' annot='Flowers and Photos from Barrett-Cross Wedding in 2012'>
                <img src={Slide13} alt='Flowers and Photos from Barrett-Cross Wedding in 2012'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='12' annot='Flowers and Photos from Hartley-Segal Wedding in 2007'>
                <img src={Slide12} alt='Flowers and Photos from Hartley-Segal Wedding in 2007'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='11' annot='Flowers and Photos from Delgado Wedding in 2012'>
                <img src={Slide11} alt='Flowers and Photos from Delgado Wedding in 2012'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='10' annot='Flowers and Photos from Barrett-Cross Wedding in 2012'>
                <img src={Slide10} alt='Flowers and Photos from Barrett-Cross Wedding in 2012'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='9' annot='Wood burning, steam run train at Altamont County Fair'>
                <img src={Slide9} alt='Wood burning, steam run train at Altamont County Fair'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='8' annot='A prom wrist corsage'>
                <img src={Slide8} alt='A prom wrist corsage'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='7' annot='A prom wrist corsage'>
                <img src={Slide7} alt='A prom wrist corsage'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='6' annot='One of many shots in a photo-series I do called Through the Eyes of Horses'>
                <img src={Slide6} alt='One of many shots in a photo-series I do called Through the Eyes of Horses'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='5' annot='Flowers and Photos from Sawyer-Rosenburg Wedding in 2019'>
                <img src={Slide5} alt='Flowers and Photos from Sawyer-Rosenburg Wedding in 2019'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='4' annot='The car you can ride away in, if you host your reception at The State Room in Downtown Albany!'>
                <img src={Slide4} alt='The car you can ride away in, if you host your reception at The State Room in Downtown Albany!'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='3' annot='Wood burning, steam run train at Altamont County Fair'>
                <img src={Slide3} alt='Wood burning, steam run train at Altamont County Fair'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='2' annot='Performance of The Music Man by Park Playhouse Theatre'>
                <img src={Slide2} alt='Performance of The Music Man by Park Playhouse Theatre'/>
            </div>

            <input type='checkbox' className='faux-ui-facia'/>
            <div className='slide' slide='1' annot='Flowers and Photos from Sawyer-Rosenburg Wedding in 2019'>
                <img src={Slide1} alt='Flowers and Photos from Sawyer-Rosenburg Wedding in 2019'/>
            </div>

            <div className='counter' count='13'> / 13</div>

        </div>
    );
};