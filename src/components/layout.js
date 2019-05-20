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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <StyledFooter>
          <ExternalLink to="https://github.com/LukasBicus">2019, Lukáš Bičuš</ExternalLink>
        </StyledFooter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
