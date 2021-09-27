import appBreakpoints from 'styles/breakpoints.module.scss'

const appConstants = {
  ROUTES: { HOME_PATH: '/' },
  APP_BASE_THEME: 'APP_BASE_THEME',
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  TOKEN_STORAGE_KEY: 'access_token',
  APP_MEDIA_BREAKPOINTS: appBreakpoints,
}

export { appConstants }
