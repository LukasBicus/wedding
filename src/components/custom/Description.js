import styled from 'styled-components'
import { Text } from '../basic/Typography'
import theme from '../../theme'

const { SMALL, BIG } = theme.space

const Description = styled(Text.S)`
  ${theme.media.mobile`
    padding: 0 ${SMALL} ${SMALL} ${SMALL}; 
  `};
  ${theme.media.desktop`
    padding: 0 ${BIG};
  `}
`
export default Description
