import { RouterScrollRestoration } from 'components/RouterScrollRestoration'
import { APP_ROUTES } from 'config'
import { observer } from 'mobx-react-lite'
import { Route, Switch, useLocation } from 'react-router-dom'

const AppRouter = observer(() => {
  const { pathname } = useLocation()
  return (
    <>
      <Switch>
        {APP_ROUTES.map((item, idx) => (
          <Route key={idx} path={item.path} exact={item.exact} render={() => item.page} />
        ))}
      </Switch>

      <RouterScrollRestoration pathname={pathname} />
    </>
  )
})

export { AppRouter }
