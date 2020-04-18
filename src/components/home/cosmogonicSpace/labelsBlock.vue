<template>
    <div class="labels"
      @click="openTexts"
    >
      <div class="label"
           :class="{
               'covert': currentCycleStage !== 3 && currentCircle === 'cycleStage',
               'label--big': currentCycleStage === 3
            }"
           @click.stop="setStage(3)"
      >
      <img  src="../../../assets/home/cosmo-stages/WAKING.png">
      </div>
      <div class="label"
           :class="{
               'covert': currentCycleStage !== 4 && currentCircle === 'cycleStage',
               'label--big':  currentCycleStage === 4
            }"
           @click.stop="setStage(4)"
      >
        <img  src="../../../assets/home/cosmo-stages/DISSOLUTIONS.png">
      </div>
      <div class="label"
           :class="{
               'covert': currentCycleStage !== 1 && currentCircle === 'cycleStage',
               'label--big':  currentCycleStage === 1
            }"
           @click.stop="setStage(1)"
      >
        <img  src="../../../assets/home/cosmo-stages/DEEPSLEEP.png">
      </div>
      <div class="label"
           :class="{
               'covert': currentCycleStage !== 2 && currentCircle === 'cycleStage',
               'label--big':  currentCycleStage === 2
            }"
           @click.stop="setStage(2)"
      >
        <img  src="../../../assets/home/cosmo-stages/EMANATIONS.png">
      </div>
    </div>
</template>

<script>/*
  :class="{
               'covert': stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
            }"
   */
export default {
  name: 'labels',
  data () {
    return {
      stages: []
    }
  },
  methods: {
    setStage (stage) {
      this.$store.commit('status/SET_CYCLE_STAGE', stage)
      this.sound('Stages')
    },
    openTexts () {
      if (this.currentCycleStage) {
        this.$store.commit('status/SET_TRANSITIONS_TEXTS', true)
        this.sound('ToСard')
      }
    }
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    },
    currentCycleStage () {
      return this.$store.getters['status/currentCycleStage']
    },
    displayedStages () {
      if (this.currentCircle === 'act') {
        switch (this.currentAct) {
          case 1:
            return [0, 6, 7]
          case 2:
            return [3, 4, 5]
          case 3:
            return [1, 2]
        }
      }
      if (this.currentCircle === 'world') {
        switch (this.currentWorld) {
          case 1:
            return [0, 1, 7]
          case 2:
            return [3, 4, 5]
        }
      }
      return []
    },
    whenAnimateLabels () {
      if (this.currentCircle === 'act') {
        return this.currentAct + this.currentCircle
      }
      if (this.currentCircle === 'world') {
        return this.currentWorld + this.currentCircle
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/onCircle";

  .cycleout-leave-to {
    .labels {
      opacity: 0;
    }
  }

  .labels {
    position: absolute;
    width: 300px;
    height: 300px;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    @include onCircle(0, 4, 260, 0, 360, 10, 10);

    .label:nth-child(1) {
      img {
        margin-bottom: 24px;
        height: 15px;
      }
    }

    .label:nth-child(2) {
      img {
        width: 32px;
      }
    }

    .label:nth-child(3) {
      img {
        margin-top: 24px;
        height: 15px;
      }
    }

    .label:nth-child(4) {
      img {
        width: 32px;
      }
    }

    .label {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      &--big {
       transform: scale(1.25);
      }

      .label__text {
        margin: auto;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Calibri', sans-serif;

        &--big {
          font-size: 20px;
        }
      }
    }
  }
</style>
