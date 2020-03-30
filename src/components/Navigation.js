import React from 'react'
import globalImg from '../IMG/global64.png'
import countryImg from '../IMG/country64.png'
import tableImg from '../IMG/table64.png'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__list"><NavLink to='/'><img src={globalImg} alt="globalImage" className="nav__img" /></NavLink></li>
          <li className="nav__list"><NavLink to='/countries'><img src={countryImg} alt="CountryImage" className="nav__img" /></NavLink></li>
          <li className="nav__list"><NavLink to='/table'><img src={tableImg} alt="tableImage" className="nav__img" /></NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
