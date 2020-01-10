<template>
<div class="Splash" @click="skipSplashScreen">
  <div class="title__wrapper">
    <h2 class="title title--low">Campbell’s</h2>
    <h1 class="title title--high">Monomyth</h1>
  </div>
  <img class="logo" src="../../src/assets/ICON.png">
  <p class="sign">by Michael Brizeli</p>
</div>
</template>

<script>
export default {
  name: 'Splash',
  methods: {
    /**
     * Пропустить сплэш скрин
     * используя роутер
     */
    skipSplashScreen () {
      this.$router.push('/home')
    }
  },
  mounted () {
    setTimeout(this.skipSplashScreen, 2000)
  }
}
</script>

<style lang="scss" scoped>
  .Splash {
    padding-top: 46px;
    padding-bottom: 56px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-family: 'Lobster', cursive;
    text-align: center;
    margin: 0;
    line-height: 1;
    color: #393838;
    width: 100%;
    // TODO Добавить тиснение или заменить на картинку
    &--low {
      font-size: 38px;
    }
    &--high {
      font-size: 56px;
    }
  }

  .logo {
    $width: 68px;
    $height: 116px;
    position: absolute;
    width: $width;
    height: $height;
    left: calc(50% - #{$width} / 2);
    top: calc(50% - #{$height} / 2);
  }

  .sign {
    text-align: center;
    font-size: 18px;
    color: #393838;
    font-family: Calibri;
  }
</style>
