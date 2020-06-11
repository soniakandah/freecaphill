import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar(props) {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();

    function closeNav() {
        setOpenNav(false);
    }

    useEffect(() => {
        window.addEventListener('resize', closeNav);

        return () => {
            window.removeEventListener('resize', closeNav);
        };
    }, []);

    useEffect(() => {
        closeNav();
    }, [location]);

    return (
        <nav className='main-nav'>
            <Link className='logo' to='/'>
                <img src={props.logo} alt='free-cap-hill' />
            </Link>
            <div
                className={openNav ? 'mobile-collapse open' : 'mobile-collapse'}
            >
                <span
                    className='icon hamburger'
                    onClick={() => {
                        setOpenNav(!openNav);
                    }}
                >
                    menu
                </span>
                <span
                    className='icon hamburger-open'
                    onClick={() => {
                        setOpenNav(!openNav);
                    }}
                >
                    menu_open
                </span>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/events'>Events</Link>
                    </li>
                    <li>
                        <Link to='/forum'>Forum</Link>
                    </li>
                    <li>
                        <Link to='/contribute'>Contribute</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
