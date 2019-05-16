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
import { Text } from './basic/Typography'

const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
  text-align: center;
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
          <Text.S>
            © {new Date().getFullYear()}, vytvoril <a href="https://www.gatsbyjs.org">Lukáš Bičuš</a>
          </Text.S>
        </StyledFooter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
