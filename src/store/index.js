import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import status from './status'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      status
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
}
