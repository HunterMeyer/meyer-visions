<template>
  <theme-provider :theme="theme">
    <page>
      <top-bar>
        <home-link href="/" title="Back to Meyer Visions">
          <i class="fa-solid fa-arrow-left"></i>
          <span>Meyer Visions</span>
        </home-link>
      </top-bar>

      <!-- Hero -->
      <section-wrap>
        <hero-grid>
          <div>
            <hero-title>{{content.hero.title}}</hero-title>
            <subtitle>{{content.hero.subtitle}}</subtitle>
            <paragraph>{{content.hero.description}}</paragraph>
            <cta-row>
              <styled-button
                primary
                :color="accent"
                :href="content.hero.primaryCta.url"
                :title="content.hero.primaryCta.name"
              >
                <button-text>{{content.hero.primaryCta.name}}</button-text>
                <i class="fa-solid fa-arrow-down"></i>
              </styled-button>
              <styled-button
                secondary
                :href="content.hero.secondaryCta.url"
                :title="content.hero.secondaryCta.name"
              >
                <button-text>{{content.hero.secondaryCta.name}}</button-text>
                <i class="fa-solid fa-arrow-down"></i>
              </styled-button>
            </cta-row>
          </div>
          <hero-image src="/companies/robotaxi/cybercab.webp" alt="Two gold Cybercabs parked in front of a city skyline at dusk" />
        </hero-grid>
      </section-wrap>

      <!-- Focus areas -->
      <section-wrap>
        <section-title>{{content.focus.title}}</section-title>
        <section-intro>{{content.focus.intro}}</section-intro>
        <tile-grid>
          <tile v-for="item in content.focus.items" :key="item.name">
            <tile-icon><i :class="item.icon"></i></tile-icon>
            <tile-title>{{item.name}}</tile-title>
            <paragraph>{{item.text}}</paragraph>
          </tile>
        </tile-grid>
      </section-wrap>

      <!-- Plan + hubs -->
      <section-wrap id="plan">
        <section-title>{{content.plan.title}}</section-title>
        <timeline>
          <step v-for="(step, index) in content.plan.steps" :key="step.phase">
            <step-marker>{{index + 1}}</step-marker>
            <div>
              <eyebrow>{{step.phase}}</eyebrow>
              <tile-title>{{step.name}}</tile-title>
              <paragraph>{{step.text}}</paragraph>
            </div>
          </step>
        </timeline>
        <panel>
          <tile-title><i class="fa-solid fa-charging-station"></i>&nbsp; {{content.hubs.title}}</tile-title>
          <paragraph>{{content.hubs.text}}</paragraph>
          <paragraph><em>{{content.hubs.note}}</em></paragraph>
        </panel>
      </section-wrap>

      <!-- Partner form -->
      <section-wrap id="interest">
        <panel>
          <form-grid>
            <div>
              <section-title>{{content.partners.title}}</section-title>
              <paragraph>{{content.partners.intro}}</paragraph>
              <benefit-list>
                <li v-for="benefit in content.partners.benefits" :key="benefit">
                  <i class="fa-solid fa-check"></i>
                  <span>{{benefit}}</span>
                </li>
              </benefit-list>
            </div>

            <div>
              <status-box v-if="status === 'sent'" role="status">
                <i class="fa-solid fa-circle-check"></i>
                <paragraph>{{content.form.success}}</paragraph>
              </status-box>
              <form v-else @submit.prevent="submit" novalidate>
                <field>
                  <label for="business">Business name *</label>
                  <text-input id="business" v-model.trim="form.business" required autocomplete="organization" />
                </field>
                <field-row>
                  <field>
                    <label for="contactName">Contact name *</label>
                    <text-input id="contactName" v-model.trim="form.contactName" required autocomplete="name" />
                  </field>
                  <field>
                    <label for="role">Title / role</label>
                    <text-input id="role" v-model.trim="form.role" autocomplete="organization-title" placeholder="Owner, GM, Events…" />
                  </field>
                </field-row>
                <field-row>
                  <field>
                    <label for="email">Email *</label>
                    <text-input id="email" type="email" v-model.trim="form.email" required autocomplete="email" />
                  </field>
                  <field>
                    <label for="phone">Phone</label>
                    <text-input id="phone" type="tel" v-model.trim="form.phone" autocomplete="tel" />
                  </field>
                </field-row>
                <field>
                  <label for="address">Business address *</label>
                  <text-input id="address" v-model.trim="form.address" required autocomplete="street-address" placeholder="Street, City, FL" />
                </field>
                <field>
                  <label for="venueType">Venue type *</label>
                  <select-input id="venueType" v-model="form.venueType" required>
                    <option value="" disabled>Select one</option>
                    <option v-for="type in content.form.venueTypes" :key="type" :value="type">{{type}}</option>
                  </select-input>
                </field>
                <field>
                  <label for="notes">Additional information</label>
                  <field-hint id="notes-hint">{{content.form.notesHint}}</field-hint>
                  <text-area id="notes" v-model.trim="form.notes" rows="4" aria-describedby="notes-hint"></text-area>
                </field>
                <!-- Honeypot for bots; hidden from people -->
                <input type="text" name="_gotcha" v-model="form._gotcha" tabindex="-1" autocomplete="off" style="display:none" aria-hidden="true" />
                <consent-label>
                  <input type="checkbox" v-model="form.consent" required />
                  <span>{{content.form.consent}}</span>
                </consent-label>

                <error-text v-if="error" role="alert">{{error}}</error-text>

                <submit-button type="submit" :disabled="status === 'sending'" :color="accent">
                  <button-text>{{status === 'sending' ? 'Sending…' : 'Submit interest'}}</button-text>
                  <i class="fa-solid fa-paper-plane"></i>
                </submit-button>
              </form>
            </div>
          </form-grid>
        </panel>
      </section-wrap>

      <section-wrap>
        <disclaimer>{{content.disclaimer}}</disclaimer>
      </section-wrap>
    </page>

    <foot :footer="footer" />
    <light-toggle @click="toggleTheme()" title="Toggle theme">
      <span v-if="!isDark"><i class="fa-solid fa-moon" style="color:#000;"></i></span>
      <span v-if="isDark"><i class="fa-solid fa-sun" style="color:#fff;"></i></span>
    </light-toggle>
  </theme-provider>
