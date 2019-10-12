import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NavBar from '../basic/NavBar'
import NavLink from './NavLink'
import { routes } from '../../constants'

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                header {
                  home
                  program
                  venue
                  church
                  transport
                }
              }
            }
          }
        }
      }
    `}
    render={({
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                header: { home, program, venue, church, transport }
              }
            }
          }
        ]
      }
    }) => (
      <NavBar>
        <NavLink toLink={routes.HOME}>{home}</NavLink>
        <NavLink toLink={routes.PROGRAM}>{program}</NavLink>
        <NavLink toLink={routes.VENUE}>{venue}</NavLink>
        <NavLink toLink={routes.CHURCH}>{church}</NavLink>
        <NavLink toLink={routes.TRANSPORT}>{transport}</NavLink>
      </NavBar>
    )}
  />
)

export default Header
