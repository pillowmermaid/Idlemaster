<template>
  <div class="player">
    <p>My Band</p>
    <div class="bandmember" v-for="(idol, i) in idols" :key="`bandmember-${i}`">
      {{ idol.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      idols: 'getFullRoster'
    })
  },
  created () {
    this.$store.dispatch('getPlayerIdols')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-weight: bold;
}
.bandmember {
  color: red;
}
h1, h2 {
  font-weight: normal;
}
</style>
z
