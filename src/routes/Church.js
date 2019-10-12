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
      <SinglePageLayout seoTitle={church}>
        <Box>
          <Title pl={SMALL}>{header.church}</Title>
          <Text.S p={`0 ${SMALL} ${SMALL} ${SMALL}`}>{church.description}</Text.S>
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
        </Box>
      </SinglePageLayout>
    )}
  />
)

export default Church
