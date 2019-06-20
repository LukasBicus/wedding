import styled from 'styled-components'

const SinglePageSection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`
const Body = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`

SinglePageSection.Body = Body

export default SinglePageSection
