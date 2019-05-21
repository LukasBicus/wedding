import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import url from 'url'
import { scrollToElement } from '../../../utils'

const StyledAnchor = styled.a`
  cursor: pointer;
`
const globalLocation = typeof window !== 'undefined' ? window.location : {}

const NavLink = ({ children, toLink, ...rest }) => {
  const parsedLink = url.parse(toLink)
  const isSamePathname = globalLocation.pathname === parsedLink.pathname
  const Comp = isSamePathname ? StyledAnchor : Link
  const props = isSamePathname
    ? {
      onClick() {
        scrollToElement(parsedLink.hash.substring(1))
      }
    }
    : { to: toLink }
  return (
    <Comp {...props} {...rest}>
      {children}
    </Comp>
  )
}

NavLink.propTypes = {
  toLink: PropTypes.string.isRequired,
  to: PropTypes.string,
  children: PropTypes.node,
  ...space.propTypes
}

export default NavLink
