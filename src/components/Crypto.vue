<template>
  <div class="container-fluid mt-4">
    <b-row>
      <template v-for="c in crypto">
        <b-col>
          <b-card class="text-center" :title="c['type']">
            <p class="card-text">
              <font-awesome-icon icon="pound-sign"></font-awesome-icon>
              {{ c['value'] }}
            </p>
          </b-card>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
  data: function () {
    return {
      crypto: []
    }
  },
  computed: {
    currencies: () => store.state.currencies
  },
  mounted () {
    for (let i = 0; i < this.currencies.length; i++) {
      axios
        .get(`https://api.coinbase.com/v2/prices/${this.currencies[i]}-GBP/spot`)
        .then(response => {
          this.crypto.push({ type: this.currencies[i], value: response.data.data.amount })
        })
    }
  }
}
</script>
