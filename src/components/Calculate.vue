<template>
  <a 
    class="item" 
    id="equal"
    @click="calculate"
    >=</a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['calculate'])
  }
};
</script>

<style scoped>
</style>