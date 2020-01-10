<template>
<div class="secondWorld">
  <div class="circle__layout">
    <div class="circle-half__wrapper safari-fix">
      <div class="circle circle--blue"></div>
    </div>
  </div>
  <p class="threshold">threshold</p>
</div>
</template>

<script>
export default {
  name: 'secondWorld'
}
</script>

<style lang="scss" scoped>
  .secondWorld {
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
    border: 1px solid #658087;
    .circle {
      box-shadow: none;
      position: absolute;
      top: -100%;
      &--blue {
        background-color: #81a3ac;
      }
    }
  }
  .threshold {
    letter-spacing: .1em;
    text-transform: uppercase;
    position: absolute;
    left: 200px;
    top: 105px;
    FONT-WEIGHT: 600;
    font-size: 13px;
    margin: 0;
  }
</style>
