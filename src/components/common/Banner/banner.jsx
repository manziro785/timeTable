import React from 'react'
import './banner.css'
import banimg from '../../../assets/mainpage/common/Frame21.svg'
import move from '../../../assets/mainpage/common/Frame7.svg'
import bubble from '../../../assets/mainpage/common/Frame22.svg'



export default function Banner() {
    const scrollToElement = (element, duration) => {
        if (element) {
          const start = window.pageYOffset;
          const end = element.getBoundingClientRect().top;
      
          let startTime = null;
      
          const scrollStep = (timestamp) => {
            if (!startTime) {
              startTime = timestamp;
            }
      
            const progress = timestamp - startTime;
            const easeInOutCubic = progress => progress < 0.5
              ? 4 * progress ** 3
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
            window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
      
            if (progress < duration) {
              requestAnimationFrame(scrollStep);
            }
          };
      
          requestAnimationFrame(scrollStep);
        }
      };
  return (
    <div>
        <div className="banner">
            <div className="leftBan">
                
<div className="titleBun">
Power Up <br/>
Your Schedule
</div>
<div className="subtBun">
Optimize Your Time, Maximize Your Success
    </div>
    <div className="btnsBun">
        <div className="getStarted">
            <a href="/table" >
            <img src={move} style={{marginRight: '15px', width: '15%'}}alt="" />
            <p>get started</p>
            </a>
        </div>
        <div className="lernMore" onClick={() => scrollToElement(document.getElementById('adv'), 1000)}>
        <img src={move} className="rotated-image" alt=""style={{marginRight: '15px', width: '15%'}} />
        <p>learn more </p>
            
            </div>
    </div> 
    <img src={bubble} alt="" className='bubbles_banner' />
    

            </div>
            <div className="rightBan">
                <img src={banimg} alt="" />
            </div>
           </div>

    </div>
  )
}
