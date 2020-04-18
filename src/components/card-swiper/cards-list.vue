<template>
  <!--
  <div class="cards-swiper">
      <card
          :key="card.name"
          v-for="card in cards"
          :style="translateX"
          class="animate"
      ></card>q
  </div>
  -->
  <div class="card-layer__wrapper pointer-events">
    <div class="card-layer"
         :class="{ 'card-layer--opened': isCardOpened}"
         ref="swipeContainer"
    >
      <div class="card-list pointer-events">
        <template v-if="type !== 'cycle'">
          <card
            v-for="listItem in list"
            :key="listItem.id"
            :card="listItem"
            :type="type"
            @openCard="openCard"
            @closeCard="closeCard"
            :style="translateX"
            class="animate"
            :class="{ 'isMoved': isMoved }"
          ></card>
        </template>
        <template v-else>
          <card-cycle
            v-for="listItem in list"
            :key="listItem.id"
            :card="listItem"
            :type="type"
            @openCard="openCard"
            @closeCard="closeCard"
            :style="translateX"
            class="animate"
            :class="{ 'isMoved': isMoved }"
          ></card-cycle>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import card from './card'
import cardCycle from './cardCycle'
export default {
  name: 'CardsList',
  props: {
    list: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    type: {
      type: String
    }
  },
  components: {
    card, cardCycle
  },
  data () {
    return {
      currentCard: null,
      isCardOpened: false,
      touchstartX: null,
      touchstartY: null,
      translate: 0,
      isMoved: false
    }
  },
  methods: {
    openCard () {
      this.sound('OpenCard')
      this.isCardOpened = true
    },
    closeCard () {
      this.isCardOpened = false
    },
    selectCard (index) {
      this.currentCard = this.cards[index]
    },
    nextCard () {
      if (this.currentPage + 1 >= this.list.length) {
        return
      }
      this.$emit('update:currentPage', this.currentPage + 1)
    },
    prevCard () {
      if (this.currentPage - 1 < 0) {
        return
      }
      this.$emit('update:currentPage', this.currentPage - 1)
    },
    swipeHandler (e) {
      if (this.isCardOpened) {
        return
      }
      if (e.direction === 'right') {
        this.prevCard()
      } else if (e.direction === 'left') {
        this.nextCard()
      }
    },
    getWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
    }
  },
  computed: {
    translateX () {
      return `transform: translateX(${this.translate}px);`
    }
  },
  mounted () {
    const trans = 35
    let swipeContainer = this.$refs['swipeContainer']
    swipeContainer.addEventListener('touchstart', (event) => {
      if (this.isCardOpened) {
        return
      }
      this.touchstartX = event.changedTouches[0].screenX
      this.touchstartY = event.changedTouches[0].screenY
    }, false)
    swipeContainer.addEventListener('touchmove', (event) => {
      if (this.isCardOpened) {
        return
      }
      if (event.changedTouches[0].screenX < this.touchstartX - trans || event.changedTouches[0].screenX > this.touchstartX + trans) {
        this.$nextTick(() => {
          this.isMoved = true
        })
      }
      if (event.changedTouches[0].screenX < this.touchstartX) {
        this.translate = -(this.currentPage * this.getWidth()) - (this.touchstartX - event.changedTouches[0].screenX - 20)
      }
      if (event.changedTouches[0].screenX > this.touchstartX) {
        this.translate = -(this.currentPage * this.getWidth()) + event.changedTouches[0].screenX - this.touchstartX + 20
      }
    }, false)
    swipeContainer.addEventListener('touchend', (event) => {
      if (this.isCardOpened) {
        return
      }
      let dela = Math.abs(-this.currentPage * this.getWidth() - this.translate)
      if (-this.currentPage * this.getWidth() - this.translate < 0 && dela >= this.getWidth() / 3) {
        this.prevCard()
      }
      if (-this.currentPage * this.getWidth() - this.translate > 0 && dela >= this.getWidth() / 3) {
        this.nextCard()
      }
      this.isMoved = false
      this.$nextTick(() => {
        this.translate = -this.currentPage * this.getWidth()
      })
    }, false)
  },
  created () {
    this.translate = this.getWidth() * -this.currentPage
  }
}
</script>

<style lang="scss">
  @import "texts-animations";
  @import "../../css/main";
  .cards-swiper {
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  .animate {
    transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .isMoved {
    transition: none!important;
  }

  .card-layer__wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .card-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translate3d(0, 60px, 0);
    @include supports-safe-area-insets {
      transform: translate3d(0, calc(60px + env(safe-area-inset-top)), 0);
    }
    overflow: hidden;
    > * {
      transition: .3s;
    }

    .card-list {
      width: 100%;
      height: 425px;
      display: flex;
      flex-direction: row;
    }
  }
  .card-layer--opened {
    transition: transform .6s .2s;
    transform: translate3d(0, 0, 0);
    .card {
      animation: card-animation 1s;
      transition: width .6s .2s, height .6s .2s, max-height 1s .2s;
      width: 96%!important;
      max-width: 375px!important;
      // height: calc(100vh - 2vw + 15px)!important; // скрыли скругление
      max-height: 10000px!important;
      // height: auto!important;
    }
    .card__content {
      transition: width .6s .2s, height .6s .2s, max-height 1s .2s;
      max-height: 10000px!important;
    }
    .card-slide {
      transition: height .6s .2s;
      height: 100vh !important;
      overflow-y: scroll;
      padding-bottom: 100px;
    }
    .card__content--quote {
      height: auto!important;
    }
    .card-cycle .card__content--text {
      max-width: 270px!important;
      &-text {
        max-height: 100000px!important;
        overflow: visible!important;
      }
      &-title {
        margin-left: 0!important;
      }
    }
  }
</style>
