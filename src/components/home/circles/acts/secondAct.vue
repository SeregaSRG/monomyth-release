<template>
<div class="secondActCircle">
  <div class="circle__layout"
  >
    <div class="circle-half__wrapper safari-fix pointer-events-auto"
         @click="openTexts"
    >
      <div class="circle">
        <div class="arrow arrow--right">
          <img src="../../../../assets/home/arrow.png" alt="" class="arrow__image">
        </div>
      </div>
    </div>
  </div>
  <div class="circle__layout">
    <div class="text__wrapper">
      <p class="text__act">ACT II</p>
      <p class="text__act-name">INITIATION</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'firstActCircle',
  methods: {
    openTexts () {
      this.$router.push('/transitions?page=acts')
      this.sound('ToСard')
    }
  }
}
</script>

<style lang="scss" scoped>
  .secondActCircle {
    width: 250px;
    height: 250px;
    position: absolute;
  }
  .circle-half__wrapper {
    width: 252px;
    height: 127px;
    margin-top: 125px;
    overflow: hidden;
    filter: drop-shadow(0 0 13px rgba(0, 0, 0, 0.35));
    position: relative;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    border: 1px solid #ab9853;
    .circle {
      box-shadow: none;
      background-color: #E7C85A;
      position: absolute;
      top: -100%;
      width: 248px;
    }
  }
  .text__wrapper {
    position: absolute;
    height: 50px;
    left: -28px;
    top: 42px;
    .text__act, .text__act-name {
      margin: 0;
      padding: 0;
      line-height: 0.9;
    }
    .text__act {
      font-size: 22px;
      font-weight: 600;
      margin-left: 25px;
    }
    .text__act-name {
      font-size: 42px;
      font-weight: 600;
    }
  }
  .circle {
    border: 1px solid #ab9853;
  }
  .arrow {
    position: absolute;
    &--left {
      top: 12px;
      left: 22px;
      transform: rotate(180deg);
    }
    &--right {
      bottom: 12px;
      right: 22px;
      transform: rotate(0);
    }
  }
</style>
