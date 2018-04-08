<template>
  <div class="main-screen screen">
    Main Screen
    <p>Money: {{ this.$store.state.player.money }}</p>
    <p>Fans: {{ this.$store.state.player.fans }}</p>
    <IdolShop />
    <button type="button" name="button" v-on:click="moneyClick()">+</button>
    <Player />
  </div>
</template>

<script>
import IdolShop from '@/components/IdolShop'
import Player from '@/components/Player'
export default {
  name: 'main-screen',
  components: {
    IdolShop,
    Player
  },
  methods: {
    moneyClick () {
      this.$store.dispatch('moneyClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
z
