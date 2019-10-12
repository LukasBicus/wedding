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
          <Title>{header.church}</Title>
          <Description pb={theme.space.SMALL}>{church.description}</Description>
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
