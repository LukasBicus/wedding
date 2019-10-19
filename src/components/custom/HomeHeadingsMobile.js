import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1, H2 } from '../basic/Typography'
import theme from '../../theme'
import fianceInHeart from '../../images/postavicky-v-srdci.svg'

const StyledH1 = styled(H1)`
  color: ${theme.colors.CLOUD_BURST};
  display: block;
`
const StyledH3 = styled(H2)`
  color: ${theme.colors.CLOUD_BURST};
  display: block;
`

const StyledImg = styled.img`
  display: block;
  background-repeat: no-repeat;
  height: 30%;
`

const HomeHeadingsMobile = ({
  brideName,
  groomName,
  date,
  place,
  ceremonyTime
}) =>
  <React.Fragment>
    <div>
      <StyledH1 paddingTop="4rem">{brideName}</StyledH1>
      <StyledH1> & </StyledH1>
      <StyledH1>{groomName}</StyledH1>
    </div>
    <StyledImg src={fianceInHeart} alt="Snubenci v srdci" />
    <div>
      <StyledH3>{date} o {ceremonyTime}</StyledH3>
      <StyledH3>{place}</StyledH3>
    </div>
  </React.Fragment>

HomeHeadingsMobile.propTypes = {
  brideName: PropTypes.string.isRequired,
  groomName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  ceremonyTime: PropTypes.string.isRequired
}

export default HomeHeadingsMobile
