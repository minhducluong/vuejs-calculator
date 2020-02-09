import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const checkError = (state, result) => {
  if (!result) {
    alert("Ông phá máy rồi!")
    state.display = ""
  } else {
    state.display = result
  }
}

const makeFadeEffect = (commit) => {
  commit('toggleFadeEffect')
  setTimeout(() => commit('toggleFadeEffect'), 500)
}

export default new Vuex.Store({
  state: {
    display: '',
    fadeEffect: false
  },
  mutations: {
    toggleFadeEffect(state) {
      state.fadeEffect = !state.fadeEffect
    },

    updateDisplay(state, content) {
      state.display += content
    },

    resetDisplay(state) {
      state.display = ''
    },

    calculate(state) {
      let display = state.display
      display = display.replace(/×/g, "*")
      display = display.replace(/÷/g, "/")
      try {
        state.display = eval(display)
      } catch(e) {
        alert("Ông phá máy rồi!")
        state.display = ""
      }
    },

    sqr(state) {
      let result = eval(state.display*state.display)
      checkError(state, result)
    },

    sqrt(state) {
      let result = Math.sqrt(state.display)
      checkError(state, result)
    },

    factorial(state) {
      let display = state.display
      let result = 1
      let number = Number(state.display)

      if (display === "0") state.display = 1;
      else if (number > 0 && Number.isInteger(number)) {
        for (let i = 1; i <= number; i++) {
          result *= i;
        }
        state.display = result
      } else {
        alert("Ông phá máy rồi!");
        state.display = ""
      }
    },

    percent(state) {
      let result = state.display / 100
      checkError(state, result)
    }
  },
  actions: {
    updateDisplay({ commit }, content) {
      commit('updateDisplay', content)
    },

    resetDisplay({ commit }) {
      commit('resetDisplay')
    },

    calculate({ commit }) {
      commit('calculate')
      makeFadeEffect(commit)
    },

    sqr({ commit }) {
      commit('sqr')
      makeFadeEffect(commit)
    },

    sqrt({ commit }) {
      commit('sqrt')
      makeFadeEffect(commit)
    },

    factorial({ commit }) {
      commit('factorial')
      makeFadeEffect(commit)
    },

    percent({ commit }) {
      commit('percent')
      makeFadeEffect(commit)
    }
  }
})