</template>

<script>
import styled, { ThemeProvider } from 'vue-styled-components'
import { Subtitle, Paragraph, ButtonText } from '../components/styles/Text.ts'
import { StyledButton } from '../components/Card.vue'
import Foot from '../components/Foot.vue'
import baseData from '../data/fixtures.ts'
import content from '../data/robotaxi.ts'
import { themeStore, toggleDark, currentTheme } from '../themes/store.js'


const Page = styled.main`
  padding: 0 20px;
`

const TopBar = styled.nav`
  max-width: 980px;
  margin: 0 auto;
  padding: 28px 0 0;
`

const HomeLink = styled.a`
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  & > i { margin-right: 8px; }
  & > span { font-family: 'Sora', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-weight: 700; }
`

const SectionWrap = styled.section`
  max-width: 980px;
  margin: 0 auto;
  padding: 48px 0;
  scroll-margin-top: 16px;
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

const HeroTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 1.1;
  letter-spacing: 0.5px;
  margin: 12px 0 16px;
  @media screen and (max-width: 600px) {
    font-size: 2.2rem;
  }
`

const HeroImage = styled.img`
  width: 100%;
  border-radius: 14px;
  box-shadow: ${({theme}) => theme.card.carousel.boxShadow};
`

const Eyebrow = styled.div`
  font-weight: 300;
  font-size: 0.7rem;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  opacity: 0.8;
`

const CtaRow = styled.div`
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
  /* Flex items are blockified; reset line-height so buttons match the homepage size */
  & > a { line-height: normal; }
`

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
`

const SectionIntro = styled(Paragraph)`
  max-width: 640px;
  margin-bottom: 28px;
`

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Tile = styled.div`
  background: ${({theme}) => theme.card.background};
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  padding: 28px;
`

const TileIcon = styled.div`
  font-size: 1.4rem;
  margin-bottom: 14px;
  color: var(--link-color);
`

const TileTitle = styled.h3`
  font-size: 1.05rem;
  margin: 4px 0 8px;
  letter-spacing: 0.5px;
`

const Timeline = styled.ol`
  list-style: none;
  padding: 0;
  margin: 8px 0 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const Step = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`

const StepMarker = styled.span`
  flex: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
  color: ${({theme}) => theme.card.button.primaryText || '#eee'};
  background: ${({theme}) => theme.accent};
`

const Panel = styled.div`
  background: ${({theme}) => theme.card.background};
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: 28px 20px;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  & > li {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    font-weight: 300;
    line-height: 1.45;
  }
  & > li > i {
    color: var(--link-color);
    margin-top: 4px;
  }
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  flex: 1;
  min-width: 0;
  & > label {
    font-size: 0.7rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
`

const FieldRow = styled.div`
  display: flex;
  gap: 16px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 0;
  }
`

const FieldHint = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.45;
  opacity: 0.8;
  margin: -2px 0 8px;
`

const inputStyles = ({theme}) => `
  font: inherit;
  font-size: 0.85rem;
  color: inherit;
  background: ${theme.card.button.background};
  border: 1px solid rgba(127,127,127,0.35);
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid var(--link-color);
    outline-offset: 1px;
  }
`

