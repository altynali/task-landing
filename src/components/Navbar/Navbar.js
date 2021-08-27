import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);
  return (
    <>
      <div className='nav'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div
          className='nav-burger-menu'
          onClick={() => setShowBurger(!showBurger)}
        >
          <svg viewBox='0 0 100 80' width='30' height='30'>
            <rect width='90' height='10' fill='white'></rect>
            <rect y='30' width='90' height='10' fill='white'></rect>
            <rect y='60' width='90' height='10' fill='white'></rect>
          </svg>
        </div>

        <div className='nav-links'>
          <NavLink to='/blogers' className='nav-link'>
            Блогеры
          </NavLink>
          <NavLink to='/cases' className='nav-link'>
            Кейсы
          </NavLink>
          <NavLink to='/agency' className='nav-link'>
            exit agency
          </NavLink>
          <NavLink to='/contacts' className='nav-link'>
            Контакты
          </NavLink>
        </div>
        <div className='nav-lang'>en/ru</div>
      </div>
      {showBurger && (
        <>
          <NavLink to='/blogers' className='nav-link-burger'>
            Блогеры
          </NavLink>
          <NavLink to='/cases' className='nav-link-burger'>
            Кейсы
          </NavLink>
          <NavLink to='/agency' className='nav-link-burger'>
            exit agency
          </NavLink>
          <NavLink to='/contacts' className='nav-link-burger'>
            Контакты
          </NavLink>
        </>
      )}
    </>
  );
};

export default Navbar;
