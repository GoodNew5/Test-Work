import { createContext, useContext, useState } from 'react'

interface IUseTheme {
  currentTheme: string
  toggleTheme: (theme: string) => void
  removeTheme: (theme: string) => void
}

const useThemeProvider = (initialTheme: string) => {
  const [currentTheme, set] = useState(initialTheme)

  const toggleTheme = (theme: string) => {
    if (!document.documentElement.classList.contains(theme)) {
      document.documentElement.classList.add(theme)
      set(theme)
    } else {
      set('')
      document.documentElement.classList.remove(theme)
    }
  }

  const removeTheme = (theme: string) => {
    if (document.documentElement.classList.contains(theme)) {
      document.documentElement.classList.remove(theme)
    }
  }

  if (currentTheme.length) {
    document.documentElement.classList.add(currentTheme)
  }

  return { currentTheme, toggleTheme, removeTheme }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const connectTheme = (themeName: string) => useThemeProvider(themeName)
export const ThemeContext = createContext<IUseTheme>({} as IUseTheme)
export const useTheme = () => useContext(ThemeContext)
export const ThemeProvider = ThemeContext.Provider
export { useThemeProvider }
