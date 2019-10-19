import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { H1, H2 } from '../basic/Typography'
import theme from '../../theme'
import fianceInHeart from '../../images/postavicky-v-srdci.svg'

const desktopOnlyStyle = css`
  ${theme.media.mobile`
    display: none;
  `}
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.CLOUD_BURST};
  display: block;
  width: 20%;
  ${desktopOnlyStyle};
`
const StyledH3 = styled(H2)`
  color: ${theme.colors.CLOUD_BURST};
  display: block;
  ${desktopOnlyStyle};
`

const StyledImg = styled.img`
  max-height: 100%;
  height: 100%;
`
const TitlesWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${desktopOnlyStyle};
`

const InfoWrapper = styled.div`
  ${desktopOnlyStyle};
`

const HomeHeadingsDesktop = ({ brideName, groomName, date, place, ceremonyTime }) => (
  <React.Fragment>
    <StyledH3>...ľúbime sa, berieme sa...</StyledH3>
    <TitlesWrapper>
      <StyledH1>{groomName}</StyledH1>
      <StyledImg src={fianceInHeart} alt="Snubenci v srdci" />
      <StyledH1>{brideName}</StyledH1>
    </TitlesWrapper>
    <InfoWrapper>
      <StyledH3>
        {date} o {ceremonyTime}
      </StyledH3>
      <StyledH3>{place}</StyledH3>
    </InfoWrapper>
  </React.Fragment>
)

HomeHeadingsDesktop.propTypes = {
  brideName: PropTypes.string.isRequired,
  groomName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  ceremonyTime: PropTypes.string.isRequired
}

export default HomeHeadingsDesktop
