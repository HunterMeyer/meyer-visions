<template>
  <app-footer>
    <div>
      <author>{{footer.tagline}}</author>
    </div>
    <icon-container>
      <icons
        v-for="(link, index) in footer.links"
        :key="`footer-links-${index}`"
        :href="link.url"
        :title="link.title"
        target="_blank"
      >
        <i :class="link.fa"></i>
      </icons>
    </icon-container>
  </app-footer>
</template>

<script>
import styled from 'vue-styled-components'

const AppFooter = styled.div`
  width: ${({theme}) => theme.screen.width.desktop - theme.screen.padding.desktop * 2}px;
  margin: 64px auto;
  padding: 0px ${({theme}) => theme.screen.padding.desktop}px;
  display: flex;
  font-weight: bold;
  flex-direction: column;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    padding: 0px 20px;
    width: ${({theme}) => theme.screen.width.tablet - theme.screen.padding.tablet * 2}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    width: ${({theme}) => theme.screen.width.mobile - theme.screen.padding.mobile * 2}px;
  }
`

const Author = styled.p`
  text-align: center;
`

const Icons = styled.a`
  padding: 8px;
  margin: 0 8px;
  color: ${({theme}) => theme.color.text};
  opacity: 0.5;
  transform: translateY(0px);
  transition: 0.3s all ease-out;

  &:hover {
    transition: 0.2s all ease-out;
    opacity: 1;
  }
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default {
  components: {
    AppFooter,
    Author,
    Icons,
    IconContainer
  },
  props: {
    footer: {
      tagline: String,
      links: Array
    }
  }
}
</script>
