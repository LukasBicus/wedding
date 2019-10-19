import { css } from 'styled-components'

export const MOBILE_THRESHOLD = 736

export default {
  colors: {
    TURKISH_ROSE: '#b06e8a',
    CLOUD_BURST: '#232959',
    SEMI_CLOUD_BURST: '#23295926',
    WHITE: '#FFFFFF'
  },
  shadow: {
    BOTTOM: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)'
  },
  fontFamily: {
    AMATIC_SC: 'Amatic SC, cursive'
  },
  fontSize: {
    H1: 4.6,
    H2: 2.6,
    H3: 1.7,
    M: 1.4,
    S: 1
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
