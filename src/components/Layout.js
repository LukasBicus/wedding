import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './custom/Header'
import Seo from './Seo'
import Footer from './custom/Footer'
import papyrus from '../images/papyrus.png'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background: url(${papyrus}) repeat;
`

const Main = styled.main`
  overflow-y: auto;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
`
const ChildrenWrapper = styled.div`
  flex-grow: 1;
`

const Layout = ({ seoTitle, children }) => (
  <Wrapper>
    <Seo title={seoTitle} />
    <Header />
    <Main>
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </Main>
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string.isRequired
}

export default Layout