const TextInput = styled.input`${inputStyles}`
const TextArea = styled.textarea`${inputStyles} resize: vertical;`
const SelectInput = styled.select`${inputStyles}`

const ConsentLabel = styled.label`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.45;
  margin: 4px 0 20px;
  & > input { margin-top: 3px; }
`

const ErrorText = styled.p`
  color: #d64545;
  font-size: 0.8rem;
  margin: 0 0 16px;
`

const submitProps = { color: String }
const SubmitButton = styled('button', submitProps)`
  font: inherit;
  font-size: 0.66rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({theme}) => theme.card.button.primaryText || '#eee'};
  background: ${(props) => props.color};
  border: none;
  border-radius: 24px;
  padding: 0.75rem 1.5rem;
  line-height: normal;
  cursor: pointer;
  box-shadow: ${({theme}) => theme.card.button.boxShadow.primary};
  &:disabled { opacity: 0.6; cursor: wait; }
  &:hover:not(:disabled) { filter: brightness(1.15); }
`

const StatusBox = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid rgba(127,127,127,0.35);
  & > i { font-size: 1.6rem; color: var(--link-color); }
`

const Disclaimer = styled.p`
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.5;
  opacity: 0.7;
  margin: 0;
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
  cursor: pointer;
`

const emptyForm = () => ({
  business: "",
  contactName: "",
  role: "",
  email: "",
  phone: "",
  address: "",
  venueType: "",
  notes: "",
  consent: false,
  _gotcha: "",
})

const LABELS = {
  business: "Business name",
  contactName: "Contact name",
  role: "Title / role",
  email: "Email",
  phone: "Phone",
  address: "Address",
  venueType: "Venue type",
  notes: "Additional information",
}

export default {
  name: 'RobotaxiPage',
  components: {
    ThemeProvider, Foot, Page, TopBar, HomeLink, SectionWrap, HeroGrid, HeroTitle, HeroImage,
    Eyebrow, CtaRow, SectionTitle, SectionIntro, TileGrid, Tile, TileIcon, TileTitle, Timeline,
    Step, StepMarker, Panel, FormGrid, BenefitList, Field, FieldRow, TextInput, TextArea,
    SelectInput, FieldHint, ConsentLabel, ErrorText, SubmitButton, StatusBox, Disclaimer, LightToggle,
    Subtitle, Paragraph, ButtonText, StyledButton,
  },
  data: () => ({
    content,
    footer: baseData.footer,
    form: emptyForm(),
    status: "idle",
    error: "",
  }),
  computed: {
    theme() {
      return currentTheme()
    },
    accent() {
      return currentTheme().accent
    },
    isDark() {
      return themeStore.dark
    },
  },
  mounted() {
    document.title = content.meta.title
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) this.$nextTick(() => el.scrollIntoView())
    }
  },
  methods: {
    toggleTheme() {
      toggleDark()
    },
    validate() {
      const f = this.form
      if (!f.business || !f.contactName || !f.email || !f.address || !f.venueType) {
        return "Please fill in the required fields marked with *."
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
        return "Please enter a valid email address."
      }
      if (!f.consent) {
        return "Please confirm the checkbox so we know it's OK to follow up."
      }
      return ""
    },
    payload() {
      const out = {}
      Object.keys(LABELS).forEach(key => { out[LABELS[key]] = this.form[key] })
      out["Consent"] = "Yes"
      out["Submitted from"] = window.location.href
      out["_subject"] = `Robotaxi partner interest: ${this.form.business}`
      return out
    },
    async submit() {
      this.error = this.validate()
      if (this.error) return
      // Bots fill the hidden field; quietly pretend success.
      if (this.form._gotcha) {
        this.status = "sent"
        return
      }

      const endpoint = content.form.endpoint
      if (!endpoint) {
        // No form backend configured yet: open a pre-filled email instead.
        const data = this.payload()
        const body = Object.keys(data)
          .filter(k => k !== "_subject")
          .map(k => `${k}: ${data[k] || "-"}`)
          .join("\n")
        window.location.href = `mailto:${content.form.fallbackEmail}?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(body)}`
        this.status = "sent"
        return
      }

      this.status = "sending"
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(this.payload()),
        })
        if (!res.ok) {
          // Formspree returns { errors: [{ field, message }] } on validation failures
          const data = await res.json().catch(() => ({}))
          const messages = (data.errors || []).map(e => e.message).filter(Boolean)
          throw new Error(messages.join(" ") || `Status ${res.status}`)
        }
        this.status = "sent"
        this.form = emptyForm()
      } catch (e) {
        console.error(e)
        this.status = "idle"
        this.error = `Something went wrong sending the form (${e.message}). Please try again, or email us at ${content.form.fallbackEmail}.`
      }
    },
  },
}
</script>
