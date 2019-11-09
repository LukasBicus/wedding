import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './Typography'
import theme from '../../theme'

const StyledAnchor = styled.a`
  text-decoration: underline;
`

const ExternalLink = ({ to, children, textComp: TextComp, ...props }) => (
  <StyledAnchor href={to} target="_blank" rel="noreferrer noopener">
    <TextComp isBold color={theme.colors.CLOUD_BURST} {...props}>
      {children}
    </TextComp>
  </StyledAnchor>
)

ExternalLink.defaultProps = {
  textComp: Text.M
}

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  textComp: PropTypes.object
}

export default ExternalLink
