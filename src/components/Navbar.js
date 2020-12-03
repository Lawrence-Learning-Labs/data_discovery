import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to={process.env.PUBLIC_URL+'/'} className='navbar-logo' onClick={closeMobileMenu}>
            Data Science for All

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to={process.env.PUBLIC_URL+'/'} className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={process.env.PUBLIC_URL+'/Experience1'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience 1
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={process.env.PUBLIC_URL+'/Experience2'}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience 2
              </Link>
            </li>

            <li>
              <Link
                to={process.env.PUBLIC_URL+'/'}
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
