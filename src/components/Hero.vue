<template>
  <background>
    <container>
      <text-container>
        <heading>{{author}}</heading>
        <subtitle>{{subtitle}}</subtitle>
        <paragraph>{{description}}</paragraph>
        <cta-section>
          <styled-button
            secondary
            plain
            :color="'#0670c8'"
            :href="'/#companies'"
            :title="cta"
          >
            <button-text>{{cta}}</button-text>
            <i class="fa-solid fa-arrow-down"></i>
          </styled-button>
        </cta-section>
      </text-container>
    </container>
  </background>
</template>

<script>
import styled from 'vue-styled-components'
import { Subtitle, Paragraph, ButtonText } from './styles/Text.ts'
import { StyledButton } from './Card.vue'

const Background = styled.div`
  background: url(${({theme}) => theme.hero.background.image});
  background-size: cover;
  background-position: 50%;
  height: 800px;
  width: 100%;
  min-width: ${({theme}) => theme.screen.width.mobile}px;
  margin: auto;

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1035px;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    background-image: linear-gradient(${({theme}) => theme.hero.background.overlay}, ${({theme}) => theme.hero.background.overlay}), url(${({theme}) => theme.hero.background.image});
    background-position: 60% -45px;
    background-size: inherit;
}
`

const Container = styled.div`
  max-width: ${({theme}) => theme.screen.width.desktop}px;
  margin: auto;
  /* padding-top: 180px; */

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1035px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextContainer = styled.div`
  /* TODO: CONFIGURABLE */
  width: 370px;
  margin: 10px;

  /* Responsive */
  margin-top: -20px;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    width: calc(100% - 40px);
    max-width: 560px;
    margin: auto;
  }
`

const Heading = styled.h1`
  font-size: 5rem;
  margin: 32px auto;
  font-weight: bold;
  background: ${({theme}) => theme.headingGradient || 'none'};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    font-size: 72px;
  }
`

const CtaSection = styled.div`
  margin: 36px 0px 72px;
`

export default {
  components: {
    Background,
    Container,
    TextContainer,
    CtaSection,
    Heading,
    Subtitle,
    Paragraph,
    StyledButton,
    ButtonText
  },
  props: {
    author: String,
    cta: String,
    subtitle: String,
    description: String
  }
}
</script>
