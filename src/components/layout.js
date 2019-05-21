/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './custom/Header'
import ExternalLink from './basic/ExternalLink'
import theme from '../theme'
import { H1 } from './basic/Typography'

const StyledFooter = styled.footer`
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
  overflow-y: auto;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
`
const ChildrenWrapper = styled.div`
  flex-grow: 1;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
        <Main>
          <ChildrenWrapper>
            {children}
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <div>
              <H1>
                janko
              </H1>
            </div>
            <H1>
              janko
            </H1>
            <H1>
              janko
            </H1>

          </ChildrenWrapper>
          <StyledFooter>
            <ExternalLink to="https://github.com/LukasBicus">2019, Lukáš Bičuš</ExternalLink>
          </StyledFooter>
        </Main>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
