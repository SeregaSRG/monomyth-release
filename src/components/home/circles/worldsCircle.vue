<template>
  <div class="worlds-circle layout-wrapper" id="worlds">
    <div class="circle__layout">
      <div class="circle circle--gray">
        <p class="world-name"></p>
      </div>
    </div>
    <transition name="light-bounce">
      <first-world v-if="currentWorld === 1" key="1"></first-world>
      <second-world v-if="currentWorld === 2" key="2"></second-world>
    </transition>
    <div class="circle__layout pointer-events">
      <div class="world-name__wrapper pointer-events-auto" @click="setWorld(1)">
        <p class="world-name pointer-events"
           :class="{ 'world-name--selected': currentWorld === 1 }"
        >ORDINARY WORLD</p>
      </div>
    </div>
    <div class="circle__layout pointer-events">
      <div class="world-name__wrapper world-name__wrapper--bottom pointer-events-auto" @click="setWorld(2)">
        <p class="world-name pointer-events"
           :class="{ 'world-name--selected': currentWorld === 2 }"
        >TRANSCENDENCE</p>
      </div>
    </div>
  </div>
</template>

<script>
import firstWorld from './worlds/firstWorld'
import secondWorld from './worlds/secondWorld'
export default {
  name: 'worldsCircle',
  components: { firstWorld, secondWorld },
  methods: {
    setWorld (index) {
      if (this.currentWorld === index) {
        this.$router.push('/transitions?page=worlds')
      }
      this.$store.commit('status/SET_WORLD_INDEX', index)
    }
  },
  computed: {
    currentWorld () {
      return this.$store.getters['status/currentWorldIndex']
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle__layout {
    width: 250px;
    height: 250px;
    display: flex;
    position: absolute;
  }
  .circle {
    background-color: #dadada;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: auto;
    display: flex;
    position: relative;
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
</style>
