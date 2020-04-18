/* eslint-disable */
import router from '../router'
import store from '../store'

let onDeviceReady = () => {
  if(window.MobileAccessibility){
    window.MobileAccessibility.usePreferredTextZoom(false)
    console.log('MobileAccessibility')
  }
  // window.MobileAccessibility.usePreferredTextZoom(false)
}

let onKeyboardHide = () => {
}

let onKeyboardShow = () => {
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
