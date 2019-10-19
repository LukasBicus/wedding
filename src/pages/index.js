import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { SECTION_ID } from '../constants'
import Hero from '../components/basic/Hero'
import Section from '../components/basic/Section'
import { Text } from '../components/basic/Typography'
import HomeHeadingsMobile from '../components/custom/HomeHeadingsMobile'
import HomeHeadingsDesktop from '../components/custom/HomeHeadingsDesktop'

const IndexPage = ({
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              index: {
                seoTitle,
                brideName,
                groomName,
                date,
                place,
                sections,
                ceremonyTime,
                feastTime,
                askTime
              }
            }
          }
        }
      ]
    }
  }
}) => (
  <Layout seoTitle={seoTitle}>
    <div id={SECTION_ID.HOME} />
    <Hero continueToId={SECTION_ID.PROGRAM}>
      <HomeHeadingsDesktop
        brideName={brideName}
        groomName={groomName}
        date={date}
        ceremonyTime={ceremonyTime}
        place={place}
      />
      <HomeHeadingsMobile
        brideName={brideName}
        groomName={groomName}
        date={date}
        ceremonyTime={ceremonyTime}
        place={place}
      />
    </Hero>
    <Section id={SECTION_ID.PROGRAM} title={sections.program} hasDarkBackground>
      <Text.M>
        <div>{askTime} - odpytávanie</div>
        <div>{ceremonyTime} - svadobný obrad</div>
        <div>{feastTime} - svadobná hostina</div>
      </Text.M>
    </Section>
    <Section id={SECTION_ID.TRANSPORT} title={sections.transport}>
      <Text.M>
        Zabezpečíme dopravu autobusom zo Starej Ľubovne do Krompách. Čas i miesto nástupu upresníme
        a uverejníme (aj) tu.
      </Text.M>
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
              ceremonyTime
              feastTime
              askTime
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
