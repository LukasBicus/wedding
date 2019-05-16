export const NAVIGATION_HEIGHT = 45

export const SECTION_ID = {
  HOME: 'domov',
  PROGRAM: 'program',
  VENUE: 'venue',
  CHURCH: 'kostol',
  ACCOMMODATION: 'ubytovanie'
}

export const routes = {
  HOME: '/',
  PROGRAM: `/#${SECTION_ID.PROGRAM}`,
  VENUE: `/#${SECTION_ID.VENUE}`,
  CHURCH: `/#${SECTION_ID.CHURCH}`,
  ACCOMMODATION: `/#${SECTION_ID.ACCOMMODATION}`
}
