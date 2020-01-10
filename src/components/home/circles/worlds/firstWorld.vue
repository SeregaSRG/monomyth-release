<template>
<div class="firstWorld">
  <div class="circle__layout">
    <div class="circle-half__wrapper safari-fix">
      <div class="circle circle--orange"></div>
    </div>
    <p class="threshold">threshold</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'firstWorld'
}
</script>

<style lang="scss" scoped>
  .firstWorld {
    width: 250px;
    height: 250px;
    position: absolute;
  }
  .circle-half__wrapper {
    width: 252px;
    height: 127px;
    overflow: hidden;
    filter: drop-shadow(0 0 13px rgba(0, 0, 0, 0.35));
    position: relative;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border: 1px solid #bb906b;
    .circle {
      box-shadow: none;
      position: absolute;
      &--orange {
        background-color: #e6b184;
      }
    }
  }
  .threshold {
    letter-spacing: .1em;
    text-transform: uppercase;
    position: absolute;
    left: -26px;
    top: 127px;
    FONT-WEIGHT: 600;
    font-size: 13px;
    margin: 0;
  }
</style>
