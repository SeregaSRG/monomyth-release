<template>
  <div class="main-circle">
    <div class="circle__layout pointer-events">
      <div class="circle black-circle">
        <div class="arrow arrow--left">
          <img src="../../../assets/home/arrow-white.png" alt="" class="arrow__image">
        </div>
        <div class="arrow arrow--right">
          <img src="../../../assets/home/arrow-white.png" alt="" class="arrow__image">
        </div>
      </div>
    </div>
    <transition name="onfade">
      <div class="circle__layout paralax__container pointer-events" id="scene" data-calibrate-y="true"
           data-calibrate-x="true" v-show="currentCircle === 'cycleStage'">
        <div class="paralax" data-depth="0.6">
          <div class="paralax__bg"
               id="paralax__bg"
               v-if=" currentCycleStage === 1 ||  currentCycleStage === 2 ||  currentCycleStage === 3 ||  currentCycleStage === 4"
               :class="{
               'paralax__bg-a': currentCycleStage === 1,
               'paralax__bg-b': currentCycleStage === 3,
               'paralax__bg-c': currentCycleStage === 2,
               'paralax__bg-d': currentCycleStage === 4,
            }"
          ></div>
        </div>
      </div>
    </transition>
    <div class="circle__layout pointer-events" id="scene2" data-calibrate-y="true" data-calibrate-x="true"
         v-show="currentCircle !== 'cycleStage'">
      <h2 class="title" data-depth="0.7">D R E A M</h2>
    </div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'main-circle',
  data () {
    return {}
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    },
    currentCycleStage () {
      return this.$store.getters['status/currentCycleStage']
    }
  },
  mounted () {
    let scene = document.getElementById('scene')
    let parallaxInstance = new Parallax(scene, {
      relativeInput: true
    })
    parallaxInstance.friction(0.2, 0.2)
    parallaxInstance.friction(0.2, 0.2)
    parallaxInstance.enable()

    let scene2 = document.getElementById('scene2')
    let parallaxInstance2 = new Parallax(scene2, {
      relativeInput: true
    })
    parallaxInstance2.friction(0.2, 0.2)
    parallaxInstance2.friction(0.2, 0.2)
    parallaxInstance2.enable()
  }
}
</script>

<style lang="scss" scoped>
  .main-circle {
    width: 250px;
    height: 250px;
  }

  .center-line {
    height: 1px;
    width: 100%;
    margin: auto;
    background-color: #222222;
  }

  .paralax__container {
    overflow: hidden;
    border-radius: 50%;
    box-shadow: inset 0 0 25px black;
    .paralax {
      width: 250px;
      height: 250px;
      transition: 0s;

      .paralax__bg {
        transition: 0s;
        position: absolute;
        width: 440px;
        height: 440px;
        top: -101px; // TODO ba image size
        left: -95px;
        background-position: center center;

        &-a {
          background-image: url("../../../assets/home/cosmo-stages/WAKINGBg.png");
        }

        &-b {
          background-image: url("../../../assets/home/cosmo-stages/Dissol.png");
        }

        &-c {
          background-image: url("../../../assets/home/cosmo-stages/SleepBg.png");
        }

        &-d {
          background-image: url("../../../assets/home/cosmo-stages/EmanateBg.png");
        }
      }
    }
  }

  .cycleout-leave-to {
    .main-circle {
      transition: 1s;
      transform: scale(0.3);
      animation: opacity 1s;

      .arrow {
        opacity: 0;
      }

      @keyframes opacity {
        from { opacity: 1 }
        80% { opacity: 1 }
        to   { opacity: 0 }
      }
    }

    .title {
      transition: 1s;
      opacity: 0;
      transform: scale(0.3) !important;
    }
  }

  .title {
    width: 160px;
    font-size: 36px;
  }

  .black-circle {
    // background-color: #222222;
    // box-shadow: inset 0 0 25px black;
    position: relative;
    animation: rotate 12s linear infinite;
    background-image: url("../../../assets/blackHole.png");
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
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
    width: 86px;
    height: 86px;

    img {
      width: 100%;
    }

    &--left {
      top: 10px;
      right: 28px;
      transform: rotate(180deg);
    }

    &--right {
      bottom: 10px;
      left: 28px;
      transform: rotate(0);
    }
  }

  .onfade-enter-active, .onfade-leave-active {
    transition: opacity .2s;
  }

  .onfade-enter, .onfade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
