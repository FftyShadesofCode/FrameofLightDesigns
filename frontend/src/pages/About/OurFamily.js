import React from 'react'

import Ben from '../../assets/images/Headshots/Ben1-1.png'
import Philip from '../../assets/images/Headshots/Philip (1 of 1).jpg'

export default function OurFamily() {
    return (
        <div className='our-family'>
            <div className='ben-wrapper'>
                <figure className='img-wrapper'>
                    <img src={Ben} alt='' className='ben'/>
                    <figcaption style={{textAlign:'center', color: 'var(--lt-lavender)', fontSize: '1.5rem'}}>Benjamin Hodder</figcaption>
                    <figcaption style={{textAlign:'center', color: 'var(--lt-lavender)'}}>Owner and Founder</figcaption>
                </figure>

                <div className='ben-bio'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            <div className='philip-wrapper'>
                <figure className='img-wrapper'>
                    <img src={Philip} alt='' className='philip'/>
                    <figcaption style={{textAlign:'center', color: 'var(--lt-lavender)', fontSize: '1.5rem'}}>Philip R. McDavid</figcaption>
                    <figcaption style={{textAlign:'center', color: 'var(--lt-lavender)'}}>Manager</figcaption>
                </figure>

                <div className='philip-bio'>
                    <p>The Web is like a dominatrix. Everywhere I turn, I see little buttons ordering me to Submit. (Nytwind) Software is like sex: It’s better when it’s free. (Linus Torvalds) The question of whether computers can think is like the question of whether submarines can swim. (Edsger W. Dijkstra) Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. (Alan Kay) Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work”. (Anonymous)</p>
                </div>
            </div>
        </div>
    );
};