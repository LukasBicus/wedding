import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { SECTION_ID } from '../constants'
import Hero from '../components/basic/Hero'
import Section from '../components/basic/Section'
import fianceInHeart from '../images/postavicky-v-srdci.svg'
import { H1, H3, Text } from '../components/basic/Typography'
import theme from '../theme'

const StyledImg = styled.img`
  display: block;
  width: 40%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.CLOUD_BURST};
`
const StyledH3 = styled(H3)`
  color: ${theme.colors.CLOUD_BURST};
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
      backgroundImage={<StyledImg src={fianceInHeart} alt="Snubenci v srdci" />}
    >
      <StyledH1>{brideName}</StyledH1>
      <StyledH1> & </StyledH1>
      <StyledH1>{groomName}</StyledH1>
      <StyledH3>{date}</StyledH3>
      <BottomH3>{place}</BottomH3>
    </Hero>
    <Section id={SECTION_ID.PROGRAM} title={sections.program} hasDarkBackground>
      <Text.S>
        <div>14:15 - odpytávanie</div>
        <div>15:00 - svadobný obrad</div>
        <div>okolo 16:30 - svadobná hostina</div>
      </Text.S>
    </Section>
    <Section id={SECTION_ID.TRANSPORT} title={sections.transport}>
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
