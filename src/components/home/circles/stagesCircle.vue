<template>
  <div class="stages-circle" id="stages">
    <div class="circle__layout cutted">
      <transition appear name="stage">
        <div
            class="world-axis"
            :class="{
              'world-axis--threshold': (currentStage.name === 'THRESHOLD' || currentStage.name === 'RETURN&nbsp;THRESHOLD'),
            }"
            v-if="currentCircle === 'stage'"
        >
        </div>
      </transition>
    </div>
    <transition appear name="stage">
    <div class="circle__layout cutted arrow__wrapper-circle__layout">
        <div class="arrow__wrapper"
             :style="`transform: rotate(${rotate}deg); opacity: ${arrowOpacity}`"
        >
          <div class="arrow"></div>
        </div>
    </div>
    </transition>
    <div class="circle__layout cutted"
      @click="openText"
    >
      <transition name="fade-no-abs" appear :duration="100" mode="out-in">
        <p class="title title--opened" v-html="currentStage.text" :key="currentStage.name"></p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stagesCircle',
  data () {
    return {
      rotate: 0
    }
  },
  methods: {
    openText () {
      if (this.currentStage.name !== null) {
        this.$router.push('/texts')
      }
    }
  },
  watch: {
    'currentStage.id' (n, o) {
      let delta
      if (n > o) {
        delta = n - o
      } else {
        delta = (n + 8 - o)
      }
      if (delta !== 0) {
        if (Math.abs(delta) > 4) {
          this.rotate -= (45 * (8 - Math.abs(delta)))
        } else {
          this.rotate += 45 * Math.abs(delta)
        }
      }
    }
  },
  computed: {
    currentStage () {
      return this.$store.getters['status/currentStage']
    },
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    },
    arrowOpacity () {
      return (this.currentStage.name === 'THRESHOLD' || this.currentStage.name === 'RETURN&nbsp;THRESHOLD') ? 0 : 1
    }
  },
  created () {
    this.rotate = 45 * this.currentStage.id
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/onCircle";

  .cycle-enter-active {
    .world-axis {
      height: 220px;
      width: 220px;
    }
  }

  .world-axis {
    background-image: url("../../../assets/blackHole.png");
    background-position: center center;
    background-size: cover;
    background-color: #222222;
    box-shadow: inset 0 0 25px black;
    margin: auto;
    height: 220px;
    width: 220px;
    display: flex;
    border-radius: 50%;
    transition: .3s;
    position: relative;
    &--opened {
      height: 220px;
      width: 220px;
    }
    &--threshold {
      height: 78px!important;
      width: 250px!important;
      border-radius: 0;
      .arrow {
      }
    }
    &.stage-enter-to {
      height: 220px;
      width: 220px;
    }
    &.stage-enter, &.stage-leave-to {
      transform: scale(0.34);
    }
  }

  .arrow__wrapper {
    height: 220px;
    width: 220px;
    position: relative;
    margin: auto;
    transform: scale(0.34);
    .arrow {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 16px solid black;
      position: absolute;
      left: calc(50% - 10px);
      top: -15px;
    }
  }

  .arrow__wrapper-circle__layout {
    &.stage-enter-to {
      height: 220px;
      width: 220px;
    }
    &.stage-enter, &.stage-leave-to {
      transform: scale(0.34);
    }
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

  .title {
    padding-top: 4px;
    color: white;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    margin: auto;
    width: 220px;
    font-family: 'Lobster', cursive;
    font-size: 28px;
    text-transform: none;
    &.fade-enter-active {
      transition-delay:.3s;
    }

    &--opened {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .light-text {
    font-family: 'Lobster', cursive;
    font-size: 20px;
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

  .rotate-arrow0 {
    &:after {
      transform: rotate(10deg);
    }
  }

  .labels {
    position: absolute;
    width: 300px;
    height: 300px;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    @include onCircle(0, 8, 300, 20, 360, 0, 0);
    .label {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      .label__text {
        margin: auto;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Calibri';
      }
    }
  }
</style>
