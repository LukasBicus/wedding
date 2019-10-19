import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import ExternalLink from '../basic/ExternalLink'

const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
  text-align: center;
  flex-shrink: 0;
  flex-grow: 0;
`

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                aboutSite {
                  author
                  year
                  linkToAuthor
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
                aboutSite: { author, year, linkToAuthor }
              }
            }
          }
        ]
      }
    }) => (
      <StyledFooter>
        <ExternalLink to={linkToAuthor}>{`${year}, ${author}`}</ExternalLink>
      </StyledFooter>
    )}
  />
)

export default Footer
