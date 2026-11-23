import Vue from 'vue'
import light from './light.ts'
import dark from './dark.ts'

// Shared light/dark theme state, used by every page.
export const themeStore = Vue.observable({
  dark: false
})

// The light/dark pair in use. Pages can swap in their own pair (e.g. /robotaxi).
let themes = { light, dark }
export const useThemes = (pair) => { themes = pair }

// Hack until createGlobalStyles comes to vue-styled-components
export const applyTheme = (theme) => {
  document.documentElement.style.setProperty("--main-color", theme.color.text)
  document.documentElement.style.setProperty("--main-background-color", theme.color.background)
  document.documentElement.style.setProperty("--fallback-background-color", theme.color.fallbackBackground)
  document.documentElement.style.setProperty("--link-color", theme.color.link)
}

export const adjustTheme = () => applyTheme(themeStore.dark ? themes.dark : themes.light)

// Remember the visitor's choice across pages and visits.
// Storage can be unavailable (private mode, blocked cookies), so fail quietly.
const STORAGE_KEY = 'mv-theme'
const savedTheme = () => {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch (e) {
    return null
  }
}
const saveTheme = (value) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch (e) {
    // ignore
  }
}

export const toggleDark = () => {
  themeStore.dark = !themeStore.dark
  saveTheme(themeStore.dark ? 'dark' : 'light')
  adjustTheme()
}

export const currentTheme = () => (themeStore.dark ? themes.dark : themes.light)

export const setupTheme = () => {
  if (window.matchMedia) {
    try {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // A saved choice wins over the system setting
        if (savedTheme()) return
        themeStore.dark = e.matches
        adjustTheme()
      })
    } catch(e) {
      console.error(e)
    }
  }

  const saved = savedTheme()
  themeStore.dark = saved
    ? saved === 'dark'
    : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  adjustTheme()

  var html = document.getElementsByTagName('html')[0]
  html.style.setProperty("transition", "0.3s color, 0.3s background")
  var body = document.getElementsByTagName('body')[0]
  body.style.setProperty("transition", "0.3s color, 0.3s background")
}
