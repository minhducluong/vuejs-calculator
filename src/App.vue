<template>
  <div id="app">
    <div class="calculator__wrapper">
      <Screen />
      <Reset />
      <Operator text="x²" operation="sqr" />
      <Operator text="x!" operation="factorial" />
      <Operator text="√x" operation="sqrt" />
      <Operator text="x%" operation="percent" />
      <Input number="7" />
      <Input number="8" />
      <Input number="9" />
      <Input number="÷" />
      <Input number="4" />
      <Input number="5" />
      <Input number="6" />
      <Input number="×" />
      <Input number="1" />
      <Input number="2" />
      <Input number="3" />
      <Input number="-" />
      <Input number="0" position="bottom-left" />
      <Input number="." />
      <Calculate />
      <Input number="+" position="bottom-right" />
    </div>
    <div class="calculator__guide">Bạn có thể dùng bàn phím để nhập phép tính</div>
  </div>
</template>

<script>
import Screen from "./components/Screen.vue";
import Reset from "./components/Reset.vue";
import Operator from "./components/Operator.vue";
import Input from "./components/Input.vue";
import Calculate from "./components/Calculate.vue";

export default {
  name: "App",

  components: {
    Screen,
    Reset,
    Operator,
    Input,
    Calculate
  }
};
</script>

<style>
#app {
  height: 100%;
  display: flex;
	align-items: center;
	justify-content: center;
}

.calculator__wrapper {
  max-width: 500px;
  max-height: 600px;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  z-index: 1;
  box-shadow: 9px 11px 6px -1px rgba(128, 128, 128, 1);
  border-radius: 15px;
  opacity: 0;
  animation: fadeInUp 1.5s 0.25s;
  animation-fill-mode: forwards;
  font-size: 40px;
  margin-left: 15px;
  margin-right: 15px;
}

@media (max-width: 576px) {
  .calculator__wrapper {
    font-size: 25px;
  }
}
@media (orientation: landscape) {
  .calculator__wrapper {
    height: calc(100vh - 30px);
    width: calc((100vh - 30px) / 1.2);
  }
}
@media (max-height: 600px) and (orientation: landscape) {
  .calculator__wrapper {
    max-height: 100%;
    width: calc((100vh - 30px) / 1.2);
  }
}
@media (orientation: portrait) {
  .calculator__wrapper {
    width: 100%;
    height: calc(1.2 * 100vw);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
