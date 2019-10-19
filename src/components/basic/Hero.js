import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronCircleDown } from 'react-icons/fa'
import theme from '../../theme'
import { NAVIGATION_HEIGHT } from '../../constants'
import { scrollToElement } from '../../utils'

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const StyledLink = styled.a`
  color: ${theme.colors.WHITE};
  cursor: pointer;
`

const Hero = ({ children, continueToId }) => (
  <Wrapper>
    <ContentWrapper>
      {children}
      <StyledLink
        onClick={() => {
          scrollToElement(continueToId)
        }}
      >
        <FaChevronCircleDown size="3.5rem" color={theme.colors.SEMI_CLOUD_BURST} />
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
