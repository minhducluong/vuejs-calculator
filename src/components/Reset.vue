<template>
  <a 
    class="item top-right"
    @click="resetDisplay"
    >AC</a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['resetDisplay'])
  }
};
</script>

<style scoped>
</style>