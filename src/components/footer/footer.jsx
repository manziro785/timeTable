import React from 'react'
import './footer.css'

export default function Footer() {
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
        <div className="wrapper_foot">
<div className="footer">
     <div className="footer_box">
<div className="left_foot">
Time is the most valuable thing you can spend—organize it wisely.
</div>
<div className="right_foot">
    <div className="more_foot">
<div className="title_foot">
More tags
</div>
<div className="foot_link">rules of using</div>
<div className="foot_link"onClick={() => scrollToElement(document.getElementById('about'), 1000)}>about us</div>
<div className="foot_link">reviews from users</div>
    </div>
    <div className="contacts_foot">
        <div className="title_foot">
        Contacts
        </div>
        <div className="foot_link">+ 996704704716</div>
        <div className="foot_link">+ 996 555104914</div>
        <div className="foot_link">manziro785@gmail.com</div>

    </div>
</div>
     </div>
</div>
</div>
    </div>
  )
}
