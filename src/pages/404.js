import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import GlobalStyle from '../components/GlobalStyles'
import { H1, Text } from '../components/basic/Typography'
import theme from '../theme'

const StyledH1 = styled(H1)`
  color: ${theme.colors.CLOUD_BURST};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const NotFoundPage = () => (
  <Layout seoTitle="Not found">
    <Seo title="404: Not found" />
    <GlobalStyle />
    <Wrapper>
      <StyledH1>TU NIČ NIE JE</StyledH1>
      <Text.M>Práve si sa dostal na miesto, kde nič nie je... Bohužiaľ.</Text.M>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
