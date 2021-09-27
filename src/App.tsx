import { AppRouter } from './AppRouter'
import { ThemeRoot } from 'components/ThemeRoot'
import { observer } from 'mobx-react-lite'
import { useMediaQuery } from '@react-hook/media-query'
import { ErrorBoundary } from 'components/ErrorBoundary'
import { Notifier } from 'components/Notifier'
import { appConstants } from 'config/constants'
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import { RootStore } from 'stores'
import { checkIsMobileOrTablet } from 'utils/checkIsMobileOrTablet'
import vhCheck from 'vh-check'
import { StoreProvider } from './hooks/useStore'
import { serverErrorMiddleware } from 'middlewares/serverErrorMiddleware'
import { ThemeProvider, connectTheme } from 'hooks/useThemeProvider'
import { MediaQueryProvider } from 'hooks/useMediaQuery'
import { useHighlightOnTabbing } from 'hooks/useHighlightOnTabbing'
import { configure } from 'mobx'
import 'styles/app.module.scss'

vhCheck({
  updateOnTouch: true,
  redefineVh: true,
})

configure({ useProxies: 'never' })

declare global {
  interface Window {
    IS_MOBILE: boolean
  }
}

window.IS_MOBILE = checkIsMobileOrTablet()

// @ts-ignore: Unreachable code error
const context = require.context('./assets/icons', false, /\.svg$/)
// @ts-ignore: Unreachable code error
context.keys().forEach((key) => context(key))

const history = createBrowserHistory()

const isLapBreakpoint = `only screen and (min-width: ${appConstants.APP_MEDIA_BREAKPOINTS.LAP})`
const isToLapBreakpoint = `only screen and (max-width: ${appConstants.APP_MEDIA_BREAKPOINTS.TO_LAP})`
const isHandsBreakpoint = `only screen and (min-width: ${appConstants.APP_MEDIA_BREAKPOINTS.HANDS})`
const isToHandsBreakpoint = `only screen and (max-width: ${appConstants.APP_MEDIA_BREAKPOINTS.TO_HANDS})`
const isDeskBreakpoint = `only screen and (min-width: ${appConstants.APP_MEDIA_BREAKPOINTS.DESK})`
const isToDeskBreakpoint = `only screen and (max-width: ${appConstants.APP_MEDIA_BREAKPOINTS.TO_DESK})`

const logger = {
  log(msg: string) {
    console.log(msg)
  },
}

const rootStore = RootStore.create(
  {},
  {
    logger, // inject logger to the tree
    history,
  }
)

serverErrorMiddleware(rootStore)

if (process.env.NODE_ENV === 'development') {
  import('mobx-devtools-mst').then((module) => {
    const makeInspectable = module.default
    makeInspectable(rootStore)
  })
}

const App = observer(() => {
  useHighlightOnTabbing()
  const theme = connectTheme(appConstants.APP_BASE_THEME)

  const mqs = {
    isLapBreakpoint: useMediaQuery(isLapBreakpoint),
    isToLapBreakpoint: useMediaQuery(isToLapBreakpoint),
    isHandsBreakpoint: useMediaQuery(isHandsBreakpoint),
    isToHandsBreakpoint: useMediaQuery(isToHandsBreakpoint),
    isDeskBreakpoint: useMediaQuery(isDeskBreakpoint),
    isToDeskBreakpoint: useMediaQuery(isToDeskBreakpoint),
  }

  return (
    <ErrorBoundary>
      <MediaQueryProvider value={mqs}>
        <Router history={history}>
          <StoreProvider value={rootStore}>
            <ThemeRoot>
              <ThemeProvider value={theme}>
                <AppRouter />
                <Notifier />
              </ThemeProvider>
            </ThemeRoot>
          </StoreProvider>
        </Router>
      </MediaQueryProvider>
    </ErrorBoundary>
  )
})

export default App
