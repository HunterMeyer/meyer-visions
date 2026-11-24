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
    <about :about="about" />
    <quote
      :quote="quote.text"
      :authors="quote.authors"
      :authorTitle="quote.authorTitle"
    />
    <foot :footer="footer" />
    <light-toggle @click="toggleTheme()" title="Toggle theme">
      <span v-if="!isDark" >
        <i class="fa-solid fa-moon" style="color:#000;"></i>
      </span>
      <span v-if="isDark">
        <i class="fa-solid fa-sun" style="color:#fff;"></i>
      </span>
    </light-toggle>
  </theme-provider>
</template>

<script>
import styled from 'vue-styled-components'
import Hero from './components/Hero.vue'
import Card from './components/Card.vue'
import MinorCard from './components/MinorCard.vue'
import Quote from './components/Quote.vue'
import About from './components/About.vue'
import Foot from './components/Foot.vue'
import { ThemeProvider, injectGlobal } from 'vue-styled-components'

import baseData from './data/fixtures.ts'
import { themeStore, toggleDark, currentTheme } from './themes/store.js'

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
  /* Desktop: clear gap between the hero and the first company card */
  margin-top: 40px;
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
    width: calc(100% - 40px);
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
    About,
  },
  computed: {
    theme() {
      return currentTheme()
    },
    isDark() {
      return themeStore.dark
    }
  },
  methods: {
    toggleTheme: () => {
      toggleDark()
    },
  },
  data: () => ({
    ...baseData
  })
}
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
