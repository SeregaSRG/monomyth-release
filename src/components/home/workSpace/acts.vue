<template>
<div class="acts"
     :class="{ covert: currentCircle === 'world' || currentCircle === 'stage'}"
>
  <div class="act__button"
       :class="{ covert: currentAct !== 1 && currentCircle === 'act'}"
       @click="$store.commit('status/SET_ACT_INDEX', 1)"
       v-ripple
  >
    <p class="act__text">Act <span class="act__text--bold">one</span></p>
  </div>
  <div class="act__button"
       :class="{ covert: currentAct !== 2 && currentCircle === 'act'}"
       @click="$store.commit('status/SET_ACT_INDEX', 2)"
       v-ripple
  >
    <p class="act__text">Act <span class="act__text--bold">two</span></p>
  </div>
  <div class="act__button"
       :class="{ covert: currentAct !== 3 && currentCircle === 'act'}"
       @click="$store.commit('status/SET_ACT_INDEX', 3)"
       v-ripple
  >
    <p class="act__text">Act <span class="act__text--bold">three</span></p>
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
  }
}
</script>

<style lang="scss" scoped>
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

      &:nth-child(even) {
        margin-top: 84px - 52px;
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
      &--bold {
        font-size: 16px;
        font-weight: bold;
      }
    }

  }
</style>
