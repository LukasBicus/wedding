import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'
import theme from '../../theme'
import { scrollToElement } from '../../utils'

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`

const StyledLink = styled.a`
  color: ${theme.colors.WHITE};
  cursor: pointer;
  ${theme.media.desktop`
    position: absolute;
    bottom: 30px;
  `}
  ${theme.media.mobile`
    margin-top: 30px;
  `}
`

const Hero = ({ children, backgroundImage, continueToId }) => (
  <Wrapper>
    {backgroundImage}
    <ContentWrapper>
      {children}
      <StyledLink
        onClick={() => {
          scrollToElement(continueToId)
        }}
      >
        <FaChevronCircleDown size="3.5rem" />
      </StyledLink>
    </ContentWrapper>
  </Wrapper>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.node,
  continueToId: PropTypes.string.isRequired
}

export default Hero