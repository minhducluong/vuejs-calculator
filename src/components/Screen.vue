<template>
  <div class="screen_wrap top-left">
    <div :class="fadeEffect && 'fadeEffect'">{{ display }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['display', 'fadeEffect'])
  }
};
</script>

<style scoped>
.fadeEffect {
  animation: 0.75s fadeIn;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

.screen_wrap {
	grid-column-start: 1;
	grid-column-end: 4;
	display: flex;
	align-items: center;
	border: 1px solid black;
	padding: 0 5px;
	overflow-x: auto;
}
</style>