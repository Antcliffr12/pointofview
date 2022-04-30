import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className='pov-main_layout'>
                <main>
                    {children}
                </main>
            </div>
        </React.Fragment>
    )
}

export default Layout