import React from 'react'
import globalImg from '../IMG/global64.png'
import countryImg from '../IMG/country64.png'
import tableImg from '../IMG/table64.png'
import moonImg from '../IMG/moon64.png'
import sunImg from '../IMG/sun64.png'
import logo from '../IMG/NewLogoSmallTransparent.png';
import { NavLink } from 'react-router-dom'

function Navigation(props) {

  return (
    <nav className={props.darkMode ? "nav nav--darkMode" : "nav"}>
      <ul className="nav__ul">
        <li className="nav__list"><NavLink to='/'><img src={globalImg} alt="globalImage" className="nav__img" /></NavLink></li>

        <li className="nav__list"><NavLink to='/countries'><img src={countryImg} alt="CountryImage" className="nav__img" /></NavLink></li>

        <li className="nav__list"><NavLink to='/table'><img src={tableImg} alt="tableImage" className="nav__img" /></NavLink></li>

        <li className="nav__list"><img src={props.darkMode ? sunImg : moonImg} alt="light-DarkImg" className={props.darkMode ? "nav__img sun" : "nav__img moon"} onClick={props.toggleDarkMode} /></li>

        <li className="nav__list"><a href='http://www.matthave.pl/' target="_blank" rel='noopener noreferrer'><img src={logo} alt="MattHaveLogo" className="nav__img myLogo" /></a></li>
      </ul>
    </nav>
  )
}

export default Navigation