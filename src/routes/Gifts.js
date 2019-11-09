import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Text } from '../components/basic/Typography'
import ExternalLink from '../components/basic/ExternalLink'
import Section from '../components/basic/Section'
import SinglePageLayout from '../components/SinglePageLayout'

const StyledSection = styled(Section)`
  flex-grow: 1;
`

const Gifts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                header {
                  gifts
                }
                gifts {
                  description
                  link
                  linkText
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
              frontmatter: { header, gifts }
            }
          }
        ]
      }
    }) => (
      <SinglePageLayout seoTitle={header.gifts}>
        <StyledSection title={header.gifts}>
          <Text.M>{gifts.description}</Text.M>
          <br />
          <ExternalLink to={gifts.link}>{gifts.linkText}</ExternalLink>
        </StyledSection>
      </SinglePageLayout>
    )}
  />
)

export default Gifts
