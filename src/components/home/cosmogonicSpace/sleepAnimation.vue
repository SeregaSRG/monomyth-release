<template>
  <transition name="sleep-fade" appear>
    <div class="sleep">
      <div class="star"
           v-for="star in starList"
           :key="star.id"
           :style="`top: ${star.top}px; left: ${star.left}px;`"
      ></div>
      <div id="text-paralax"
           data-calibrate-y="true"
           data-calibrate-x="true"
      >
        <div class="text" data-depth="0.6" style="transition: none">
          <p>Campbell</p>
          <p>Dream</p>
          <p>is the</p>
          <p>personalized</p>
          <p>Myth,</p>
          <p>Myth</p>
          <p>the</p>
          <p>depersonalized</p>
          <p>Dream</p>
          <p>Campbell</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'sleepAnimation',
  data () {
    return {
      animate: null,
      starList: [],
      timer: null,
      timer2: null,
      timer3: null,
      timer4: null,
      currentCound: null
    }
  },
  methods: {
    initParalax () {
      let scene = document.getElementById('text-paralax')
      let parallaxInstance = new Parallax(scene, {
        relativeInput: true
      })
      parallaxInstance.friction(0.2, 0.2)
      parallaxInstance.friction(0.2, 0.2)
      parallaxInstance.enable()
    }
  },
  mounted () {
    this.currentCound = this.sound('Dream')
    this.timer = setInterval(() => {
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
    }, 300)
    this.timer2 = setInterval(() => {
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
    }, 400)
    this.timer3 = setInterval(() => {
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
      this.starList.push({
        id: Math.random(),
        left: Math.floor(Math.random() * Math.floor(screen.width)),
        top: Math.floor(Math.random() * Math.floor(screen.height))
      })
    }, 500)
    this.timer4 = setInterval(() => {
      this.starList.splice(0, 86)
    }, 6000)
    this.initParalax()
  },
  beforeDestroy () {
    clearInterval(this.timer)
    clearInterval(this.timer2)
    clearInterval(this.timer3)
    clearInterval(this.timer4)
    this.currentCound.pause()
  }
}
</script>

<style lang="scss" scoped>
  .star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: whitesmoke;
    opacity: .8;
    overflow: hidden;
    &:nth-child(even) {
      animation: wawe 1s;
    }
    &:nth-child(odd) {
      animation: wawe 1.5s;
    }
    transform: scale(0) translate3d(0, 0, 0);
    @keyframes wawe {
      from {
        transform: scale(0) translate3d(0, 0, 0);
      }
      50% {
        transform: scale(1) translate3d(0, 0, 0);
      }
      to {
        transform: scale(0) translate3d(0, 0, 0);
      }
    }
  }

  .sleep-fade-enter-active, .sleep-fade-leave-active {
    transition: opacity .5s;
    position: absolute;
  }

  .sleep-fade-enter, .sleep-fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .sleep {
    // animation: sleep 10s linear infinite;
    width: 100vw;
    height: 100vh;
    background-color: #222222;
    position: absolute;
    top: 0;
    left: 0;
  }
  .text {
    width: 290px;
    position: relative;
    padding-top: 90px;
    margin: 0 auto;
    animation: text 6s linear;
    @keyframes text {
      from {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    p {
      padding: 0;
      margin: 0;
      color: #141414;
      font-weight: bold;
      font-family: 'Arial Rounded MT Bold';
      line-height: 1.1;
      &:nth-child(1) {
        font-size: 20px;
        padding-left: 10px;
      }
      &:nth-child(2) {
        line-height: 1.2;
        font-size: 62px;
        padding-left: 80px;
      }
      &:nth-child(3) {
        line-height: 0.8;
        font-size: 42px;
        padding-left: 30px;
      }
      &:nth-child(4) {
        line-height: 0.8;
        font-size: 44px;
        padding-left: 14px;
      }
      &:nth-child(5) {
        line-height: 1;
        font-size: 76px;
        padding-left: 8px;
      }
      &:nth-child(6) {
        line-height: 0.8;
        font-size: 62px;
        padding-left: 120px;
      }
      &:nth-child(7) {
        line-height: 0.8;
        font-size: 46px;
        padding-left: 44px;
      }
      &:nth-child(8) {
        line-height: 0.8;
        font-size: 38px;
        padding-left: 13px;
      }
      &:nth-child(9) {
        line-height: 0.8;
        font-size: 76px;
        padding-left: 0;
      }
      &:nth-child(10) {
        padding-top: 16px;
        line-height: 1.2;
        font-size: 20px;
        padding-left: 10px;
        transform: rotateY(180deg);
      }
    }
  }
</style>
