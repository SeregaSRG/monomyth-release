<template>
  <div class="gift">
    <div class="gift__title">
      Collect All Achievements to Get the PRIZE
    </div>
    <div class="gift__icon">
      <div class="gift-icon__container">
        <div class="gift-icon__background">
          <img src="../../../../assets/info/gifts/gift-border.png">
        </div>
        <img class="gift-icon__icon" src="../../../../assets/info/gifts/gift.png">
      </div>
      <div v-if="false" class="gift-icon__container done">
        <div class="gift-icon__background">
        </div>
        <img class="gift-icon__icon" src="../../../../assets/info/gifts/gift-white.png">
      </div>
    </div>
    <div class="gift__achievements-label">
      ACHIEVEMENTS
    </div>
    <div class="gift__achievements-counter">
      1 / 5
    </div>
  </div>
</template>

<script>
export default {
  name: 'gift'
}
</script>

<style lang="scss" scoped>

  .gift__title {
    width: 100%;
    text-align: center;
    font-family: "Calibri", sans-serif;
    text-shadow: -1px -1px 3px rgba(0, 0, 0, .35);
    font-size: 23px;
    line-height:1.1;
    text-transform: uppercase;
  }
  .gift__icon {
    display: flex;
    justify-content: center;
    padding:34px;
  .gift-icon__container{
    width: 119px;
    height: 119px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  .gift-icon__background {
    position: absolute;
    width: 100%;
    height: 100%;
  img{
    width: 100%;
    height:100%;
  }
  }
  .gift-icon__icon{
    width:78px;
    position: relative;
  }
  &.done{
  .gift-icon__background{
    background-color: #0a0a0a;
    border-radius: 17px;
  }
  }
  }
  }
  .gift__achievements-label{
    width: 100%;
    text-align: center;
    font-family: "Calibri", sans-serif;
    text-shadow: -1px -1px 3px rgba(0, 0, 0, .35);
    font-size: 30px;
  }
  .gift__achievements-counter{
    width: 100%;
    text-align: center;
    font-family: "Calibri", sans-serif;
    text-shadow: -1px -1px 3px rgba(0, 0, 0, .35);
    font-size: 45px;
    line-height: 1.2;
  }
</style>
