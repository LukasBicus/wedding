import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './custom/Header'
import Seo from './Seo'
import Footer from './custom/Footer'
import GlobalStyle from './GlobalStyles'
import { NAVIGATION_HEIGHT } from '../constants'

const Wrapper = styled.div`
  height: 100vh;
  padding-top: ${NAVIGATION_HEIGHT}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

const Main = styled.main`
  overflow-y: hidden;
  width: 100%;
  flex-grow: 1;
`

const SinglePageLayout = ({ seoTitle, children }) => (
  <Wrapper>
    <Seo title={seoTitle} />
    <GlobalStyle />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
)

SinglePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired
}

export default SinglePageLayout
