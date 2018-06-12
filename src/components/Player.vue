<template>
  <div class="player">
    <p>Active Band</p>
    <div class="bandmember" v-for="(i) in active_idols" :key="`bandmember-${i}`">
      {{ all_idols[i].name }}
    </div>
    <p>Bench</p>
    <div class="benched-member" v-for="(idol, i) in inactive_idols" :key="`benchmember-${i}`">
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
      all_idols: 'getAllIdols',
      inactive_idols: 'getInactiveIdols',
      active_idols: 'getActiveIdols'
    })
  },
  created () {
    this.$store.dispatch('initPlayerIdols')
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
