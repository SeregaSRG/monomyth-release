<template>
  <transition name="light-bounce">
    <div class="labels pointer-events-auto" :key="whenAnimateLabels" @click="$store.commit('status/SET_NO_CIRCLE')">
      <div class="label"
           @click.stop="setStage(stage)"
           v-for="(stage, $index) in stages"
           :key="stage.id"
      >
        <!--<p class="label__text"
           :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }"
           v-if="isDisplay($index, stage)" v-html="stage.name"
        ></p>-->
        <!-- Приходится делать эти ересь, потому что адектным способом не инъектирует картинку реактивно -->
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/CALL.png" v-if="isDisplay($index, stage) && stage.id === 0">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/ELIXIR.png" v-if="isDisplay($index, stage) && stage.id === 1">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/RETURN THRESHOLD.png" v-if="isDisplay($index, stage) && stage.id === 2"
             style="height: 38px"
        >
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/ROAD BACK.png" v-if="isDisplay($index, stage) && stage.id === 3">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/NADIR.png" v-if="isDisplay($index, stage) && stage.id === 4">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/TRIALS.png" v-if="isDisplay($index, stage) && stage.id === 5">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/THRESHOLD.png" v-if="isDisplay($index, stage) && stage.id === 6">
        <img :class="{
               covert: stage.name !== currentStage.name && currentCircle === 'stage',
               'label__text--big': stage.name === currentStage.name && currentCircle === 'stage'
             }" src="../../../assets/stages/labels/AID.png" v-if="isDisplay($index, stage) && stage.id === 7">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'labels',
  data () {
    return {
      stages: [
        {
          id: 0,
          name: 'CALL',
          text: 'The Call <br> to <br> Adventure',
          imgText: require('../../../assets/stages/labels/CALL.png')
        },
        {
          id: 1,
          name: 'ELIXIR',
          text: 'Return<br>with the<br>Elixir',
          imgText: require('../../../assets/stages/labels/ELIXIR.png')
        },
        {
          id: 2,
          name: 'RETURN&nbsp;THRESHOLD',
          text: '<span class="light-text" style="font-family: \'Lobster\', cursive; font-size: 20px;">The Crossing of the</span>Return Threshold',
          imgText: require('../../../assets/stages/labels/RETURN THRESHOLD.png')
          // TODO просто уничтожить это
        },
        {
          id: 3,
          name: 'ROAD BACK',
          text: 'The Road Back',
          imgText: require('../../../assets/stages/labels/ROAD BACK.png')
        },
        {
          id: 4,
          name: 'NADIR',
          text: 'The Supreme Ordeal',
          imgText: require('../../../assets/stages/labels/NADIR.png')
        },
        {
          id: 5,
          name: 'TRIALS',
          text: 'The Road <br> of Trials',
          imgText: '../../../assets/stages/labels/TRIALS.png'
        },
        {
          id: 6,
          name: 'THRESHOLD',
          text: '<span class="light-text" style="font-family: \'Lobster\', cursive; font-size: 20px;">The Crossing of the</span>First Threshold',
          imgText: require('../../../assets/stages/labels/THRESHOLD.png')
        },
        {
          id: 7,
          name: 'AID',
          text: 'Supernatural<br>Aid',
          imgText: require('../../../assets/stages/labels/AID.png')
        }
      ]
    }
  },
  methods: {
    isDisplay ($index, stage) {
      return this.displayedStages.indexOf($index) !== -1 || this.currentCircle === '' || this.currentCircle === 'stage'
    },
    setStage (stage) {
      if (this.currentCircle === '' || this.currentCircle === null || this.currentCircle === 'stage') {
        this.$store.commit('status/SET_STAGE', stage)
      }
    }
  },
  computed: {
    currentCircle () {
      return this.$store.getters['status/currentCircle']
    },
    currentAct () {
      return this.$store.getters['status/currentActIndex']
    },
    currentWorld () {
      return this.$store.getters['status/currentWorldIndex']
    },
    currentStage () {
      return this.$store.getters['status/currentStage']
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

  .labels {
    position: absolute;
    width: 300px;
    height: 300px;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
    @include onCircle(0, 8, 300, 20, 360, 0, 0);

    .label {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      .label__text {
        margin: auto;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Calibri', sans-serif;

        &--big {
          font-size: 20px;
        }
      }

      img {
        height: 16px;
      }
    }
  }

  .cycle-leave-to {
    .labels {
      transition: 1s;
      transform: scale(3.5);
      opacity: 0;
    }
  }
</style>
