import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './custom/Header'
import ExternalLink from './basic/ExternalLink'
import theme from '../theme'

const StyledFooter = styled.footer`
  flex: 0 0 auto;
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
  text-align: center;
  ${theme.media.mobile`
    flex-direction: column;
  `};
`

const Wrapper = styled.div`
  height: 100vh;
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

const SinglePageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SinglePageLayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <StyledFooter>
          <ExternalLink to="https://github.com/LukasBicus">2019, Lukáš Bičuš</ExternalLink>
        </StyledFooter>
      </Wrapper>
    )}
  />
)

SinglePageLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SinglePageLayout
