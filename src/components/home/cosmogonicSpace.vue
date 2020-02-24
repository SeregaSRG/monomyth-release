<template>
  <div class="cosmogonicSpace" v-click-outside="close" id="cosmogonicSpace">
    <div class="swipe-container" ref="swipeContainer" :class="{ isMoved: isMoved }" :style="`transform: translate3d(${translate}px, 0, 0)`">
      <div class="layout-wrapper">
        <labels-block></labels-block>
        <main-circle></main-circle>
      </div>
    </div>
  </div>
</template>

<script>
import labelsBlock from './cosmogonicSpace/labelsBlock'
import mainCircle from './cosmogonicSpace/mainCircle'

export default {
  name: 'cosmogonicSpace',
  components: {
    labelsBlock,
    mainCircle
  },
  data () {
    return {
      openStage: false,
      touchstartX: null,
      touchstartY: null,
      translate: 0,
      isMoved: false,
      timer: null
    }
  },
  methods: {
    close () {
      this.$store.commit('status/SET_NO_CYCLE_STAGE')
    }
  },
  directives: {
    clickOutside: {
      bind (el, { value }) {
        el._handler = e => {
          // если не открыт попап
          if (!el.contains(e.target) && (document.getElementById('paralax__bg'))) {
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
    let el = document.getElementById('cosmogonicSpace')
    el.addEventListener('touchstart', (e) => {
      this.timer = setTimeout(() => {
        this.$store.commit('status/SET_DREAM', true)
      }, 1700)
    })
    document.addEventListener('touchend', (e) => {
      this.$store.commit('status/SET_DREAM', false)
      clearInterval(this.timer)
    })
    /*
    let swipeContainer = this.$refs['swipeContainer']
    swipeContainer.addEventListener('touchstart', (event) => {
      this.touchstartX = event.changedTouches[0].screenX
      this.touchstartY = event.changedTouches[0].screenY
    }, false)
    swipeContainer.addEventListener('touchmove', (event) => {
      if (this.touchstartX > event.changedTouches[0].screenX) {
        this.translate = (130 / 16) * Math.cbrt(this.touchstartX - event.changedTouches[0].screenX) * -1
      } else {
        this.translate = ((130 / 16) * Math.cbrt(event.changedTouches[0].screenX - this.touchstartX))
      }
      this.$nextTick(() => {
        this.isMoved = true
      })
    }, false)
    swipeContainer.addEventListener('touchend', (event) => {
      this.isMoved = false
      this.translate = 0
    }, false)
    */
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/onCircle";
  @import "../../css/main";
  .cosmogonicSpace {
    height: 340px;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
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
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.35);
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
</style>
