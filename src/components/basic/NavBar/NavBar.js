import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../theme'
import MenuButton from './MenuButton'
import { NAVIGATION_HEIGHT } from '../../../constants'
import NavLink from './NavLink'

const Wrapper = styled.div`
  width: 100%;
  height: ${NAVIGATION_HEIGHT}px;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.colors.TURKISH_ROSE};
  box-shadow: ${theme.shadow.BOTTOM};
  justify-content: space-between;
  ${theme.media.mobile`
    position: relative;
    flex-direction: row-reverse;
  `};
`

const LinksWrapper = styled.div`
  ${theme.media.desktop`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
  ${theme.media.mobile`
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadow.BOTTOM};
    ${({ isOpen }) =>
    !isOpen
      && `
      display: none;  
    `}
  `}
`
const StyledShadow = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  ${theme.media.mobile`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
  `}
`

class NavBar extends React.Component {
  state = {
    isMobileMenuOpen: false
  }
  handleToggleMenuClicked = () => {
    this.setState(({ isMobileMenuOpen }) => ({
      isMobileMenuOpen: !isMobileMenuOpen
    }))
  }
  handleCloseMenuClick = () => {
    this.setState({
      isMobileMenuOpen: false
    })
  }
  render() {
    const { children } = this.props
    const { isMobileMenuOpen } = this.state
    return (
      <React.Fragment>
        <StyledShadow isOpen={isMobileMenuOpen} onClick={this.handleCloseMenuClick} />
        <Wrapper>
          <LinksWrapper isOpen={isMobileMenuOpen} onClick={this.handleCloseMenuClick}>
            {children}
          </LinksWrapper>
          <MenuButton
            p="12px 24px"
            onOpenMenu={this.handleToggleMenuClicked}
            isActive={isMobileMenuOpen}
          />
        </Wrapper>
      </React.Fragment>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.node
}

NavBar.Link = NavLink

export default NavBar
