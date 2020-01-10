<template>
<div class="workSpace" v-click-outside="close">
  <div class="swipe-container" ref="swipeContainer" :class="{ isMoved: isMoved }" :style="`transform: translate3d(${translate}px, 0, 0)`">
    <div class="layout-wrapper">
      <labels-block></labels-block>
      <transition name="fade">
        <main-circle v-if="currentCircle === '' || currentCircle === 'stage'"></main-circle>
        <acts-circle v-if="currentCircle === 'act'"></acts-circle>
        <worlds-circle v-if="currentCircle ==='world'"></worlds-circle>
      </transition>
      <transition name="fade">
        <stages-circle v-if="currentCircle === 'stage'"></stages-circle>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import labelsBlock from './workSpace/labelsBlock'
import stagesCircle from './circles/stagesCircle'
import mainCircle from './circles/mainCircle'
import actsCircle from './circles/actsCircle'
import worldsCircle from './circles/worldsCircle'

export default {
  name: 'workSpace',
  components: {
    labelsBlock,
    stagesCircle,
    mainCircle,
    actsCircle,
    worldsCircle
  },
  data () {
    return {
      openStage: false,
      touchstartX: null,
      touchstartY: null,
      translate: 0,
      isMoved: false
    }
  },
  methods: {
    close () {
      this.$store.commit('status/SET_NO_CIRCLE')
    }
  },
  directives: {
    clickOutside: {
      bind (el, { value }) {
        el._handler = e => {
          // если не открыт попап
          if (!el.contains(e.target) && (document.getElementById('stages') || document.getElementById('worlds'))) {
            e.preventDefault()
            e.stopPropagation()
            value(e)
          }
        }
        document.addEventListener('click', el._handler, { capture: true })
      },

      unbind (el) {
        document.removeEventListener('click', el._handler, { capture: true })
      }
    }
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    }
  },
  mounted () {
    let swipeContainer = this.$refs['swipeContainer']
    swipeContainer.addEventListener('touchstart', (event) => {
      this.touchstartX = event.changedTouches[0].screenX
      this.touchstartY = event.changedTouches[0].screenY
    }, false)
    swipeContainer.addEventListener('touchmove', (event) => {
      if (this.touchstartX > event.changedTouches[0].screenX) {
        this.translate = 27 + ((130 / 9) * Math.cbrt(this.touchstartX - event.changedTouches[0].screenX) * -1)
      } else {
        this.translate = ((130 / 9) * Math.cbrt(event.changedTouches[0].screenX - this.touchstartX)) - 27
      }
      this.$nextTick(() => {
        this.isMoved = true
      })
    }, false)
    swipeContainer.addEventListener('touchend', (event) => {
      this.isMoved = false
      this.translate = 0
    }, false)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/onCircle";
  .workSpace {
    height: 340px;
    width: 100%;
    display: flex;
    position: relative;
    // overflow: hidden;
    .swipe-container {
      height: 340px;
      width: 100%;
      display: flex;
      position: absolute;
      right: 0; // max 130
      &.isMoved {
        transition: 0s;
      }
    }
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
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.35),  inset 0 0 25px black;
    display: flex;
    position: relative;
  }
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
</style>
