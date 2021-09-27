import { createContext, useContext } from 'react'

export type TMediaQueryProvider = {
  isLapBreakpoint: boolean
  isToLapBreakpoint: boolean
  isHandsBreakpoint: boolean
  isToHandsBreakpoint: boolean
  isDeskBreakpoint: boolean
  isToDeskBreakpoint: boolean
}

export const MediaQueryContext = createContext<TMediaQueryProvider>(
  {} as TMediaQueryProvider
)
export const useMediaQuery = () => useContext(MediaQueryContext)
export const MediaQueryProvider = MediaQueryContext.Provider
