<template>
  <div class="hero">
    <div class="container">
      <b-img thumbnail fluid :src="randomImage" class="mb-4 grayscale" width="300" height="200" />
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
import json from '../assets/quotes.json'
export default {
  json: json,
  data () {
    return {
      randomQuote: {},
      randomImage: ''
    }
  },
  async created () {
    await this.getRandomQuote()
  },
  watch: {
    '$route': 'getRandomQuote()'
  },
  methods: {
    async getRandomQuote () {
      let idx = Math.floor(Math.random() * this.$options.json['quotes'].length)
      this.randomQuote = await this.$options.json['quotes'][idx]
      this.randomImage =
        `https://picsum.photos/300/200?image=${Math.floor(Math.random() * 100)}`
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
