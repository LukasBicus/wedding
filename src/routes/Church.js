import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SinglePageLayout from '../components/SinglePageLayout'
import { Text } from '../components/basic/Typography'
import Measure from '../components/basic/Measure'
import Title from '../components/custom/Title'
import theme from '../theme'

const { SMALL } = theme.space

const Church = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                header {
                  church
                }
                church {
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
              frontmatter: { header, church }
            }
          }
        ]
      }
    }) => (
      <SinglePageLayout seoTitle={header.church}>
        <Title pl={SMALL}>{header.church}</Title>
        <Text.M p={`0 ${SMALL} ${SMALL} ${SMALL}`}>{church.description}</Text.M>
        <Measure>
          {({ availableHeight, availableWidth }) => (
            <iframe
              title={header.church}
              style={{ border: 0 }}
              src={church.mapLink}
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

export default Church
