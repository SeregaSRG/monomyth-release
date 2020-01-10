<template>
  <div class="main-circle">
    <div class="circle__layout pointer-events">
      <div class="circle yellow-circle">
        <template v-if="openStage !== 'stage'">
          <div class="circle__layout arrow-rotate">
            <div class="arrow arrow--left">
              <img src="../../../assets/home/arrow.png" alt="" class="arrow__image">
            </div>
            <div class="arrow arrow--right">
              <img src="../../../assets/home/arrow.png" alt="" class="arrow__image">
            </div>
          </div>
          <div class="center-line"></div>
        </template>
      </div>
    </div>
    <div class="circle__layout pointer-events" v-if="openStage !== 'stage'">
      <div class="world-name__wrapper pointer-events">
        <p class="world-name pointer-events">ORDINARY WORLD</p>
      </div>
    </div>
    <div class="circle__layout pointer-events" v-if="openStage !== 'stage'">
      <div class="world-name__wrapper world-name__wrapper--bottom pointer-events">
        <p class="world-name pointer-events">TRANSCENDENCE</p>
      </div>
    </div>
    <div class="circle__layout cutted controls">
      <div class="pointer-events-auto cutted control" @click="$store.commit('status/SET_WORLD_INDEX', 1)"></div>
      <div class="pointer-events-auto cutted control" @click="$store.commit('status/SET_WORLD_INDEX', 2)"></div>
    </div>
    <div class="circle__layout pointer-events">
      <div class="world-axis pointer-events-auto" @click="$store.commit('status/SET_CYCLE', 2)"></div>
    </div>
    <div class="circle__layout pointer-events">
      <transition name="fade" mode="out-in">
        <h2 class="title">World<br>axis</h2>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-circle',
  data () {
    return {
    }
  },
  computed: {
    openStage () {
      return this.$store.getters['status/currentCircle']
    }
  }
}
</script>

<style lang="scss" scoped>
  /*
  .yellow-circle {
    animation: rotate 12s linear infinite;
    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
   */
  .circle__layout {
    width: 250px;
    height: 250px;
    display: flex;
    position: absolute;
  }
  .world-name {
    margin: auto;
    text-align: center;
    font-size: 18px;
    padding-top: 15px;
    -webkit-font-smoothing: antialiased;
    backface-visibility: hidden;
    &--selected {
      animation-duration: .3s;
      animation-name: slide1;
      font-weight: 600;
      transition: none;
      transition-delay: .3s;
      transform: scale(1.3, 1.3) translate3d(0,0,0);
      -webkit-backface-visibility: hidden;
    }
    @keyframes slide1 {
      from {
        transform: scale(1, 1) translate3d(0,0,0);
      }
      to {
        transform: scale(1.3, 1.3) translate3d(0,0,0);
        font-weight: 600;
      }
      50% {
        transform: scale(1.5, 1.5) translate3d(0,0,0);
      }
    }
  }
  .world-name__wrapper {
    width: 250px;
    height: 125px;
    display: flex;
    position: relative;

    &--bottom {
      position: absolute;
      top: 125px;

      .world-name {
        padding-top: 0px;
        padding-bottom: 15px;
      }
    }
  }
  .center-line {
    height: 5px;
    width: 100%;
    margin: auto;
    // background-color: #222222;
    background-image: url("../../../assets/line.png");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  // мена цикла
  .cycle-leave-to  {
    .world-axis {
      transition: .7s;
      transform: scale(1.13);
      box-shadow: 0 0 13px rgba(0, 0, 0, 0.0), inset 0 0 25px black;
    }

    .yellow-circle {
      transition: 1s;
      transform: scale(3.5);
      .arrow, .center-line {
        transition: .3s;
        opacity: 0;
      }
    }

    .title, .world-name__wrapper {
      transition: 1s, opacity .3s;
      opacity: 0;
      transform: scale(1)!important;
    }
  }

  .cycleout-enter-to {
    .world-name__wrapper {
      transition: 1s, opacity .5s;
      opacity: 1;
    }
    .yellow-circle {
      transform: scale(1);
      .arrow, .center-line {
        opacity: 1;
      }
    }
  }

  .cycleout-enter-active {
     .yellow-circle {
       transition: 1s;
       .arrow, .center-line {
         animation: opacity 1s;
         @keyframes opacity {
           from { opacity: 0 }
           50% { opacity: 0 }
           to   { opacity: 1 }
         }
       }
     }
   }

  .cycleout-enter {
    .yellow-circle {
      transform: scale(3.5);
      .arrow, .center-line {
        opacity: 0;
      }
    }
  }

  // изначально разжатый заголовок
  .layout-wrapper {
    .title {
      width: 170px!important;
      font-size: 56px!important;
      transform: scale(0.28);
    }
  }

  .world-axis {
    /*
    background-image: url("../../../assets/blackHole.png");
    background-position: center center;
    background-size: cover;
    */
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.35), inset 0 0 25px black;
    margin: auto;
    height: 220px;
    width: 220px;
    display: flex;
    background-color: #222222;
    border-radius: 50%;
    transform: scale(0.34);
  }

  .controls {
    .control {
      width: 250px;
      height: 125px;
      position: absolute;
    }
    .control:nth-child(1) {
      top: 0;
    }
    .control:nth-child(2) {
      top: 125px;
    }
  }

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

  .arrow-rotate {
    animation: rotate 12s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }
</style>
