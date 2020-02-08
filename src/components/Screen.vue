<template>
  <div class="screen_wrap">
    <div class="screen">{{ display }}</div>
  </div>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.screen_wrap {
	grid-column-start: 1;
	grid-column-end: 4;
	display: flex;
	align-items: center;
	border: 1px solid black;
	padding: 0 5px;
	border-top-left-radius: 14px;
	overflow-x: auto;
}
</style>