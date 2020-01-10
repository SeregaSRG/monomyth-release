/* eslint-disable */
import router from '../router'
import store from '../store'
import { uuid } from 'vue-uuid'
import routesControl from '../services/routesControl'

let onDeviceReady = () => {
  if (store.state.params.firstStart) {
    if (typeof device !== 'undefined') {
      store.commit('user/SET_GUID', device.uuid+'-'+uuid.v4())
      store.commit('user/SET_OS_TYPE', device.platform )
    } else {
      store.commit('user/SET_GUID', 'ac300-'+uuid.v4())
      store.commit('user/SET_OS_TYPE', 'Android' )
    }
    store.dispatch('user/setGuid')
      .then((e) => {
        store.commit('params/FIRST_START_DONE')
        console.log('user/setGuid', e)
      })
      .catch((e) => {
        console.error('user/setGuid', e)
      })
  }
  store.commit('params/SET_KEYBOARD_OPEN_STATUS', false)
  window.addEventListener('keyboardWillShow', onKeyboardShow, false);
  window.addEventListener('keyboardWillHide', onKeyboardHide, false);

}

let onKeyboardHide = () => {
  store.commit('params/SET_KEYBOARD_OPEN_STATUS', false)
}

let onKeyboardShow = () => {
  store.commit('params/SET_KEYBOARD_OPEN_STATUS', true)
}

let onOnline = () => {

}

let onOffline = () => {

}

//  cordova.fireDocumentEvent('backbutton'); for testing in console
let onBackbutton = (e) => {
}

let onPause = () => {

}

let onResumen = () => {

}

if (navigator.userAgent.match(/Windows|Mac OS/)) {
  onDeviceReady()
}

document.addEventListener("deviceready", onDeviceReady, false)
document.addEventListener('online', onOnline, false)
document.addEventListener('offline', onOffline, false)
document.addEventListener('backbutton', onBackbutton, false)
document.addEventListener('pause', onPause, false)
document.addEventListener('resumen', onResumen, false)
