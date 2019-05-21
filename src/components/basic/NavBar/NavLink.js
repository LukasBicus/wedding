import React from 'react'
import PropTypes from 'prop-types'
import { space } from 'styled-system'
import { Link } from 'gatsby'

const NavLink = ({ children, toId, to, ...rest }) => (
    <Link to={to} {...rest}>
      {children}
    </Link>
)

NavLink.propTypes = {
  toId: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
  ...space.propTypes
}

export default NavLink
