import styled from 'styled-components'
import { H2 } from '../basic/Typography'
import theme from '../../theme'

const { SMALL, BIG } = theme.space

const Title = styled(H2)`
  color: ${theme.colors.TURKISH_ROSE};
  ${theme.media.mobile`
    padding: ${SMALL};
  `};
  ${theme.media.desktop`
    padding: ${BIG};
  `}
`
export default Title
