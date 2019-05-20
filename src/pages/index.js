import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { SECTION_ID } from '../constants'
import Hero from '../components/basic/Hero'
import Section from '../components/basic/Section'
import BackgroundImage from '../components/basic/BackgroundImage'
import { H1, H3 } from '../components/basic/Typography'
import theme from '../theme'

const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE};
`
const StyledH3 = styled(H3)`
  color: ${theme.colors.WHITE};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['lukas bicus', 'janka kolesarova', 'svadba']} />
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
      <StyledH1>Janka Kolesárová</StyledH1>
      <StyledH1> & </StyledH1>
      <StyledH1>Lukáš Bičuš</StyledH1>
      <StyledH3>22.2.2020</StyledH3>
      <StyledH3>Krompachy</StyledH3>
    </Hero>
    <Section id={SECTION_ID.PROGRAM} title="Program" hasDarkBackground>
      <div>Cas: Aktivita: Miesto</div>
      <div>Cas: Aktivita: Miesto</div>
      <div>Cas: Aktivita: Miesto</div>
      <div>Cas: Aktivita: Miesto</div>
    </Section>
    <Section id={SECTION_ID.VENUE} title="Melodia">
      nieco o melodii
    </Section>
    <Section id={SECTION_ID.CHURCH} title="Kostol" hasDarkBackground>
      nieco o kostole
    </Section>
    <Section id={SECTION_ID.ACCOMMODATION} title="Ubytovanie">
      nieco o ubytovanie
    </Section>
    <Section id={SECTION_ID.TRANSPORT} title="Doprava" hasDarkBackground>
      nieco o doprave
    </Section>
    <Section id={SECTION_ID.SEATING_PLAN} title="Zasadaci poriadok">
      nieco o zasadacom poriadku
    </Section>
  </Layout>
)

export default IndexPage
