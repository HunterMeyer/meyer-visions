<template>
  <theme-provider :theme="theme">
    <hero
      :author="author"
      :subtitle="hero.subtitle"
      :description="hero.description"
      :cta="hero.cta"
    />
    <card-container id="companies">
      <card
        v-for="(product, index) in companies.featured"
        :key="index"
        :name="product.name"
        :medium="product.medium"
        :summary="product.summary"
        :copy="product.copy"
        :links="product.links"
        :images="product.images"
      />
      <minor-card-container>
        <minor-card
          v-for="(product, index) in companies.minor && companies.minor.slice(0,3)"
          :key="index"
          :name="product.name"
          :description="product.description"
          :link="product.link"
        />
      </minor-card-container>
    </card-container>
    <quote
      :quote="quote.text"
      :authors="quote.authors"
      :authorTitle="quote.authorTitle"
    />
    <foot :footer="footer" />
    <light-toggle @click="toggleTheme()" title="Toggle theme">
      <span v-if="!isDark" >
        <i class="fas fa-moon" style="color:#000;"></i>
      </span>
      <span v-if="isDark">
        <i class="fas fa-sun" style="color:#fff;"></i>
      </span>
    </light-toggle>
  </theme-provider>
</template>

<script>
import Vue from 'vue'
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import MinorCard from './components/MinorCard.vue'
import Quote from './components/Quote.vue'
import Foot from './components/Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import baseData from './data/fixtures.ts'
import light from './themes/light.ts'
import dark from './themes/dark.ts'

const localStore = Vue.observable({
  dark: false
})

const mutations = {
  toggleDark() {
    localStore.dark = !localStore.dark
  },
  setDark(isDark) {
    localStore.dark = isDark
  }
}

// Hack until createGlobalStyles comes to vue-styled-components
const adjustTheme = () => {
  if (localStore.dark) {
    document.documentElement.style.setProperty("--main-color", dark.color.text)
    document.documentElement.style.setProperty("--main-background-color", dark.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", dark.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", dark.color.link)
  } else {
    document.documentElement.style.setProperty("--main-color", light.color.text)
    document.documentElement.style.setProperty("--main-background-color", light.color.background)
    document.documentElement.style.setProperty("--fallback-background-color", light.color.fallbackBackground)
    document.documentElement.style.setProperty("--link-color", light.color.link)
  }
}

if (window.matchMedia) {
  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if(e.matches) {
          localStore.dark = true
        } else {
          localStore.dark = false
        }
        adjustTheme()
    })
  } catch(e) {
    console.error(e)
  }
}

const setup = () => {
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStore.dark = true
  } else {
    localStore.dark = false
  }
  adjustTheme()

  var html = document.getElementsByTagName('html')[0]
  html.style.setProperty("transition", "0.3s color, 0.3s background")
  var body = document.getElementsByTagName('body')[0]
  body.style.setProperty("transition", "0.3s color, 0.3s background")
}

injectGlobal`
  html {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    position: relative;
  }
`

const CardContainer = styled.div`
  margin-top: -60px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    margin-top: -48px;
  }
`

const MinorCardContainer = styled.div`
  margin: auto;
  margin-bottom: 80px;
  width: ${({theme}) => theme.screen.width.desktop}px;
  display: flex;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile}px;
    flex-direction: column;
  }
  & > * {
    margin: 16px;
  }
  & > *:nth-child(3n+1) {
    margin-left: 0px;
  }
  & > *:nth-child(3n+0) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    & > * {
      margin: 16px 0px;
    & > *:nth-child(3n+1) {
      margin: 16px 0px;
    }
    & > *:nth-child(3n+0) {
      margin: 16px 0px;
    }
  }
`

const LightToggle = styled.button`
  border: none;
  background: transparent;
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
  transform: translateY(0px);
  transition: 0.3s transform ease-out;
  cursor: pointer;
`

export default {
  name: 'App',
  components: {
    Hero,
    Card,
    MinorCard,
    MinorCardContainer,
    Foot,
    ThemeProvider,
    CardContainer,
    LightToggle,
    Quote,
  },
  computed: {
    theme() {
      return localStore.dark ? dark : light
    },
    isDark() {
      return localStore.dark
    }
  },
  methods: {
    toggleTheme: () =>{
      mutations.toggleDark()
      adjustTheme()
    },
  },
  data: () => ({
    ...baseData
  })
}
setup()
</script>

<style>
/* Hack until createGlobalStyles comes to vue-styled-components */
html {
  background: var(--main-background-color);
  background-color: var(--fallback-background-color);
}

body {
  color: var(--main-color);
}

a {
  color: var(--link-color);
}
</style>
