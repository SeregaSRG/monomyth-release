<template>
<div class="acts"
     :class="{ covert: currentCircle === 'world' || currentCircle === 'stage'}"
>
  <div class="act__button"
       :class="{ covert: currentAct !== 1 && currentCircle === 'act'}"
       @click="setAct(1)"
  >
    <p class="act__text act__text--one"></p>
  </div>
  <div class="act__button"
       :class="{ covert: currentAct !== 2 && currentCircle === 'act'}"
       @click="setAct(2)"
       v-ripple
  >
    <p class="act__text act__text--two"></p>
  </div>
  <div class="act__button"
       :class="{ covert: currentAct !== 3 && currentCircle === 'act'}"
       @click="setAct(3)"
       v-ripple
  >
    <p class="act__text act__text--three"></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'acts',
  computed: {
    currentAct () {
      return this.$store.getters['status/currentActIndex']
    },
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    }
  },
  methods: {
    setAct (index) {
      this.$store.commit('status/SET_ACT_INDEX', index)
      this.sound('ActsWorlds')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/main";
  .acts {
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
  }

  .act {
    &__button {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: rgb(227, 182, 25);
      border: 1px solid #ae8b00;
      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.35);
      display: flex;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      // animation-name: bounce;
      animation: bounce 5s linear infinite;
      @include clickBounce();

      @keyframes bounce1 {
        from {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        to {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        5% {
          transform: scale(1.2, 1.2) translate3d(0,0,0);
        }
        10% {
          transform: scale(1, 1) translate3d(0,0,0);
        }
      }
      @keyframes bounce2 {
        from {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        to {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        15% {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        20% {
          transform: scale(1.2, 1.2) translate3d(0,0,0);
        }
        25% {
          transform: scale(1, 1) translate3d(0,0,0);
        }
      }
      @keyframes bounce3 {
        from {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        to {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        30% {
          transform: scale(1, 1) translate3d(0,0,0);
        }
        35% {
          transform: scale(1.2, 1.2) translate3d(0,0,0);
        }
        40% {
          transform: scale(1, 1) translate3d(0,0,0);
        }
      }

      &:nth-child(even) {
        margin-top: 84px - 52px;
      }

      &:nth-child(1) {
        animation: bounce1 5s ease-in-out infinite;
      }
      &:nth-child(2) {
        animation: bounce2 5s ease-in-out infinite;
      }
      &:nth-child(3) {
        animation: bounce3 5s ease-in-out infinite;
      }
    }

    &__text {
      font-size: 14px;
      color: #393838;
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      margin: auto;
      font-family: Calibri;
      width: 100%;
      height: 28px;
      &--bold {
        font-size: 16px;
        font-weight: bold;
      }
      &--one {
        background-image: url("../../../assets/ONE.png");
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      }
      &--two {
        background-image: url("../../../assets/TWO.png");
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      }
      &--three {
        background-image: url("../../../assets/THREE.png");
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        height: 26px;
      }
    }

  }
</style>
