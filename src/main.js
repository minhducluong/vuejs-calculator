import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/global.css'

Vue.config.productionTip = false

new Vue({
  store,
  mounted() {
    let that = this
    document.addEventListener("keydown", function() {
      // Deactivate spacebar
      if (event.key === " ") return

      // keys that can be typed
      const targetKeys = [
        '+', '-', '*', '/', '.',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ]

      targetKeys.forEach(item => event.key === item && that.$store.dispatch('updateDisplay', event.key))

      // When enter '='
      if (event.key === "=" || event.key == 'Enter') that.$store.dispatch('calculate')

      // When use Backspace
      if (event.key == 'Backspace') {
        let arr = that.$store.state.display.toString().split('');
    
        arr.pop();

        that.$store.state.display = arr.join('')
      }
    });
  },
  render: h => h(App)
}).$mount('#app')
