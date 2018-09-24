<template>
  <div class="container-fluid mt-4">
    <b-row>
      <b-col>
        <b-card class="text-center" title="BTC">
          <b-card-text>
            <font-awesome-icon icon="pound-sign"></font-awesome-icon>
            {{ btc.data.amount }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="text-center" title="LTC">
          <b-card-text>
            <font-awesome-icon icon="pound-sign"></font-awesome-icon>
            {{ ltc.data.amount }}
          </b-card-text>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="text-center" title="ETH">
          <b-card-text>
            <font-awesome-icon icon="pound-sign"></font-awesome-icon>
            {{ eth.data.amount }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      btc: null,
      ltc: null,
      eth: null
    }
  },
  mounted () {
    axios
      .get('https://api.coinbase.com/v2/prices/BTC-GBP/spot')
      .then(response => (this.btc = response.data))
    axios
      .get('https://api.coinbase.com/v2/prices/LTC-GBP/spot')
      .then(response => (this.ltc = response.data))
    axios
      .get('https://api.coinbase.com/v2/prices/ETH-GBP/spot')
      .then(response => (this.eth = response.data))
  }
}
</script>
