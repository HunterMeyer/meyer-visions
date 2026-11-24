<template>
  <section-wrap id="about">
    <section-title>{{about.title}}</section-title>
    <intro v-for="(text, index) in about.intro" :key="`intro-${index}`">{{text}}</intro>
    <approach-grid>
      <approach-item v-for="(item, index) in about.approach" :key="`approach-${index}`">
        <approach-title>{{item.title}}</approach-title>
        <approach-text>{{item.text}}</approach-text>
      </approach-item>
    </approach-grid>
    <founder-grid>
      <founder v-for="(person, index) in about.founders" :key="index">
        <founder-name>
          <a
            v-if="person.url"
            :href="person.url"
            :title="`${person.name} on LinkedIn`"
            target="_blank"
            rel="noopener"
          >{{person.name}}</a>
          <span v-else>{{person.name}}</span>
        </founder-name>
        <founder-role>{{person.role}}</founder-role>
        <paragraph>{{person.bio}}</paragraph>
      </founder>
    </founder-grid>
    <contact-line>
      {{about.contact.text}}
      <a :href="`mailto:${about.contact.email}`" title="Email Meyer Visions">{{about.contact.email}}</a>
    </contact-line>
  </section-wrap>
</template>

<script>
import styled from 'vue-styled-components'
import { Paragraph } from './styles/Text.ts'

const SectionWrap = styled.section`
  width: ${({theme}) => theme.screen.width.desktop}px;
  margin: 40px auto 120px;
  scroll-margin-top: 24px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: ${({theme}) => theme.screen.width.tablet}px;
    margin: 20px auto 80px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: calc(100% - 40px);
  }
`

const SectionTitle = styled.h2`
  font-family: 'Sora', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin: 0 0 16px;
  background: ${({theme}) => theme.headingGradient || 'none'};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
`

const Intro = styled.p`
  font-size: 1.15rem;
  line-height: 1.55;
  letter-spacing: 0.3px;
  font-weight: 300;
  max-width: 680px;
  margin: 0 0 16px;
`

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 40px 0 48px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 32px 0 40px;
  }
`

const ApproachItem = styled.div`
  border-left: 2px solid var(--link-color);
  padding-left: 16px;
`

const ApproachTitle = styled.h3`
  font-family: 'Sora', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 6px;
`

const ApproachText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  letter-spacing: 0.3px;
  font-weight: 300;
  margin: 0;
`

const FounderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

const Founder = styled.div`
  background: ${({theme}) => theme.card.background};
  box-shadow: ${({theme}) => theme.card.boxShadow};
  border-radius: 20px;
  padding: 32px ${({theme}) => theme.screen.padding.desktop}px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 32px ${({theme}) => theme.screen.padding.tablet}px;
  }
  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    padding: 32px 24px;
  }
`

const FounderName = styled.h3`
  font-size: 24px;
  letter-spacing: 0.5px;
  margin: 0 0 4px;
  & a { color: inherit; text-decoration: none; }
  & a:hover { color: var(--link-color); }
`

const FounderRole = styled.p`
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--link-color);
  margin: 0 0 16px;
`

const ContactLine = styled.p`
  margin: 40px 0 0;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  & a { color: var(--link-color); font-weight: 600; text-decoration: none; }
  & a:hover { text-decoration: underline; }
`

export default {
  components: {
    SectionWrap,
    SectionTitle,
    Intro,
    ApproachGrid,
    ApproachItem,
    ApproachTitle,
    ApproachText,
    FounderGrid,
    Founder,
    FounderName,
    FounderRole,
    Paragraph,
    ContactLine
  },
  props: {
    about: Object
  }
}
</script>
