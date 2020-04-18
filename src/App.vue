<template>
  <div id="q-app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap&subset=cyrillic');
  @import "assets/fonts/boot.css";
  @import "/css/onCircle";

  html {
    -webkit-font-smoothing: antialiased
  }

  body {
    -webkit-transform: translate3d(0, 0, 0);
  }

  #q-app {
    width: 100vw;
    height: 100vh;
    background-color: #e5e5e5;
    overflow: hidden;
    /*
    padding-top: constant(safe-area-inset-top);
    padding-top: calc(36px + env(safe-area-inset-top));
    box-sizing: border-box;
    */
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
    position: absolute;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .fade-no-abs-enter-active, .fade-no-abs-leave-active {
    transition: opacity .2s;
  }

  .fade-no-abs-enter, .fade-no-abs-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .covert {
    opacity: .2;
  }

  .light-bounce-enter-active {
    transition: opacity .2s;
    transform-origin: 50% 50%;
    animation-duration: .3s;
    animation-name: slidein;
  }

  .light-bounce-leave-active {
    transition: opacity .2s;
  }

  .light-bounce-enter, .light-bounce-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  @keyframes slidein {
    from {
      transform: scale(1, 1) translate3d(0, 0, 0);
    }

    to {
      transform: scale(1, 1) translate3d(0, 0, 0);
    }

    50% {
      transform: scale(1.08, 1.08) translate3d(0, 0, 0);
    }
  }

  * {
    transition: .3s;
    font-family: Calibri;
    -webkit-font-smoothing: antialiased;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
  }

  .covert {
    opacity: .2;
  }

  .layout-wrapper {
    width: 250px;
    height: 250px;
    margin: auto;

    .circle__layout {
      width: 250px;
      height: 250px;
      display: flex;
      position: absolute;
    }
  }

  .circle {
    background-color: #ecde1b;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: auto;
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.35);
    display: flex;
    position: relative;
  }

  .layout-wrapper {
    .title {
      padding-top: 4px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;
      margin: auto;
      width: 72px;

      &--opened {
        width: 220px;
        font-family: 'Lobster', cursive;
        font-size: 36px;
        text-transform: none;
      }
    }

    /*
    .arrow {
      position: absolute;
      &--left {
        top: 12px;
        left: 22px;
        transform: rotate(180deg);
      }
      &--right {
        bottom: 12px;
        right: 22px;
        transform: rotate(0);
      }
    }
    */
  }

  .cutted {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  .cutted--deep {
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    * div {
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
  }

  .pointer-events {
    pointer-events: none;
  }

  .pointer-events-auto {
    pointer-events: auto;
  }

  .safari-fix {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }

  .text__wrapper {
    color: #393838;
  }

  .more-dots {
    position: absolute;
    right: 16px;
    bottom: 8px;
    font-size: 20px;
  }

  pre {
    white-space: pre-wrap;
  }

  .global-star {
    background-image: url("./assets/Star.png");
    background-size: contain;
    width: 24px;
    height: 24px;
    margin: 18px auto 22px auto;
  }

  .main-wrapper {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 500px;
  }
</style>
