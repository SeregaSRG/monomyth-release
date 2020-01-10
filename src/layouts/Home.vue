<template>
<div class="Home"
  :class="{ 'home--cycle': currentCycle === 2} "
>
  <transition :name="currentCycle === 2 ? 'cycle' : 'cycleout'">
    <div class="journey" v-if="currentCycle === 1" key="1">
      <!-- <h1 class="title title--high" @click="$store.commit('status/SET_NO_CIRCLE')">HERO’S JOURNEY</h1> -->
      <div class="title title--high"><img src="../assets/HEROSJOURNEY.png"></div>
      <div class="journey__content" style="transform: scale(1);">
        <home-menu></home-menu>
        <work-space style="z-index: 10"></work-space>
        <home-acts style="z-index: 1"></home-acts>
      </div>
    </div>
    <div class="cosmogonic" v-if="currentCycle === 2" key="2">
      <!-- <h1 class="title title--high" @click="$store.commit('status/SET_NO_CIRCLE')">COSMOGONIC CYCLE</h1> -->
      <div class="title title--high"><img src="../assets/COSMOGONICCYCLE.png"></div>
      <div class="cosmogonic__content" style="transform: scale(1);">
        <cosmogonic-menu></cosmogonic-menu>
        <cosmogonic-space></cosmogonic-space>
        <bell></bell>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <cycles v-if="isTransitionsTexts"></cycles>
  </transition>
  <ad v-if="false"></ad>
</div>
</template>

<script>
import homeMenu from '../components/home/workSpace/menu'
import cosmogonicMenu from '../components/home/cosmogonicSpace/menu'
import workSpace from '../components/home/workSpace'
import cosmogonicSpace from '../components/home/cosmogonicSpace'
import homeActs from '../components/home/workSpace/acts'
import bell from '../components/home/cosmogonicSpace/bell'
import ad from '../components/global/ad'
import cycles from './Cycles'

export default {
  components: {
    cycles,
    cosmogonicMenu,
    cosmogonicSpace,
    homeMenu,
    workSpace,
    homeActs,
    bell,
    ad
  },
  name: 'Home',
  computed: {
    currentCycle () {
      return this.$store.getters['status/currentCycle']
    },
    isTransitionsTexts () {
      return this.$store.getters['status/isTransitionsTexts']
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/main";
  .Home {
    padding-top: 36px;
    padding-bottom: 57px; // for ad banner
    position: relative;
    width: 100%;
    min-height: 100%;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    @include resolution(320) {
      padding-top: 6px;
    }
  }

  .home--cycle {
    transition: 0s;
    transition-delay: 1s;
    background-color: #ecde1b;
  }

  .title {
    font-family: 'Lobster', cursive;
    text-align: center;
    margin: 0;
    line-height: 1;
    color: #393838;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    img {
      width: 85%;
    }
    &--high {
      font-size: 40px;
      text-shadow: 1px 1px 3px white;
    }
  }

  .start-menu {
    width: 100%;
  }

  .cycle-leave-active {
    transition: 1s;
    position: absolute;
    width: 100%;
  }
  .cycle-enter-active {
    transition-delay: .7s!important;
    transition: .3s;
    position: absolute;
    width: 100%;
  }

  .cycle-enter {
    opacity: 0;
  }

  .cycleout-leave-active {
    transition: 1s, opacity 1s;
    position: absolute;
    width: 100%;
  }
  .cycleout-enter-active {
    transition: 1s, opacity .3s;
    position: absolute;
    width: 100%;
  }

  .cycleout-enter {
    opacity: 0;
  }

  .cycleout-leave-to {
    z-index: 100;
    .title--high, .menu, .bell, .labels {
      opacity: 0!important;
    }
  }
</style>
