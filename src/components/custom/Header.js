import React from 'react'
import NavBar from '../basic/NavBar'
import NavLink from './NavLink'
import { routes } from '../../constants'

const Header = () => (
  <NavBar>
    <NavLink to={routes.HOME}>Domov</NavLink>
    <NavLink to={routes.PROGRAM}>Program</NavLink>
    <NavLink to={routes.VENUE}>Melodia</NavLink>
    <NavLink to={routes.CHURCH}>Kostol</NavLink>
    <NavLink to={routes.ACCOMMODATION}>Ubytovanie</NavLink>
    <NavLink to={routes.TRANSPORT}>Doprava</NavLink>
    <NavLink to={routes.SEATING_PLAN}>Zasadaci poriadok</NavLink>
  </NavBar>
)

Header.propTypes = {}

export default Header
