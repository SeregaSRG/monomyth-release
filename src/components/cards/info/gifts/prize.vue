<template>
  <div class="prize">
    <div class="prize__congratuations">
      <img src="../../../../assets/info/gifts/congratulations.png">
    </div>
    <div class="prize__title-1">
      You've got
    </div>
    <div class="prize__title-2">
      A journey poster
    </div>
    <div class="prize__poster">
      <img src="../../../../assets/info/gifts/poster.png">
    </div>
    <div class="prize__download-buttons options__buttons">
      <div class="options__button">
        <div class="options-button__icon">
          <img src="../../../../assets/info/gifts/download.png" class="options__restore-icon">
        </div>
        <div class="options-button__label">
          PNG 15.2 Mb
        </div>
      </div>
      <div class="options__button">
        <div class="options-button__icon">
          <img src="../../../../assets/info/gifts/download.png" class="options__restore-icon">
        </div>
        <div class="options-button__label">
          PDF 15.2 Mb
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'prize'
}
</script>

<style lang="scss" scoped>
  @import "../../../../css/options";
  .prize__congratuations{
    width: 225px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .prize__title-1, .prize__title-2{
    font-family: Calibri, sans-serif;
    color:#0a0a0a;
    text-shadow: -2px -2px 10px rgba(0,0,0,.35);
    text-align: center;
    text-transform: uppercase;
  }
  .prize__title-1{
    font-size:15px;
    margin-top:10px;
  }
  .prize__title-2{
    font-size:30px;
    line-height: 1;
  }
  .prize__poster{
    margin-top:10px;
    img{
      display: block;
      width: 135px;
      margin: 0 auto;
    }
  }
  .prize__download-buttons{
    width: 206px;
    margin:0 auto;
  }
</style>
