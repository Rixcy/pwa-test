<template>
  <div class="hero">
    <div id="quoteContainer" class="container">
      <b-img
        thumbnail
        fluid
        :src="randomImage['url']"
        class="mb-4 grayscale"></b-img>
      <p class="lead">
        <font-awesome-icon icon="quote-left" class="mr-2"></font-awesome-icon>
        {{ randomQuote['quote'] }}
      </p>
      <hr class="my-4">
      <p>{{ randomQuote['author'] }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import json from '../assets/quotes.json'
export default {
  json: json,
  data () {
    return {
      randomQuote: {},
      randomImage: {
        url: ''
      }
    }
  },
  async created () {
    await this.getRandomImage()
    await this.getRandomQuote()
  },
  watch: {
    '$route': 'getRandomQuote(), getRandomImage()'
  },
  methods: {
    async getRandomQuote () {
      let idx = Math.floor(Math.random() * this.$options.json['quotes'].length)
      this.randomQuote = await this.$options.json['quotes'][idx]
    },
    async getRandomImage () {
      let config = {
        headers: {
          'Authorization':
          'Client-ID 36c2c21538ee87923f6c18bbfce395c3c073ff5bc38c7019c2a2c24986389231',
          'Accept-Version': 'v1'
        }
      }
      axios.get(
        'https://api.unsplash.com/photos/random/?w=300&h=200', config
      ).then(response => {
        this.randomImage['url'] = response.data['urls']['custom']
      })
    }
  }
}
</script>

<style lang="scss">
.hero {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero .lead {
  font-weight: 200;
  font-size: 1.5rem;
}
img.grayscale {
  -webkit-filter: grayscale(100%);
  -webkit-transition: .5s ease-in-out;
     -moz-filter: grayscale(100%);
     -moz-transition: .5s ease-in-out;
       -o-filter: grayscale(100%);
       -o-transition: .5s ease-in-out;
  &:hover {
    -webkit-filter: grayscale(0%);
    -webkit-transition: .5s ease-in-out;
       -moz-filter: grayscale(0%);
       -moz-transition: .5s ease-in-out;
         -o-filter: grayscale(0%);
         -o-transition: .5s ease-in-out;
  }
}
</style>
