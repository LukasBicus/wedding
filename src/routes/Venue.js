import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import SinglePageLayout from '../components/SinglePageLayout'
import Title from '../components/custom/Title'
import Measure from '../components/basic/Measure'
import theme from '../theme'
import Description from '../components/custom/Description'

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Venue = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                header {
                  venue
                }
                venue {
                  address
                  mapLink
                  description
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
              frontmatter: { header, venue }
            }
          }
        ]
      }
    }) => (
      <SinglePageLayout seoTitle={venue}>
        <Box>
          <Title>{header.venue}</Title>
          <Description pb={theme.space.SMALL}>{venue.description}</Description>
          <Measure>
            {({ availableHeight, availableWidth }) => (
              <iframe
                title={header.venue}
                style={{ border: 0 }}
                src={venue.mapLink}
                width={availableWidth}
                height={availableHeight}
                frameBorder="0"
                allowFullScreen
              />
            )}
          </Measure>
        </Box>
      </SinglePageLayout>
    )}
  />
)

export default Venue
