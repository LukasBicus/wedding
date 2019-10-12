import styled from 'styled-components'
import { H2 } from '../basic/Typography'
import theme from '../../theme'

const Title = styled(H2)`
  color: ${theme.colors.TURKISH_ROSE};
  ${theme.media.mobile`
    padding-bottom: ${theme.space.SMALL};
    padding-top: ${theme.space.SMALL};
  `};
  ${theme.media.desktop`
    padding-top: ${theme.space.BIG};
    padding-bottom: ${theme.space.BIG};
  `}
`
export default Title
