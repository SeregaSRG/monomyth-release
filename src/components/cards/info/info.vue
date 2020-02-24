<template>
  <div class="card-layer pointer-events"
       :class="{ 'card-layer--opened': isCardOpened}"
       ref="swipeContainer"
  >
    <div class="card-slide pointer-events"
         ref="swipeContainer"
    >
      <div class="card pointer-events-auto"
           @click="openCard"
           :style="translateY"
      >
        <div class="card__title">
          <p class="card__title-text">
            {{ title }}
          <div class="card__title-icon">
            <img src="../../../assets/info/question.png">
          </div>
        </div>
        <div class="card__content">
          <div class="more-dots" v-if="!isCardOpened">...</div>
          <div class="card__content--quote">
            {{ text }}
          </div>
          <transition name="text-appear" appear>
            <div class="card__content--text"
                 v-if="isCardOpened"
            >
              <div class="card__content--text-title">Campbell</div>
              <pre class="card__content--text-text">
              {{ text }} {{ text }}
            </pre>
              <div class="card__content--navigations">
                <div class="card__content--navigations-image"
                     @click.stop="closeCard"
                ><img src="../../../assets/X.png"></div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {},
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
    },
    title () {
      if (this.$route.query.param === 'cosmo') {
        return ' What is Monomyth'
      } else {
        return ' What is Cosmocycle'
      }
    },
    text () {
      if (this.$route.query.param === 'cosmo') {
        return ' Monomyth, or the Hero\'s Journey, is a basic pattern that its proponents argue is found in many narratives\n' +
          '            from around the world. This widely distributed pattern was described by Joseph Campbell.'
      } else {
        return 'Cosmogonic Cycle symbolically describes the origin and disappearance of the universe. This cycle is associated in myth with the Eternal Hero, whose life mirror the cycles of the cosmos and the world in his own existence.'
      }
    }
  },
  mounted () {
    /*
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
          this.closeCard(event.changedTouches[0].screenY - this.startPoint > 80, event.changedTouches[0].screenY, this.startPoint, event.changedTouches[0].screenY - this.startPoint)
        }
        // TODO в логиге есть потенциальный баг
      }
    }, false)
    swipeContainer.addEventListener('touchend', (event) => {
      this.startPoint = null
      this.translate = 0
    }, false)
     */
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/animations";
  @import "../../../css/main";

  .card__wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .card-layer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
  }

  .card-layer--opened {
    // transition: transform .6s .2s;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: 100% !important;
    border-radius: 15px;

    .card {
      animation: card-animation 1s;
      transition: width .6s .2s, height .6s .2s, max-height 1s .2s;
      width: 96% !important;
      max-width: 375px !important;
      // height: calc(100vh - 2vw + 15px)!important; // скрыли скругление
      max-height: 10000px !important;
      // height: auto!important;
      overflow-y: scroll;
    }

    .card__content {
      transition: width .6s .2s, height .6s .2s, max-height 1s .2s;
      max-height: 10000px !important;
    }

    .card-slide {
      transition: height .6s .2s;
      height: 100% !important;
      // overflow-y: scroll!important;
    }

    .card__content--quote {
      height: auto !important;
    }

    .card-cycle .card__content--text {
      max-width: 310px !important;

      &-text {
        max-height: 100000px !important;
        overflow: visible !important;
      }

      &-title {
        margin-left: 0 !important;
      }
    }
  }

  .card-slide {
    flex-shrink: 0;
    width: 100%;
    height: 522px;
    display: flex;
    padding-bottom: 0!important;
    @include resolution(320) {
      height: 458px!important;
    }

    .card {
      margin: auto;
      width: 310px;
      // height: 425px;
      height: 100%;
      max-height: 522px;
      @include resolution(320) {
        max-height: 458px!important;
      }
      border-radius: 15px;
      // overflow: hidden;
      box-shadow: rgba(0, 0, 0, .35) 7px 7px 15px;
      background-color: #f2f2f2;
      // transition: max-height 1s ease-in;
      .card__title {
        width: 100%;
        height: 375px;
        @include resolution(320) {
          height: 300px!important;
        }
        font-size: 42px;
        color: #f2f2f2;
        background-color: #0a0a0a;
        font-family: 'Lobster', sans-serif;
        border-radius: 15px 15px 0 0;
        padding: 16px 0 30px 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;

        .card__title-text {
          font-family: 'Lobster', sans-serif;
          text-align: center;
          font-size: 48px;
          margin: 0;
          line-height: 1.2;
          max-width: 270px;
        }

        .card__title-icon {
          height: 200px;
          @include resolution(320) {
            height: 150px!important;
          }
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
        max-height: 134px;
        padding: 16px 0 16px 0;

        .card__content--quote {
          width: 200px;
          height: 100px;
          margin: 0 auto;
          font-family: 'Calibri', sans-serif;
          font-size: 17px;
          line-height: 1;
          text-align: justify;
          overflow: hidden;
          position: relative;
        }

        .card__content--text {
          font-family: 'MinionPro-It';
          margin: 0 auto;
          width: 270px;
          padding-top: 20px;
          padding-bottom: 20px;

          &-title {
            font-family: 'MinionPro-Semibold';
            font-size: 24px;
          }

          &-text {
            font-family: 'MinionPro-It';
            font-size: 18px;
            line-height: 1;
            text-align: justify;
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
