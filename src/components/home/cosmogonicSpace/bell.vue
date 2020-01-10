<template>
  <div class="bell"
  >
    <div class="bell__button pointer-events-auto" @click.native="ding">
    </div>
  </div>
</template>

<script>
export default {
  name: 'acts',
  methods: {
    ding () {
      alert('Динь динь')
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/main";
  .bell {
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: center;
    padding: 0 50px;
  }

  .bell__button {
    margin-top: 18px;
    width: 84px;
    height: 84px;
    background-image: url("../../../assets/home/bell.png");
    background-position: center center;
    background-size: contain;
    @include resolution(320) {
      margin-top: 0;
    }
  }

  // _old
  .acts {
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
  }

  .act {
    &__button {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: rgb(227, 182, 25);
      border: 1px solid #ae8b00;
      box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.35);
      display: flex;
      position: relative;
      border-radius: 50%;
      overflow: hidden;

      &:nth-child(even) {
        margin-top: 84px - 52px;
      }
    }

    &__text {
      font-size: 14px;
      color: #393838;
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      margin: auto;
      font-family: Calibri;
      &--bold {
        font-size: 16px;
        font-weight: bold;
      }
    }

  }
</style>
