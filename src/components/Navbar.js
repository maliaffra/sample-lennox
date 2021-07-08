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
        <div className='nav-container'>
          <Link to='/' className='logo' onClick={closeMobileMenu}>
          Dine Fine
            <i class='fas fa-utensils' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/reservation'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Subscribe
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Subscribe</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
