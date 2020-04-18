import Vue from 'vue'

Vue.mixin({
  methods: {
    sound (name) {
      let audio = new Audio()
      audio.src = require('../assets/sounds/' + name + '.mp3')
      audio.autoplay = true
      return audio
    }
  }
})
