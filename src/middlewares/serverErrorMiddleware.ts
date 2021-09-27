import { addMiddleware } from 'mobx-state-tree'
import { toast } from 'react-toastify'

export const serverErrorMiddleware = <T extends Object, F extends Function>(
  rootStore: T,
  clearSession?: F
) => {
  addMiddleware(rootStore, (call, next) => {
    if (call.type === 'flow_throw') {
      const err = call.args

      console.error(err.toString().toUpperCase())

      if (err.length) {
        try {
          const { response } = err[0]
          const { data, status } = response

          if (process.env.NODE_ENV === 'development') {
            if (data.exception === 'Error') {
              toast.error(`BACKEND EXCEPTION: ${data.message}`, {
                position: toast.POSITION.BOTTOM_CENTER,
              })

              return next(call)
            }

            if (data.exception === 'TypeError') {
              toast.error(`BACKEND EXCEPTION: ${data.message}`, {
                position: toast.POSITION.BOTTOM_CENTER,
              })

              return next(call)
            }
          }

          switch (data.error.code) {
            case 2012:
              toast.error('Вы ввели неверный пароль', {
                position: toast.POSITION.BOTTOM_CENTER,
              })

              break

            default:
              if (status !== 401) {
                toast.error(data.error.message, {
                  position: toast.POSITION.BOTTOM_CENTER,
                })
              }

              break
          }

          switch (true) {
            case status >= 500:
              toast.error('Произошла ошибка 🤷🏻‍♂️', {
                position: toast.POSITION.BOTTOM_CENTER,
              })

              break
            case status === 401:
              /**
               * handle unauthenticated session
               */

              if (clearSession) {
                clearSession()
              }

              break

            case status === 413:
              toast.error('Что-то пошло не так 🤷🏻‍♂️', {
                position: toast.POSITION.BOTTOM_CENTER,
              })

              break

            default:
              break
          }
        } catch (error) {
          console.error(error)
        }
      }
    }

    next(call)
  })
}
