import React from 'react'
import { NavLink } from 'react-router-dom';
import global64 from '../IMG/global64.png';
import country64 from '../IMG/country64.png';
import table64 from '../IMG/table64.png';
import chart64 from '../IMG/chart64.png';
import poland64 from '../IMG/poland64.png';
import moon64 from '../IMG/moon64.png';
import sun64 from '../IMG/sun64.png';
import myLogo from '../IMG/NewLogoSmallTransparent.png';

function Nav(props) {

  const { darkMode, toggleDarkMode } = props;

  return (
    <nav className={darkMode ? "nav nav--darkMode" : "nav"}>
      <ul className="nav__ul">
        <li className="nav__li"><NavLink className={darkMode ? "navLink navLink--darkMode" : "navLink"} exact to='/'><img src={global64} alt="" className="nav__img" /></NavLink></li>
        <li className="nav__li"><NavLink className={darkMode ? "navLink navLink--darkMode" : "navLink"} to='/countries'><img src={country64} alt="" className="nav__img" /></NavLink></li>
        <li className="nav__li"><NavLink className={darkMode ? "navLink navLink--darkMode" : "navLink"} to='/table'><img src={table64} alt="" className="nav__img" /></NavLink></li>
        <li className="nav__li"><NavLink className={darkMode ? "navLink navLink--darkMode" : "navLink"} to='/chart'><img src={chart64} alt="" className="nav__img" /></NavLink></li>
        <li className="nav__li"><NavLink className={darkMode ? "navLink navLink--darkMode" : "navLink"} to='/poland'><img src={poland64} alt="" className="nav__img" /></NavLink></li>
        <li className="nav__li" onClick={() => toggleDarkMode()}><img src={darkMode ? sun64 : moon64} alt="" className={darkMode ? "nav__img moon moon--darkMode" : "nav__img moon"} /></li>
        <li className="nav__li"><a href='http://www.matthave.pl/' target="_blank" rel='noopener noreferrer'><img src={myLogo} alt="" className="nav__img myLogo" /></a></li>
      </ul>
    </nav>
  )
}

export default Nav