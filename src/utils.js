import { MOBILE_THRESHOLD } from './theme'

const globalNavigator = typeof navigator !== 'undefined' ? navigator : {}

export const getIsOnline = () => globalNavigator.onLine

const globalWindow = typeof window !== 'undefined' ? window : {}
const globalDocument = typeof document !== 'undefined'
  ? document
  : {
    documentElement: {},
    body: {}
  }
export const getWindowWidth = () =>
  globalDocument.documentElement.clientWidth
  || globalDocument.body.clientWidth
  || globalWindow.innerWidth
export const getIsMobile = () => getWindowWidth() <= MOBILE_THRESHOLD
