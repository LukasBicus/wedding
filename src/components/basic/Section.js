import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import Title from '../custom/Title'

const { SMALL, BIG } = theme.space

const Wrapper = styled.div`
  background: ${({ hasDarkBackground }) =>
    hasDarkBackground ? theme.colors.BRIDESMAID : 'transparent'};
  position: relative;
  ${theme.media.mobile`
    padding: 0 ${SMALL} ${SMALL} ${SMALL};
  `};
  ${theme.media.desktop`
    text-align: center;
    padding-bottom: ${BIG};
  `}
  ${space}
`

const Section = ({ id, title, children, hasDarkBackground, ...props }) => (
  <Wrapper id={id} hasDarkBackground={hasDarkBackground} {...props}>
    {title && <Title>{title}</Title>}
    <div>{children}</div>
  </Wrapper>
)

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  hasDarkBackground: PropTypes.bool,
  children: PropTypes.node,
  ...space.props
}

export default Section
