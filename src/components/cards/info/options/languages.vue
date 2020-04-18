<template>
  <div class="options__languages">
    <div class="options__buttons">
      <div class="options__button">
        <div class="options-button__icon">
          <img src="../../../../assets/info/en.png" class="options__ads-icon">
        </div>
        <div class="options-button__label">
          ENGLISH
        </div>
      </div>
      <div class="options__button">
        <div class="options-button__icon">
          <img src="../../../../assets/info/ru.png" class="options__restore-icon">
        </div>
        <div class="options-button__label">
          РУССКИЙ
        </div>
      </div>
    </div>
    <div class="options-languages__text">
      <div class="options-languages__title">
        HELLO WORLD!
      </div>
      <div class="options-languages__description">
        We want to add as many languages as possible...
      </div>
      <div class="options-languages__description">
        So, if you want to help with the translations, please email us!
      </div>
    </div>
    <div class="options__back-button" @click="$emit('back')">
      <img src="../../../../assets/info/options/back.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'languages'
}
</script>

<style lang="scss" scoped>
  @import "../../../../css/options";
  .options__languages {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    .options__buttons {
      width: 200px;
    }
    .options-languages__text {
      margin-top: 26px;
      width: 236px;
      text-align: center;
      font-family: "Calibri", sans-serif;
      text-shadow: -1px -1px 3px rgba(0, 0, 0, .35);
      margin-bottom: 20px;
      .options-languages__title {
        font-size: 30px;
        line-height: 25px;
        margin-top: 10px;
      }
      .options-languages__description {
        margin-top: 18px;
        font-size: 19px;
        line-height: 18px;
      }
    }
  }

</style>
