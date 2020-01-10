<template>
  <div class="cards-list">
      <component
          :key="card.name"
          v-for="card in cards"
          :is="card.component"
          :style="translateX"
          class="animate"
          v-touch-swipe="swipeHandler"
      ></component>
  </div>
</template>

<script>
export default {
  name: 'CardsList',
  props: {
    cards: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentCard: null
    }
  },
  methods: {
    selectCard (index) {
      this.currentCard = this.cards[index]
    },
    nextCard () {
      if (this.index + 1 >= this.cards.length) {
        return
      }
      this.$emit('update:index', this.index + 1)
    },
    prevCard () {
      if (this.index - 1 < 0) {
        return
      }
      this.$emit('update:index', this.index - 1)
    },
    swipeHandler (e) {
      if (e.direction === 'right') {
        this.prevCard()
      } else if (e.direction === 'left') {
        this.nextCard()
      }
    }
  },
  computed: {
    translateX () {
      return `transform: translateX(-${this.index * 100}vw);`
    }
  },
  mounted () {
    this.selectCard(this.index)
  }
}
</script>

<style lang="scss" scoped>
  .cards-list {
    height: 100%;
    display: flex;
    overflow: hidden;
  }

  .animate {
    transition: transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
</style>
