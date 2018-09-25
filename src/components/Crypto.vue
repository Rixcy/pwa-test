<template>
  <div class="container-fluid mt-4">
    <b-row>
      <template v-for="c in crypto">
        <b-col v-for="(value, key) in c">
          <b-card class="text-center" :title="key">
            <b-card-text>
              <font-awesome-icon icon="pound-sign"></font-awesome-icon>
                {{ value }}
            </b-card-text>
          </b-card>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      crypto: [],
      currencies: ['BTC', 'LTC', 'ETH']
    }
  },
  mounted () {
    for (let i = 0; i < this.currencies.length; i++) {
      axios
        .get(`https://api.coinbase.com/v2/prices/${this.currencies[i]}-GBP/spot`)
        .then(response => {
          this.crypto.push({ [this.currencies[i]]: response.data.data.amount })
        })
    }
  }
}
</script>
