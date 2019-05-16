import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import NavBar from '../basic/NavBar'
import { Text } from '../basic/Typography'

const StyledLink = styled(NavBar.Link)`
  ${theme.media.mobile`
     width: 100%;
     background: ${theme.colors.WHITE};
  `};
  padding: 12px 24px;
`

const StyledText = styled(Text.M)`
  ${theme.media.mobile`
    color: ${theme.colors.TURKISH_ROSE};
  `};
  ${theme.media.desktop`
    color: ${theme.colors.WHITE};
  `};
`

const NavLink = ({ children, ...props }) => (
  <StyledLink {...props}>
    <StyledText isBold>{children}</StyledText>
  </StyledLink>
)

NavLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default NavLink
