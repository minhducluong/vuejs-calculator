<template>
  <a class="item" id="sqr">{{ operator }}</a>
</template>

<script>
export default {
  props: {
    operator: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
#plus {
	border-bottom-right-radius: 14px;
}
</style>