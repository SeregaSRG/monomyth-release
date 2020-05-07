<template>
  <div class="card-slide pointer-events-auto"
       ref="swipeContainer"
  >
    <div class="card"
         @click="openCard"
         :style="translateY"
    >
      <div class="card__title"
           :class="{ 'card__title--cycle': type === 'cycle' }"
      >
        <p class="card__title-text"
          :class="{'card__title-text--acts': card.title === 'Acts', 'card__title-text--words': card.title === 'Worlds'}"
        >
          {{ card.title }}
        </p>
        <div class="card__title-icon"
          :class="{ 'card__title-icon--transitions': type === 'transitions' }"
        >
          <img :src="card.image">
        </div>
      </div>
      <div class="card__content">
        <div class="more-dots" v-if="!isCardOpened">...</div>
        <div class="card__content--quote">
          {{ card.shortDescription }}
        </div>
        <transition name="text-appear" appear>
          <div class="card__content--text"
               v-if="isCardOpened"
          >
            <div class="card__content--text-title">Campbell</div>
            <pre class="card__content--text-text" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + card.quotation"></pre>
            <div class="card__content--navigations">
              <div class="card__content--navigations-image"
                   @click.stop="closeCard"
              ><img src="../../assets/X.png"></div>
              <div class="card__content--navigations-text" @click="shareText"><img src="../../assets/Sharetext.png"></div>
              <div class="card__content--navigations-image" @click="shareText"><img src="../../assets/Share.png"></div>
            </div>
          </div>
        </transition>
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
    shareText () {
      this.sound('Buttons')
    },
    openCard (e) {
      this.sound('OpenCard')
      this.isCardOpened = true
      this.$emit('openCard', true)
    },
    closeCard (e) {
      this.sound('OpenCard')
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
          this.closeCard(event.changedTouches[0].screenY - this.startPoint > 80, event.changedTouches[0].screenY, this.startPoint, event.changedTouches[0].screenY - this.startPoint)
        }
        console.log()
        // TODO в логиге есть потенциальный баг
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
  @import "../../css/main";
  .card-slide {
    flex-shrink: 0;
    width: 100%;
    height: 425px;
    display: flex;
    padding-top: 10px;
    .card {
      margin: auto;
      width: 310px;
      // height: 425px;
      max-height: 425px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: rgba(0,0,0,.35) 7px 7px 15px;
      background-color: #f2f2f2;
      // transition: max-height 1s ease-in;
      .card__title {
        width: 100%;
        height: 290px;
        font-size: 42px;
        color:#f2f2f2;
        background-color: #0a0a0a;
        font-family: 'Lobster',sans-serif;
        border-radius: 15px 15px 0 0;
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
          &--acts {
            color: #f5d5bb;
          }
          &--words {
            color: #e0f9ff;
          }
        }
        .card__title-icon {
          height: 150px;
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
          padding-top: 10px;
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
              @include clickBounce();
            }
            &-text {
              margin: 0 10px 0 6px;
              width: 60px;
              display: flex;
              img {
                width: 100%;
                margin: auto;
              }
              @include clickBounce();
            }
          }
        }
      }
    }
  }
</style>
