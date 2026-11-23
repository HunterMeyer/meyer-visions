import Vue from 'vue'
import App from './App.vue'
import RobotaxiPage from './pages/Robotaxi.vue'
import { setupTheme, useThemes } from './themes/store.js'
import robotaxiThemes from './themes/robotaxi.ts'

Vue.config.productionTip = false

// Lightweight routing: the site only has a couple of pages, so pick the
// root component from the path instead of adding vue-router.
const path = window.location.pathname.replace(/\/+$/, '').toLowerCase()
const routes = {
  '/robotaxi': RobotaxiPage,
}
const Page = routes[path] || App

// The Robotaxi page has its own black and gold light/dark themes.
if (Page === RobotaxiPage) {
  useThemes(robotaxiThemes)
}
setupTheme()

new Vue({
  render: h => h(Page),
}).$mount('#app')
