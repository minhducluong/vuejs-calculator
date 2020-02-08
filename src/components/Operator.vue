<template>
  <a 
    class="item" 
    @click="doIt"
    >{{ text }}</a>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    operation: {
      type: String,
      required: true
    }
  },

  methods: {
    ...mapActions(['sqr', 'sqrt', 'factorial', 'percent']),

    doIt() {
      switch(this.operation) {
        case 'sqr':
          this.sqr()
          break
        case 'sqrt':
          this.sqrt()
          break
        case 'factorial':
          this.factorial()
          break
        case 'percent':
          this.percent()
          break
      }
    }
  }
};
</script>

<style scoped>
</style>