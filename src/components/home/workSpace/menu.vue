<template>
  <div class="menu"
       :class="{ covert: currentCircle === 'act' || currentCircle === 'world' || currentCircle === 'stage'}"
  >
    <div class="menu__button" @click="removeAD">
      <img class="menu__image" src="../../../assets/home/noads.png">
    </div>
    <router-link to="info?param=cosmo" tag="div" class="menu__button">
      <img class="menu__image" src="../../../assets/home/_.png">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'menu',
  methods: {
    removeAD () {
    }
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    }
  },
  mounted () {
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
