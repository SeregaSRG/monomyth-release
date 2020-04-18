<template>
<div class="firstActCircle">
  <div class="circle__layout"
  >
    <div class="circle-fourth__wrapper safari-fix pointer-events-auto"
      @click="openTexts"
    >
      <div class="circle pointer-events">
        <div class="arrow arrow--left">
          <img src="../../../../assets/home/arrow.png" alt="" class="arrow__image">
        </div>
      </div>
    </div>
  </div>
  <div class="circle__layout">
    <div class="text__wrapper">
      <p class="text__act">ACT I</p>
      <p class="text__act-name">DEPARTURE</p>
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
  .firstActCircle {
    width: 250px;
    height: 250px;
    position: absolute;
  }
  .circle-fourth__wrapper {
    width: 125px;
    height: 125px;
    overflow: hidden;
    filter: drop-shadow(0 0 13px rgba(0, 0, 0, 0.35));
    border-radius: 100% 0 0 0;
    border: 1px solid #ab9853;
    .circle {
      box-shadow: none;
      background-color: #E7C85A;
    }
  }
  .text__wrapper {
    position: absolute;
    height: 56px;
    left: 86px;
    top: 170px;
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
