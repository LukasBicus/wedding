import React from 'react'
import NavBar from '../basic/NavBar'
import NavLink from './NavLink'
import { routes } from '../../constants'

const Header = () => (
  <NavBar>
    <NavLink toLink={routes.HOME}>Domov</NavLink>
    <NavLink toLink={routes.PROGRAM}>Program</NavLink>
    <NavLink toLink={routes.VENUE}>Melodia</NavLink>
    <NavLink toLink={routes.CHURCH}>Kostol</NavLink>
    <NavLink toLink={routes.ACCOMMODATION}>Ubytovanie</NavLink>
    <NavLink toLink={routes.TRANSPORT}>Doprava</NavLink>
    <NavLink toLink={routes.SEATING_PLAN}>Zasadaci poriadok</NavLink>
  </NavBar>
)

Header.propTypes = {}

export default Header
