<template>
  <div class="achievement">
    <div class="achievement__icon" @click="openedDescription = !openedDescription">
      <div class="achievement-icon__incomplete" v-if="!achievement.completed">
        <div class="incomplete__background">
          <img src="../../../../../assets/info/options/achievements/round.png">
        </div>
        <div class="incomplete__value">{{ achievement.value }}/{{ achievement.max }}</div>
      </div>
      <div class="achievement-icon__complete" v-if="achievement.completed">
        <img :src="achievement.icon">
      </div>
    </div>
    <transition name="flip" mode="out-in">
      <div class="achievement__info name" key="name" v-if="!openedDescription">
        <div class="achievement-info__cloud">
          <img src="../../../../../assets/info/options/achievements/cloud.png">
        </div>
        <div class="achievement-info__text">{{ achievement.name }}</div>
      </div>
      <div class="achievement__info description" key="description"  v-if="openedDescription">
        <div class="achievement-info__cloud">
          <img src="../../../../../assets/info/options/achievements/cloud.png">
        </div>
        <div class="achievement-info__text">{{ achievement.description }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'achievement',
  data () {
    return {
      openedDescription: !this.achievement.completed
    }
  },
  props: {
    achievement: {
      type: Object,
      default: () => {
        return {
          name: '',
          description: '',
          value: 0,
          max: 0,
          icon: '',
          completed: false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../../css/main";
  .achievement{
    width:246px;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    perspective: 500px;
    &:first-child{
      margin-top: 0;
    }
    .achievement__icon{
      width: 53px;
      height:53px;
      flex-shrink: 0;
      @include clickBounce();
      .achievement-icon__incomplete{
        width: 100%;
        height:100%;
        position: relative;
        .incomplete__background{
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height:100%;
          img{
            width:100%;
            height:100%;
          }
        }
        .incomplete__value{
          width:100%;
          height:100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Calibri", sans-serif;
          font-size:20px;
        }
      }
      .achievement-icon__complete{
        width: 100%;
        height:100%;
        img{
          width: 75px;
          margin-left: -6px;
          margin-top: -6px;
          filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.35));
        }
      }
    }
    .achievement__info{
      width: 178px;
      position: relative;
      transform-style: preserve-3d;
      transition-property: transform;
      transition-duration: .3s;
      display: flex;
      &.flip-leave{
        transform: rotateX(0deg);
      }
      &.flip-leave-to{
        transform: rotateX(90deg);
      }
      &.flip-enter{
        transform: rotateX(-90deg);
      }
      &.flip-enter-to{
        transform: rotateX(0deg);
      }
      .achievement-info__cloud{
        position: absolute;
        width:100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.35));
        }
      }
      &.name{
        .achievement-info__text{
          font-size:28px;
          line-height: 1;
          font-family: "Calibri", sans-serif;
          font-weight: bold;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // padding-left: 22px;
          text-transform: uppercase;
          margin: auto;
        }
      }
      &.description{
        .achievement-info__text{
          font-size:22px;
          line-height: 1;
          font-family: "Calibri", sans-serif;
          font-weight: bold;
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 28px;
          color:#5e5e5e;
          margin: auto;
        }
      }
    }
  }
</style>
