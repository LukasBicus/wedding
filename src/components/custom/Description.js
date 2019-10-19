import styled from 'styled-components'
import { Text } from '../basic/Typography'
import theme from '../../theme'

const { SMALL, BIG } = theme.space

const Description = styled(Text.M)`
  ${theme.media.mobile`
    padding-left: ${SMALL};
    padding-right: ${SMALL};
  `};
  ${theme.media.desktop`
    padding-left: ${BIG};
    padding-right: ${BIG};
  `}
`
export default Description
