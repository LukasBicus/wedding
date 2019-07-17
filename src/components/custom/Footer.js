import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import ExternalLink from '../basic/ExternalLink'
import theme from '../../theme'

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
