<template>
  <div class="acts-circle pointer-events" id="acts">
    <div class="circle__layout"
    >
      <div class="circle">
      </div>
    </div>
    <transition name="light-bounce" appear>
      <first-act v-if="currentAct === 1" key="1"></first-act>
      <secondAct v-if="currentAct === 2" key="2"></secondAct>
      <thirdAct v-if="currentAct === 3" key="3"></thirdAct>
    </transition>
  </div>
</template>

<script>
import firstAct from './acts/firstAct'
import secondAct from './acts/secondAct'
import thirdAct from './acts/thirdAct'
export default {
  name: 'actsCircle',
  components: { firstAct, secondAct, thirdAct },
  computed: {
    currentAct () {
      return this.$store.getters['status/currentActIndex']
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
</style>
