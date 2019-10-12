import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import SinglePageLayout from '../components/SinglePageLayout'
import { Text } from '../components/basic/Typography'
import Measure from '../components/basic/Measure'
import Title from '../components/custom/Title'
import theme from '../theme'

const { SMALL } = theme.space

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
          <Title pl={SMALL}>{header.venue}</Title>
          <Text.S p={`0 ${SMALL} ${SMALL} ${SMALL}`}>{venue.description}</Text.S>
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