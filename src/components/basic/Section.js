import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import Title from '../custom/Title'

const Wrapper = styled.div`
  background: ${({ hasDarkBackground }) =>
    hasDarkBackground ? theme.colors.BRIDESMAID : theme.colors.WHITE};
  position: relative;
  ${theme.media.mobile`
    padding: 12px
  `};
  ${theme.media.desktop`
    text-align: center;
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
