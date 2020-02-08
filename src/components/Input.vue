<template>
  <a
    class="item just-display"
    @click="updateDisplay"
  >{{ number }}</a>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true
    },
    display: {
      type: String
    }
  },

  methods: {
    updateDisplay() {
      this.display = this.number
    }
  }
};
</script>

<style scoped>
#num0 {
	border-bottom-left-radius: 14px;
}
</style>