<template>
  <div id="app">
    <Screen :display="display"/>
    <Reset />
    <Operator operator="x²" />
    <Operator operator="x²" />
    <Operator operator="x²" />
    <Operator operator="x²" />
    <Input :number="7" :display="display"/>
    <Input :number="8" />
    <Input :number="9" />
    <Operator operator="/"/>
    <Input :number="4" />
    <Input :number="5" />
    <Input :number="6" />
    <Operator operator="*" />
    <Input :number="1" />
    <Input :number="2" />
    <Input :number="3" />
    <Operator operator="-" />
    <Input :number="0" />
    <Input :number="0" />
    <Calculate />
    <Operator operator="+" />
  </div>
</template>

<script>
import Screen from './components/Screen.vue'
import Reset from './components/Reset.vue'
import Operator from './components/Operator.vue'
import Input from './components/Input.vue'
import Calculate from './components/Calculate.vue'

export default {
  name: 'App',

  data() {
    return {
      display: '123'
    }
  },

  components: {
    Screen,
    Reset,
    Operator,
    Input,
    Calculate
  }
}
</script>

<style>
#app {
	max-width: 500px;
	max-height: 600px;
	border: 1px solid black;
	display: grid;
	grid-template-columns: 25% 25% 25% 25%;
	z-index: 1;
	box-shadow: 9px 11px 6px -1px rgba(128,128,128,1);
	border-radius: 15px;
  /* TODO tạm để thế này */
	/* opacity: 0; */
	animation: fadeInUp 1.5s 0.25s;
	animation-fill-mode: forwards;
	font-size: 40px;
	margin-left: 15px;
	margin-right: 15px;
}

@media (orientation: landscape) {
	#app {
		height: calc(100vh - 30px);
		width: calc((100vh - 30px) / 1.2);
	}
}

.item {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	cursor: pointer;
}
</style>
