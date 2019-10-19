import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SinglePageLayout from '../components/SinglePageLayout'
import { Text } from '../components/basic/Typography'
import Measure from '../components/basic/Measure'
import Title from '../components/custom/Title'
import theme from '../theme'

const { SMALL } = theme.space

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
      <SinglePageLayout seoTitle={header.venue}>
        <Title pl={SMALL}>{header.venue}</Title>
        <Text.M p={`0 ${SMALL} ${SMALL} ${SMALL}`}>{venue.description}</Text.M>
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
      </SinglePageLayout>
    )}
  />
)

export default Venue
