<template>
<div class="firstActCircle">
  <div class="circle__layout"
  >
    <div class="circle-fourth__wrapper safari-fix pointer-events-auto"
         @click="openTexts"
    >
      <div class="circle">
        <div class="arrow arrow--left">
          <img src="../../../../assets/home/arrow.png" alt="" class="arrow__image">
        </div>
      </div>
    </div>
  </div>
  <div class="circle__layout">
    <div class="text__wrapper">
      <p class="text__act">ACT III</p>
      <p class="text__act-name">RETURN</p>
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .thirdActCircle {
    width: 250px;
    height: 250px;
    position: absolute;
  }
  .circle-fourth__wrapper {
    width: 127px;
    height: 127px;
    overflow: hidden;
    filter: drop-shadow(0 0 13px rgba(0, 0, 0, 0.35));
    position: relative;
    margin-left: 124px;
    border-radius: 0 100% 0 0;
    border: 1px solid #ab9853;
    .circle {
      box-shadow: none;
      background-color: #E7C85A;
      position: absolute;
      left: -100%;
      width: 248px;
    }
  }
  .text__wrapper {
    position: absolute;
    height: 50px;
    left: -14px;
    top: 170px;
    .text__act, .text__act-name {
      margin: 0;
      padding: 0;
      line-height: 0.9;
    }
    .text__act {
      font-size: 22px;
      font-weight: 600;
      margin-left: 56px;
    }
    .text__act-name {
      font-size: 42px;
      font-weight: 600;
    }
  }
</style>
