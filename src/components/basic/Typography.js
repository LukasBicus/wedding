import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'

const defaultTextConfig = {
  fontFamily: theme.fontFamily.AMATIC_SC,
  tagName: 'span',
  fontSizeDesktop: theme.fontSize.M,
  fontSizeMobile: theme.fontSize.M
}

const createText = ({ fontFamily, tagName, fontSizeDesktop, fontSizeMobile }) => styled(tagName)`
  display: inline-block;
  font-family: ${fontFamily};
  font-size: ${fontSizeDesktop}em;
  ${theme.media.mobile`
    font-size: ${fontSizeMobile}em;
  `};
  font-weight: ${({ isBold }) => (isBold ? 400 : 200)};
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
