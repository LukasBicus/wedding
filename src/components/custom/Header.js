import React from 'react'
// import PropTypes from 'prop-types'
import NavBar from '../basic/NavBar'
import NavLink from './NavLink'
import { SECTION_ID } from '../../constants'

const Header = () => (
  <NavBar logo={<NavLink toId={SECTION_ID.HOME}>Domov</NavLink>}>
    <NavLink toId={SECTION_ID.PROGRAM}>Program</NavLink>
    <NavLink toId={SECTION_ID.VENUE}>Melodia</NavLink>
    <NavLink toId={SECTION_ID.CHURCH}>Kostol</NavLink>
    <NavLink toId={SECTION_ID.ACCOMMODATION}>Ubytovanie</NavLink>
    <NavLink toId={SECTION_ID.TRANSPORT}>Doprava</NavLink>
    <NavLink toId={SECTION_ID.SEATING_PLAN}>Zasadaci poriadok</NavLink>
  </NavBar>
)

Header.propTypes = {}

export default Header
