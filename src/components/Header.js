import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return(
       <header id="pov-header">
            <MobileMenu isOpen={isOpen} toggleNav={toggleNav} />
            <Navigation toggleNav={toggleNav} />
       </header>
    )
}

export default Header;