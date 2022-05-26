<template>
  <quote-container>
    <quote-body>"{{quote}}"</quote-body>
    <authors>
      <author v-for="(author, index) in authors" :key="index">
        <a v-bind:href="author.url" target="_blank">
          {{author.name}}
        </a>
      </author>
    </authors>
    <author-title>{{authorTitle}}</author-title>
  </quote-container>
</template>

<script>
import styled from 'vue-styled-components'

const QuoteContainer = styled.div`
  text-align: center;
`

const QuoteBody = styled.h1`
  padding: 0px ${({theme}) => theme.screen.padding.desktop}px;
  font-style: italic;
  line-height: 1.2;
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: ${({theme}) => theme.screen.width.desktop}px) {
    max-width: ${({theme}) => theme.screen.width.tablet}px;
  }

  @media screen and (max-width: ${({theme}) => theme.screen.width.tablet}px) {
    max-width: ${({theme}) => theme.screen.width.mobile}px;
    font-size: 28px;
  }
`

const Authors = styled.ul`
  font-size: 22px;
  font-weight: 400;
  display: inline-block;
  margin: 20px 0 0 0;
  padding: 0;
`

const Author = styled.li`
  list-style: none;
  display: inline;
  &::after {
    padding: 0 5px;
    content: "·";
    font-weight: bold;
  }
  &:last-child::after {
    content: none;
  }
`

const AuthorTitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 10px 0;
`

export default {
  components: {
    QuoteContainer,
    QuoteBody,
    Authors,
    Author,
    AuthorTitle
  },
  props: {
    quote: String,
    authors: Array,
    authorTitle: String
  }
}
</script>
