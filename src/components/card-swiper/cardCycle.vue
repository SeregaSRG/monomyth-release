<template>
  <div class="card-slide pointer-events-auto"
       ref="swipeContainer"
  >
    <div class="card card-cycle"
         @click="openCard"
         :style="translateY"
    >
      <div class="card__title">
        <p class="card__title-text">
          {{ card.title }}
        </p>
      </div>
      <div class="card__content">
        <div class="card__content--quote" v-html="card.shortDescription">
        </div>
          <div class="card__content--text">
            <div class="card__content--text-title">Campbell</div>
            <div class="card__content--text-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ card.quotation }}</div>
            <div class="card__content--navigations">
              <div class="card__content--navigations-image"
                   @click.stop="closeCard"
              ><img src="../../assets/X.png"></div>
              <div class="card__content--navigations-text"><img src="../../assets/Sharetext.png"></div>
              <div class="card__content--navigations-image"><img src="../../assets/Share.png"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    card: {
      type: Object,
      required: true
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      isCardOpened: false,
      translate: 0,
      startPoint: null
    }
  },
  methods: {
    openCard (e) {
      this.isCardOpened = true
      this.$emit('openCard', true)
    },
    closeCard (e) {
      this.isCardOpened = false
      this.$emit('closeCard', true)
      this.startPoint = null
      this.translate = 0
    }
  },
  computed: {
    translateY () {
      return `transform: translateY(${this.translate}px);`
    }
  },
  mounted () {
    let swipeContainer = this.$refs['swipeContainer']
    swipeContainer.addEventListener('touchmove', (event) => {
      if (swipeContainer.scrollTop === 0 && this.isCardOpened === true) {
        if (!this.startPoint) {
          this.startPoint = event.changedTouches[0].screenY
        }
        if (event.changedTouches[0].screenY - this.startPoint > 0) {
          this.translate = event.changedTouches[0].screenY - this.startPoint
        }
        if (event.changedTouches[0].screenY - this.startPoint > 80) {
          this.closeCard()
        }
        // TODO в логиге есть отенциальный баг
      }
    }, false)
    swipeContainer.addEventListener('touchend', (event) => {
      this.startPoint = null
      this.translate = 0
    }, false)
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/animations";
  .card-slide {
    flex-shrink: 0;
    width: 100%;
    height: 425px;
    display: flex;
    padding-top: 2vw;
    .card--cycle--opened {
      .card__content {
        max-height: 10000px !important;
      }
      .card__content--text {
        max-width: 270px!important;
        .card__content--text-text {
          max-height: none !important;
          overflow: auto !important;
        }
        .card__content--text-title {
          margin-left: 0!important;
        }
      }
    }
    .card {
      // особый вид карточки
      &--cycle {
        .card__title {
          height: 150px !important;
        }
        .card__content {
          max-height: 274px;
        }
        .card__content--quote {
          font-family: 'Calibri' !important;
          font-size: 26px !important;
          text-align: center !important;
          letter-spacing: .1em!important;
          line-height: 0.9 !important;
          width: 226px!important;
        }
        .card__content--text {
          padding-top: 0!important;
          max-width: 200px;
          margin: 0 auto;
          &-text {
            max-height: 92px!important;
            overflow: hidden!important;
          }
          &-title {
            margin-left: -18px!important;
          }
        }
      }
      margin: auto;
      width: 270px;
      // height: 425px;
      max-height: 425px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: rgba(0,0,0,.35) 7px 7px 15px;
      background-color: #f2f2f2;
      // transition: max-height 1s ease-in;
      .card__title {
        width: 100%;
        height: 150px;
        font-size: 42px;
        color:#f2f2f2;
        background-color: #0a0a0a;
        font-family: 'Lobster',sans-serif;
        padding: 16px 0 30px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        .card__title-text {
          font-family: 'Lobster',sans-serif;
          text-align: center;
          font-size: 48px;
          margin: 0;
          line-height: 1.2;
          max-width: 270px;
        }
        .card__title-icon {
          height: 120px;
          display: flex;
          img {
            height: 100%;
            margin: auto;
          }
          &--transitions {
            height: 220px;
          }
          &--cycle {
            display: none;
          }
        }
      }
      .card__content {
        width: 100%;
        max-height: 274px;
        padding: 16px 0 16px 0;
        .card__content--quote {
          height: 100px!important;
          margin: 0 auto;
          font-family: 'Calibri', sans-serif;
          overflow: hidden;
          font-size: 26px;
          text-align: center;
          letter-spacing: .1em;
          line-height: 0.9;
          width: 228px;
          flex-shrink: 0;
        }

        .card__content--text {
          font-family: 'MinionPro-It';
          margin: 0 auto;
          width: 270px;
          padding-bottom: 20px;
          padding-top: 0;
          max-width: 200px;
          &-text {
            max-height: 92px;
            overflow: hidden;
          }
          &-title {
            margin-left: -18px;
          }

          &-title {
            font-family: 'MinionPro-Semibold';
            font-size: 24px;
          }

          &-text {
            font-family: 'MinionPro-It';
            font-size: 18px;
            line-height: 1;
          }

          .card__content--navigations {
            height: 100px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding-top: 50px;
            &-image {
              padding-top: 4px;
              width: 70px;
              height: 70px;
              display: flex;
              img {
                width: 100%;
                margin: auto;
              }
            }
            &-text {
              margin: 0 10px 0 6px;
              width: 60px;
              display: flex;
              img {
                width: 100%;
                margin: auto;
              }
            }
          }
        }
      }
    }
  }
</style>
