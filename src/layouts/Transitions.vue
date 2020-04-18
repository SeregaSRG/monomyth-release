<template>
  <div class="transitions"
       :class="{ 'acts--color': currentPage === 0, 'worlds--color': currentPage === 1 }"
  >
    <div class="transitions__header">
      <div class="transitions__header-content">
        <router-link tag="div" to="home" class="back-button">
          <img src="../assets/back-button--black.png">
        </router-link>
        <div class="title">
          <img src="../assets/stages/TRANSITIONS.png">
        </div>
        <!--  компенсируем размер места справа для центрирования тайтла с помощью флексбокс-->
        <div class="back-button"></div>
      </div>
    </div>
    <div class="transitions__content">
    </div>
    <div class="transitions__footer">
      <div class="dots">
        <div class="dot"
             v-for="(listItem, $index) in transitionsList.transitions"
             :key="listItem.id"
             :class="{ 'dot__active': $index === currentPage }"
        ></div>
      </div>
      <div class="ad"></div>
    </div>
    <cards-list
      :list="transitionsList.transitions"
      :currentPage.sync="currentPage"
      :type="'transitions'"
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
      transitionsList: {
        'transitions': [
          {
            'id': 1,
            'title': 'Acts',
            'shortDescription': 'The stages of the Journey may be divided into three acts: Departure, Initiation, and Return. "Departure" deals with the hero\'s adventure prior to the... quest; "Initiation" deals with the hero\'s many adventures along the way; and "Return" deals with the hero\'s return home with knowledge and powers acquired on the journey.',
            'quotation': '...“The mythological hero, setting forth from his common-day hut or castle, is lured, carried away, or else voluntarily proceeds, to the threshold of adventure. There he encounters a shadow presence that guards the passage. The hero may defeat or conciliate this power and go alive into the kingdom of the dark, or be slain by the opponent and descend in death.”<div class="global-star"></div>...“Beyond the threshold, then, the hero journeys through a world of unfamiliar yet strangely intimate forces, some of which severely threaten him, some of which give magical aid. When he arrives at the nadir of the mythological round, he undergoes a supreme ordeal and gains his reward. The triumph may be represented as the hero\'s sexual union with the goddess-mother of the world, his recognition by the father-creator, his own divinization, or again — if the powers have remained unfriendly to him — his theft of the boon he came to gain; intrinsically it is an expansion of consciousness and therewith of being.”<div class="global-star"></div>...“The final work is that of the return. If the powers have blessed the hero, he now sets forth under their protection; if not, he flees and is pursued. At the return threshold the transcendental powers must remain behind; the hero re-emerges from the kingdom of dread. The boon that he brings restores the world.”',
            'image': require('../assets/transitions-icons/1.png')
          },
          {
            'id': 2,
            'title': 'Worlds',
            'shortDescription': 'In a Monomyth, the hero begins in the ordinary world, and receives a call to enter an unknown place of strange powers and events. The hero who accepts the call to strange world must face tasks and trials, either alone or with assistance. If the hero survives, he may achieve a great gift or "boon". If the hero returns successfully, the boon or gift may be used to improve the world.',
            'quotation': '...“The two worlds, the divine and the human, can be pictured only as distinct from each other — different as life and death, as day and night. The hero adventures out of the land we know into darkness; there he accomplishes his adventure, or again is simply lost to us, imprisoned, or in danger; and his return is described as a coming back out of that yonder zone. Nevertheless — and here is a great key to the understanding of myth and symbol — the two kingdoms are actually one. The realm of the gods is a forgotten dimension of the world we know. And the exploration of that dimension, either willingly or unwillingly, is the whole sense of the deed of the hero. The values and distinctions that in normal life seem important disappear with the terrifying assimilation of the self into what formerly was only otherness. As in the stories of the cannibal ogresses, the fearfulness of this loss of personal individuation can be the whole burden of the transcendental experience for unqualified souls. But the hero-soul goes boldly in — and discovers the hags converted into goddesses and the dragons into the watchdogs of the gods.”',
            'image': require('../assets/transitions-icons/2.png')
          }
        ]
      }
    }
  },
  methods: {
    openCard (e) {
      this.sound('OpenCard')
      this.isCardOpened = !this.isCardOpened
    }
  },
  computed: {},
  created () {
    if (!this.$route.query.hasOwnProperty('page')) { return }
    if (this.$route.query.page === 'worlds') {
      this.currentPage = 1
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../components/card-swiper/texts-animations";
  @import "../css/main";
  .acts--color {
    background-color: #dab79b;
  }

  .worlds--color {
    background-color: #8ba2a8;
  }

  .transitions {
    height: 100vh;
    width: 100vw;
    font-family: 'Calibri', sans-serif;
    display: flex;
    flex-direction: column;
    transition: background-color .7s;

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
          width: 44px;
          height: 44px;

          img {
            width: 100%;
            height: 100%;
          }
          @include clickBounce();
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
