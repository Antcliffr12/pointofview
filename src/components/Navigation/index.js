import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Link as LinkRouter, NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = ({ toggleNav }) => {
  

  return (
    <>
    <nav className='pov-navbar'>
        <div className="container pov-navbar-container">
            <div className='pov-navbar-container__logo'>
                <LinkRouter to="/">Point of View</LinkRouter>
            </div>
            <div className='pov-navbar-container__mobileIcon' onClick={toggleNav}>
                <FaBars />
            </div>
            <ul className='pov-navbar__menu'>
                <li className='pov-navbar__menu-item'>
                    <NavLink to="about">About</NavLink>
                </li>
                <li className='pov-navbar__menu-item'>
                    <NavLink to="clients">Clients</NavLink>
                </li>
                <li className='pov-navbar__menu-item'>
                    <NavLink to="contact">Contact</NavLink>
                </li>
            </ul>
            
        </div>
    </nav>
    </>
  )
}

export default Navigation