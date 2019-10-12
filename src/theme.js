import { css } from 'styled-components'

export const MOBILE_THRESHOLD = 736

export default {
  colors: {
    ALBESCENT_WHITE: '#f6e7d4', // pozadie
    BRIDESMAID: '#feede5', // pozadie
    TURKISH_ROSE: '#b06e8a',
    VIOLA: '#c88eaa',
    WHITE: '#FFFFFF'
  },
  shadow: {
    BOTTOM: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
  },
  fontFamily: {
    RALEWAY: 'Raleway, sans-serif'
  },
  fontSize: {
    H1: 64,
    H2: 36,
    H3: 24,
    M: 18,
    S: 15
  },
  space: {
    SMALL: '12px',
    NORMAL: '16px',
    BIG: '24px'
  },
  media: {
    mobile: (...args) =>
      css`
        @media (max-width: ${MOBILE_THRESHOLD}px) {
          ${css(...args)}
        }
      `,
    desktop: (...args) =>
      css`
        @media (min-width: ${MOBILE_THRESHOLD + 1}px) {
          ${css(...args)}
        }
      `
  }
}
