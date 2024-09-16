import React from 'react'
import './header2.css'
import logo from '../../assets/mainpage/header/loggo.svg';
import { NavLink } from 'react-router-dom';


export default function Header2() {
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
            <div>go home</div>
          </div>
        </div>
      </div>
    </div>
  )
}
