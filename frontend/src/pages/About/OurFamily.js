import React from 'react'

import Ben from '../../assets/images/Headshots/Ben1-1.png'
import Philip from '../../assets/images/Headshots/Philip (1 of 1).jpg'

export default function OurFamily() {
    return (
        <div className='our-family'>
            <div className='ben-wrapper'>
                <div className='img-wrapper'>
                    <img src={Ben} alt='' className='ben'/>
                </div>
            </div>

            <div className='philip-wrapper'>
                <div className='img-wrapper'>
                    <img src={Philip} alt='' className='philip'/>
                </div>
            </div>
        </div>
    );
};