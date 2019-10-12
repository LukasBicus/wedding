import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'

const defaultTextConfig = {
  fontFamily: theme.fontFamily.RALEWAY,
  tagName: 'span',
  fontSize: theme.fontSize.M
}

const createText = ({ fontFamily, tagName, fontSizeDesktop, fontSizeMobile }) => styled(tagName)`
  display: inline-block;
  font-family: ${fontFamily};
  font-size: ${fontSizeDesktop}px;
  ${theme.media.mobile`
    font-size: ${fontSizeMobile}px;
  `};
  font-weight: ${({ isBold }) => (isBold ? 400 : 100)};
  ${space}
`

export const Text = {
  M: createText(defaultTextConfig),
  S: createText({
    ...defaultTextConfig,
    fontSizeDesktop: theme.fontSize.S,
    fontSizeMobile: theme.fontSize.S
  })
}

export const H1 = createText({
  ...defaultTextConfig,
  tagName: 'h1',
  fontSizeDesktop: theme.fontSize.H1,
  fontSizeMobile: theme.fontSize.H2
})
export const H2 = createText({
  ...defaultTextConfig,
  tagName: 'h1',
  fontSizeDesktop: theme.fontSize.H2,
  fontSizeMobile: theme.fontSize.H3
})

export const H3 = createText({
  ...defaultTextConfig,
  tagName: 'h3',
  fontSizeDesktop: theme.fontSize.H3,
  fontSizeMobile: theme.fontSize.M
})
