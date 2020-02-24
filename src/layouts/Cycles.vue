<template>
  <div class="cycles">
    <div class="cycles__header">
      <div class="cycles__header-content">
        <div @click="closeCycles" class="back-button">
          <img src="../assets/back-button--black.png">
        </div>
        <div class="title">
          <img src="../assets/stages/CYCLES.png">
        </div>
        <!--  компенсируем размер места справа для центрирования тайтла с помощью флексбокс-->
        <div class="back-button"></div>
      </div>
    </div>
    <div class="cycles__content">
    </div>
    <div class="cycles__footer">
      <div class="dots">
        <div class="dot"
             v-for="(listItem, $index) in cyclesList.cycles"
             :key="listItem.id"
             :class="{ 'dot__active': $index === currentPage }"
        ></div>
      </div>
      <div class="ad"></div>
    </div>
    <cards-list
      :list="cyclesList.cycles"
      :currentPage.sync="currentPage"
      :type="'cycle'"
    ></cards-list>
  </div>
</template>

<script>
import CardsList from '../components/card-swiper/cards-list'

export default {
  name: 'Texts',
  components: {
    CardsList
  },
  data () {
    return {
      isCardOpened: false,
      currentPage: 0,
      cyclesList: {
        'cycles': [
          {
            'id': 1,
            'title': 'End of the\nCosmos',
            'shortDescription': 'Splitting of the\nform and\nextinction of energy.',
            'quotation': '...“The mighty hero of extraordinary powers — able to lift Mount Govardhan on a finger, and to fill himself with the terrible glory of the universe — is each of us: not the physical self visible in the mirror, but the... king within. Krishna declares: "I am the Self, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings." This, precisely, is the sense of the prayers for the dead, at the moment of personal... issolution: that the individual should now return to his pristine knowledge of the world -creative divinity who during life was reflected within his heart. And as the created form of the individual must dissolve, so that of the universe also.“'
          },
          {
            'id': 2,
            'title': 'Primordial\nHero',
            'shortDescription': 'Highest point manifestations of being.',
            'quotation': '...“The emanations have condensed, the field of consciousness constricted. Where formerly causal bodies were visible, now only their secondary effects come to focus in the little hard-fact pupil of the human eye. The cosmogonic cycle is now to be carried forward, therefore, not by the gods, who have become invisible, but by the heroes, more or less human in character, through whom the world destiny is realized. This is the line where creation myths begin to give place to legend — as in the Book of Genesis, following the expulsion from the garden. Metaphysics yields to prehistory, which is dim and vague at first, but becomes gradually precise in detail. The heroes become less and less fabulous, until at last, in the final stages of the various local traditions, legend opens into the common daylight of recorded time.“'
          },
          {
            'id': 3,
            'title': 'Mother\nUniverse',
            'shortDescription': 'Birth and\ntransformation\nof energy and matter.',
            'quotation': '...“The world-generating spirit of the father passes into the manifold of earthly experience through a transforming medium — the mother of the world. She is a personification of the primal element named in the second verse of Genesis, where we read that "the spirit of God moved upon the face of the waters.“ In the Hindu myth, she is the female figure through whom the Self begot all creatures. More abstractly understood, she is the worldbounding frame: "space, time, and causality" — the shell of the cosmic egg. More abstractly still, she is the lure that moved the Self-brooding Absolute to the act of creation.“'
          },
          {
            'id': 4,
            'title': 'The Universal\nRound',
            'shortDescription': 'Equilibrium<br>point of<br>complete rest.',
            'quotation': '...“As the consciousness of the individual rests on a sea of night into which it descends in slumber and out of which it mysteriously wakes, so, in the imagery of myth, the universe is precipitated out of, and reposes... upon, a timelessness back into which it again dissolves. And as the mental and physical health of the individual depends on an orderly flow of vital forces into the field of waking day from the unconscious dark, so again in myth, the continuance of the cosmic order is assured only by a controlled flow of power from the source. The gods are symbolic personifications of the laws governing this flow. The gods come into existence with the dawn of the world and dissolve with the twilight. They are not eternal in the sense that the night is eternal. Only from the shorter span of human existence does the round of a cosmogonic eon seem to endure.“'
          }
        ]
      }

    }
  },
  methods: {
    openCard (e) {
      this.isCardOpened = !this.isCardOpened
    },
    closeCycles () {
      this.$store.commit('status/SET_TRANSITIONS_TEXTS', false)
    }
  },
  computed: {
    currentCycleStage () {
      return this.$store.getters['status/currentCycleStage']
    }
  },
  created () {
    this.currentPage = this.currentCycleStage - 1
    if (!this.$route.query.hasOwnProperty('page')) {
      return
    }
    if (this.$route.query.page === 'worlds') {
      this.currentPage = 1
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../components/card-swiper/texts-animations";

  .cycles {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-family: 'Calibri', sans-serif;
    display: flex;
    flex-direction: column;
    transition: background-color .7s;
    background-color: #cec213;

    &__header {
      height: 60px;
      width: 100%;
      display: flex;

      &-content {
        width: 270px;
        height: 100%;
        margin: auto;
        padding-top: calc((60px - 40px) / 2);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .back-button {
          width: 40px;
          height: 40px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title {
          height: 24px;

          img {
            height: 100%;
          }
        }
      }
    }

    &__content {
      height: 425px;
      width: 100%;
    }

    &__footer {
      height: calc(100vh - 60px - 425px);
      width: 100%;

      .dots {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding-top: 20px;

        .dot {
          margin: 0 5px;
          width: 12px;
          height: 12px;
          background-image: url("../assets/dot-round.png");
          background-position: center center;
          background-size: contain;
          background-repeat: no-repeat;

          &__active {
            background-image: url("../assets/dot.png");
          }
        }
      }
    }
  }
</style>
