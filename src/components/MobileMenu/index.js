import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter, NavLink } from 'react-router-dom';

import './mobilemenu.scss';


const MobileMenu = ({ isOpen, toggleNav }) => {
  return (
    <aside className={`pov-mobileMenu ${isOpen ? 'open' : ''} `} onClick={toggleNav}>
        <div className='pov-mobileMenu__icon' onClick={toggleNav}>
            <FaTimes />
        </div>
        <div className='pov-mobileMenu__wrapper'>
             <ul className='pov-mobileMenu__menu'>
                    <li className='pov-mobileMenu__menu-item'>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li className='pov-mobileMenu__menu-item'>
                        <NavLink to="clients">Clients</NavLink>
                    </li>
                    <li className='pov-mobileMenu__menu-item'>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
            </ul>
        </div>
       
    </aside>
  )
}

export default MobileMenu