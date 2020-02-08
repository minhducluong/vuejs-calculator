<template>
  <a
    :class="['item', position]"
    @click="updateDisplay(number)"
  >{{ number }}</a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    number: {
      type: String,
      required: true
    },
    position: {
      type: String
    }
  },

  methods: {
    ...mapActions(['updateDisplay']),
  }
};
</script>

<style scoped>
</style>