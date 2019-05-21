import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { routes, SECTION_ID } from '../constants'
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['lukas bicus', 'janka kolesarova', 'svadba']} />
    <div id={SECTION_ID.HOME} />
    <Hero
      continueTo={routes.PROGRAM}
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
      <BottomH3>Krompachy</BottomH3>
    </Hero>
    <Section id={SECTION_ID.PROGRAM} title="Program" hasDarkBackground>
      <Text.S>
        <div>Cas: Aktivita: Miesto</div>
        <div>Cas: Aktivita: Miesto</div>
        <div>Cas: Aktivita: Miesto</div>
        <div>Cas: Aktivita: Miesto</div>
      </Text.S>
    </Section>
    <Section id={SECTION_ID.VENUE} title="Melodia">
      <Text.S>nieco o melodii</Text.S>
    </Section>
    <Section id={SECTION_ID.CHURCH} title="Kostol" hasDarkBackground>
      <Text.S>nieco o kostole</Text.S>
    </Section>
    <Section id={SECTION_ID.ACCOMMODATION} title="Ubytovanie">
      <Text.S>nieco o ubytovanie</Text.S>
    </Section>
    <Section id={SECTION_ID.TRANSPORT} title="Doprava" hasDarkBackground>
      <Text.S>nieco o doprave</Text.S>
    </Section>
    <Section id={SECTION_ID.SEATING_PLAN} title="Zasadaci poriadok">
      <Text.S>nieco o zasadacom poriadku</Text.S>
    </Section>
  </Layout>
)

export default IndexPage
