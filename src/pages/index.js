import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { SECTION_ID } from '../constants'
import Hero from '../components/basic/Hero'
import Section from '../components/basic/Section'
import BackgroundImage from '../components/basic/BackgroundImage'
import { H1, H3, Text } from '../components/basic/Typography'
import theme from '../theme'

const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.TURKISH_ROSE};
`
const StyledH3 = styled(H3)`
  color: ${theme.colors.TURKISH_ROSE};
`
const BottomH3 = styled(StyledH3)`
  padding-bottom: 15rem;
`

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              index: { seoTitle, brideName, groomName, date, place, sections }
            }
          }
        }
      ]
    }
  }
}) => (
  <Layout seoTitle={seoTitle}>
    <div id={SECTION_ID.HOME} />
    <Hero
      continueToId={SECTION_ID.PROGRAM}
      backgroundImage={
        <BackgroundImage
          render={data => (
            <StyledImg
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{
                position: 'absolute',
                top: 0
              }}
            />
          )}
        />
      }
    >
      <StyledH1>{brideName}</StyledH1>
      <StyledH1> & </StyledH1>
      <StyledH1>{groomName}</StyledH1>
      <StyledH3>{date}</StyledH3>
      <BottomH3>{place}</BottomH3>
    </Hero>
    <Section id={SECTION_ID.PROGRAM} title={sections.program}>
      <Text.S>
        <div>14:15 - odpytávanie</div>
        <div>15:00 - svadobný obrad</div>
        <div>okolo 16:30 - svadobná hostina</div>
      </Text.S>
    </Section>
    <Section id={SECTION_ID.TRANSPORT} title={sections.transport} hasDarkBackground>
      <Text.S>
        Zabezpečíme dopravu autobusom zo Starej Ľubovne do Krompach. Čas i miesto nástupu upresníme
        a uverejníme (aj) tu.
      </Text.S>
    </Section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            index {
              seoTitle
              brideName
              groomName
              date
              place
              sections {
                program
                transport
              }
            }
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.object
}

export default IndexPage
