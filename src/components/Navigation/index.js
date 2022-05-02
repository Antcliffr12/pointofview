import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Link  } from 'react-scroll';

import './navigation.scss';
import { animateScroll as scroll } from 'react-scroll/modules';

const Navigation = ({ toggleNav }) => {
  
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 1) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
    <nav className={scrollNav ? 'pov-navbar-scroll' : 'pov-navbar'}>
        <div className="container pov-navbar-container">
            <div className='pov-navbar-container__logo'>
                <Link to="/" onClick={toggleHome}>Point of View</Link>
            </div>
            <div className='pov-navbar-container__mobileIcon' onClick={toggleNav}>
                <FaBars />
            </div>
            <ul className='pov-navbar__menu'>
                <li className='pov-navbar__menu-item'>
                    <Link to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >About</Link>
                </li>
                <li className='pov-navbar__menu-item'>
                    <Link to="clients">Clients</Link>
                </li>
                <li className='pov-navbar__menu-item'>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
            
        </div>
    </nav>
    </>
  )
}

export default Navigation