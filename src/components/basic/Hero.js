import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'
import theme from '../../theme'
import { NAVIGATION_HEIGHT } from '../../constants'

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`

const StyledLink = styled.a`
  color: ${theme.colors.WHITE};
  cursor: pointer;
  position: absolute;
  bottom: 30px;
`

const Hero = ({ children, backgroundImage, continueTo }) => (
  <Wrapper>
    {backgroundImage}
    <ContentWrapper>
      {children}
      <StyledLink href={continueTo}>
        <FaChevronCircleDown size="3.5rem" />
      </StyledLink>
    </ContentWrapper>
  </Wrapper>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.node,
  continueTo: PropTypes.string.isRequired
}

export default Hero
