<template>
  <div class="idol-store store-window">
    <div v-for="(idol, i) in idols">
       <p v-bind:key="i">{{ idol.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'main-screen',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      idols: 'getIdols'
    })
  },
  created () {
    this.$store.dispatch('getAllIdols')
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
