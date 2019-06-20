import styled from 'styled-components'
import { H2 } from '../basic/Typography'
import theme from '../../theme'

const Title = styled(H2)`
  color: ${theme.colors.TURKISH_ROSE};
  ${theme.media.mobile`
    padding-bottom: 12px;
  `};
  ${theme.media.desktop`
    padding: 24px 0;
  `}
`
export default Title
