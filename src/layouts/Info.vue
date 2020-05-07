<template>
  <div class="info">
    <div class="info__header">
      <router-link to="home" class="card-page__back-button">
        <img src="../assets/back-button.png">
      </router-link>
      <div class="card-page__title">
        <img class="card-page__title-image" src="../assets/info/INFO.png">
      </div>
    </div>
    <!--<cards-list
      @cardChange="cardChange"
      :cards="cards"
      :index.sync="index"
    ></cards-list>-->
    <cards-list></cards-list>
    <div class="info__buttons">
      <div class="info__buttons-container">
        <div class="info__button" :class="((index === 0) ? 'selected' : '')" @click="index = 0">
          <img src="../assets/info/buttons/info.png">
        </div>
        <div class="info__button" :class="((index === 1) ? 'selected' : '')" @click="index = 1">
          <img src="../assets/info/buttons/options.png">
        </div>
        <div class="info__button" :class="((index === 2) ? 'selected' : '')" @click="index = 2">
          <img src="../assets/info/buttons/gifts.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  components: {
    cardsList: () => import('../components/card-swiper/cards-list')
  },
  data () {
    return {
      cards: [
        {
          name: 'info',
          component: () => import('../components/cards/info/info')
        },
        {
          name: 'options',
          component: () => import('../components/cards/info/options')
        },
        {
          name: 'gifts',
          component: () => import('../components/cards/info/gifts')
        }
      ],
      index: 0
    }
  },
  methods: {
    cardChange (e) {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/main";

  .info {
    font-family: 'Calibri', sans-serif;
    width: 100%;
    height: 100%;
    background-color: #3a3a3a;
    display: flex;
    flex-direction: column;
    @include supports-safe-area-insets {
      padding-top: env(safe-area-inset-top);
    }

    .info__header {
      width: 100%;
      max-width: 600px;
      margin: 15px auto 5px auto;
      padding: 0 30px;
      height: 46px;
      display: flex;

      .card-page__back-button {
        width: 46px;
        height: 46px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .card-page__title {
        flex-grow: 1;
        padding-right: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        color: #f2f2f2;

        &-image {
          height: 27px;
          margin: auto;
        }
      }
    }

    .info__buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      height: 50px;
      flex-shrink: 0;

      .info__buttons-container {
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .info__button {
          transition: .3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

          &.selected {
            transform: scale(1.5);
          }

          img {
            height: 20px;
          }
        }
      }
    }
  }
</style>
