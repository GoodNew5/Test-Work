import React, { Suspense } from 'react'
import { appConstants } from 'config/constants'
import { Spinner } from 'components/Spinner'

const NotFoundPage = React.lazy(() =>
  import('pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  }))
)

const UsersPage = React.lazy(() =>
  import('pages/UsersPage').then((module) => ({
    default: module.UsersPage,
  }))
)

const APP_ROUTES = [
  {
    page: (
      <Suspense fallback={<Spinner />}>
        <UsersPage />
      </Suspense>
    ),
    isPrivate: false,
    exact: true,
    path: appConstants.ROUTES.HOME_PATH,
  },
  {
    page: (
      <Suspense fallback={<Spinner />}>
        <NotFoundPage />
      </Suspense>
    ),
    isPrivate: false,
    exact: false,
    path: '*',
  },
]

export { APP_ROUTES }
