import React from 'react';
import './header.css'; 
import logo from '../../../assets/mainpage/header/loggo.svg';
import { NavLink } from 'react-router-dom';


export default function Header() {
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
      <div className='wrapperHeader'>
        <div className='header'>
          <div className='logo'>
            <NavLink to='/'>
            <img src={logo} alt="Logo" />
            </NavLink>
          </div>
          <div className='btnsHeader'>
            <div onClick={() => scrollToElement(document.getElementById('about'), 1000)}>about us</div>
            <div>login</div>
            <div>registration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
