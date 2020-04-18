<template>
  <div class="menu"
       :class="{ covert: currentCircle === 'act' || currentCircle === 'world' || currentCircle === 'stage'}"
  >
    <div class="menu__button">
      <img class="menu__image" src="../../../assets/home/back-cosmo.png" @click="back()">
    </div>
    <router-link to="/info" tag="div" class="menu__button">
      <img class="menu__image" src="../../../assets/home/_.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cosmogonicMenu',
  methods: {
    back () {
      this.sound('AxisOut')
      this.$store.commit('status/SET_CYCLE', 1)
    }
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/main";
  .menu {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 22px;
    @include resolution(320) {
      height: 40px;
    }

    &__button {
      margin-top: 10px;
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
    }
  }
</style>
