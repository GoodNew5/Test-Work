import React from 'react'
import { AppErrorDisclaimer } from 'components/AppErrorDisclaimer'
// import { errorReporter } from 'services/errorReporter'

/**
 * There are no Hook equivalent to the uncommon componentDidCatch lifecycle yet
 * https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes
*/

interface IErrorBoundaryState {
  readonly hasError: boolean
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    /* Update state so the next render will show the fallback UI. */
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: any) {
    // TODO: add error reports sending
    // errorReporter.report(error, info)
    console.error(error)
    console.log(info)
  }

  render() {
    const {
      children,
    } = this.props

    if (this?.state?.hasError) {
      return (
        <AppErrorDisclaimer />
      )
    }

    return children
  }
}

export {
  ErrorBoundary,
}
