<template>
  <div class="texts">
    <div class="texts__header">
      <div class="texts__header-content">
        <router-link tag="div" to="home" class="back-button">
          <img src="../assets/back-button.png">
        </router-link>
        <div class="title">
          <img src="../assets/stages/STAGES.png">
        </div>
        <!--  компенсируем размер места справа для центрирования тайтла с помощью флексбокс-->
        <div class="back-button"></div>
      </div>
    </div>
    <div class="texts__content">
    </div>
    <div class="texts__footer">
      <div class="dots">
        <div class="dot"
             v-for="(listItem, $index) in currentStageObject.cards"
             :key="listItem.id"
             :class="{ 'dot__active': $index === currentPage }"
        ></div>
      </div>
      <div class="ad"></div>
    </div>
    <cards-list
      :list="reversedCards"
      :currentPage.sync="currentPage"
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
      stagesList: {
        'stages': [
          {
            'id': 1,
            'name': 'Call',
            'cards': [
              {
                'id': 16,
                'title': 'Refusal of the Call',
                'shortDescription': 'Often when the call is given, the future hero first refuses to heed it. This may be from a sense of duty or obligation, fear, insecurity, a sense of inadequacy, or any of a range of reasons that work to hold the person in his or her current circumstances.',
                'quotation': '..."Refusal of the summons converts the adventure into its negative. Walled in boredom, hard work, or \'culture\', the subject loses the power of significant affirmative action and becomes a victim to be saved. His flowering world becomes a wasteland of dry stones and his life feels meaningless — even though, like King Minos, he may through titanic effort succeed in building an empire or renown. Whatever house he builds, it will be a house of death: a labyrinth of cyclopean walls to hide from him his minotaur. All he can do is create new problems for himself and await the gradual approach of his disintegration."',
                'image': require('../assets/stages-icons/16.png')
              },
              {
                'id': 17,
                'title': 'The Call to Adventure',
                'shortDescription': 'The hero begins in a mundane situation of normality from which some information is received that acts as a call to head off into the unknown.',
                'quotation': '"...a forest, a kingdom underground, beneath the waves, or above the sky, a secret island, lofty mountaintop, or profound dream state; but it is always a place of strangely fluid and polymorphous beings, unimaginable torments, super human deeds, and impossible delight. The hero can go forth of his own volition to accomplish the adventure, as did Theseus when he arrived in his father\'s city, Athens, and heard the horrible history of the Minotaur; or he may be carried or sent abroad by some benign or malignant agent as was Odysseus, driven about the Mediterranean by the winds of the angered god, Poseidon. The adventure may begin as a mere blunder... or still again, one may be only casually strolling when some passing phenomenon catches the wandering eye and lures one away from the frequented paths of man. Examples might be multiplied, ad infinitum, from every corner of the world."',
                'image': require('../assets/stages-icons/17.png')
              }
            ]
          },
          {
            'id': 2,
            'name': 'Elixir',
            'cards': [
              {
                'id': 1,
                'title': 'Freedom to\nLive',
                'shortDescription': 'Mastery leads to freedom from the fear of death, which in turn is the freedom to live. This is sometimes referred to as living in the moment, neither anticipating the future nor regretting the past.',
                'quotation': '..."The hero is the champion of things becoming, not of things become, because he is. \'Before Abraham was, I AM.\' He does not mistake apparent changelessness in time for the permanence of Being, nor is he fearful of the next moment (or of the \'other thing\'), as destroying the permanent with its change. \'Nothing retains its own form; but Nature, the greater renewer, ever makes up forms from forms. Be sure there\'s nothing perishes in the whole universe; it does but vary and renew its form.\' Thus the next moment is permitted to come to pass."',
                'image': require('../assets/stages-icons/1.png')
              },
              {
                'id': 2,
                'title': 'Master of the Two Worlds',
                'shortDescription': 'This step is usually represented by a transcendental hero like Jesus or Gautama Buddha. For a human hero, it may mean achieving a balance between the material and spiritual. The person has become comfortable and competent in both the inner and outer worlds.',
                'quotation': '..."Freedom to pass back and forth across the world division, from the perspective of the apparitions of time to that of the causal deep and back — not contaminating the principles of the one with those of the other, yet permitting the mind to know the one by virtue of the other — is the talent of the master. The Cosmic Dancer, declares Nietzsche, does not rest heavily in a single spot, but gaily, lightly, turns and leaps from one position to another. It is possible to speak from only one point at a time, but that does not invalidate the insights of the rest. The individual, through prolonged psychological disciplines, gives up completely all attachment to his personal limitations, idiosyncrasies, hopes and fears, no longer resists the self-annihilation that is prerequisite to rebirth in the realization of truth, and so becomes ripe, at last, for the great at-one-ment. His personal ambitions being totally dissolved, he no longer tries to live but willingly relaxes to whatever may come to pass in him; he becomes, that is to say, an anonymity."',
                'image': require('../assets/stages-icons/2.png')
              }
            ]
          },
          {
            'id': 3,
            'name': 'Return threshold',
            'cards': [
              {
                'id': 3,
                'title': 'Refusal of the Return',
                'shortDescription': 'Having found bliss and enlightenment in the other world, the hero may not want to return to the ordinary world to bestow the boon onto his fellow man.',
                'quotation': '..."When the hero-quest has been accomplished, through penetration to the source, or through the grace of some male or female, human or animal, personification, the adventurer still must return with his life-transmuting trophy. The full round, the norm of the monomyth, requires that the hero shall now begin the labor of bringing the runes of wisdom, the Golden Fleece, or his sleeping princess, back into the kingdom of humanity, where the boon may redound to the renewing of the community, the nation, the planet or the ten thousand worlds. But the responsibility has been frequently refused. Even Gautama Buddha, after his triumph, doubted whether the message of realization could be communicated, and saints are reported to have died while in the supernal ecstasy. Numerous indeed are the heroes fabled to have taken up residence forever in the blessed isle of the unaging Goddess of Immortal Being."',
                'image': require('../assets/stages-icons/3.png')
              },
              {
                'id': 4,
                'title': 'The Return\nThreshold',
                'shortDescription': 'The trick in returning is to retain the wisdom gained on the quest, to integrate that wisdom into a human life, and then maybe figure out how to share the wisdom with the rest of the world.',
                'quotation': '..."The returning hero, to complete his adventure, must survive the impact of the world. Many failures attest to the difficulties of this life-affirmative threshold. The first problem of the returning hero is to accept as real, after an experience of the soul-satisfying vision of fulfillment, the passing joys and sorrows, banalities and noisy obscenities of life. Why re-enter such a world? Why attempt to make plausible, or even interesting, to men and women consumed with passion, the experience of transcendental bliss? As dreams that were momentous by night may seem simply silly in the light of day, so the poet and the prophet can discover themselves playing the idiot before a jury of sober eyes. The easy thing is to commit the whole community to the devil and retire again into the heavenly rock dwelling, close the door, and make it fast. But if some spiritual obstetrician has drawn the shimenawa across the retreat, then the work of representing eternity in time, and perceiving in time eternity, cannot be avoided."',
                'image': require('../assets/stages-icons/4.png')
              }
            ]
          },
          {
            'id': 4,
            'name': 'Road back',
            'cards': [
              {
                'id': 5,
                'title': 'Rescue from Without',
                'shortDescription': 'Just as the hero may need guides and assistants to set out on the quest, oftentimes he or she must have powerful guides and rescuers to bring them back to everyday life, especially if the person has been wounded or weakened by the experience.',
                'quotation': '..."The hero may have to be brought back from his supernatural adventure by assistance from without. That is to say, the world may have to come and get him. For the bliss of the deep abode is not lightly abandoned in favor of the self-scattering of the wakened state. \'Who having cast off the world,\' we read, \'would desire to return again? He would be only there.\' And yet, in so far as one is alive, life will call. Society is jealous of those who remain away from it, and will come knocking at the door. If the hero. . . is unwilling, the disturber suffers an ugly shock; but on the other hand, if the summoned one is only delayed — sealed in by the beatitude of the state of perfect being (which resembles death) — an apparent rescue is effected, and the adventurer returns."',
                'image': require('../assets/stages-icons/5.png')
              },
              {
                'id': 6,
                'title': 'The Magic Flight',
                'shortDescription': 'Sometimes the hero must escape with the boon, if it is something that the gods have been jealously guarding. It can be just as adventurous and dangerous returning from the journey as it was to go on it.',
                'quotation': '..."If the hero in his triumph wins the blessing of the goddess or the god and is then explicitly commissioned to return to the world with some elixir for the restoration of society, the final stage of his adventure is supported by all the powers of his supernatural patron. On the other hand, if the trophy has been attained against the opposition of its guardian, or if the hero\'s wish to return to the world has been resented by the gods or demons, then the last stage of the mythological round becomes a lively, often comical, pursuit. This flight may be complicated by marvels of magical obstruction and evasion."',
                'image': require('../assets/stages-icons/6.png')
              }
            ]
          },
          {
            'id': 5,
            'name': 'Nadir',
            'cards': [
              {
                'id': 7,
                'title': 'The Ultimate Boon',
                'shortDescription': 'The ultimate boon is the achievement of the goal of the quest. It is what the person went on the journey to get. All the previous steps serve to prepare and purify the person for this step, since in many myths the boon is something transcendent like the elixir of life itself, or a plant that supplies immortality, or the holy grail.',
                'quotation': '..."The gods and goddesses then are to be understood as embodiments and custodians of the elixir of Imperishable Being but not themselves the Ultimate in its primary state. What the hero seeks through his intercourse with them is therefore not finally themselves, but their grace, i.e., the power of their sustaining substance. This miraculous energy-substance and this alone is the Imperishable; the names and forms of the deities who everywhere embody, dispense, and represent it come and go. This is the miraculous energy of the thunderbolts of Zeus, Yahweh, and the Supreme Buddha, the fertility of the rain of Viracocha, the virtue announced by the bell rung in the Mass at the consecration, and the light of the ultimate illumination of the saint and sage. Its guardians dare release it only to the duly proven."',
                'image': require('../assets/stages-icons/7.png')
              },
              {
                'id': 8,
                'title': 'Apotheosis',
                'shortDescription': 'When someone dies a physical death, or dies to the self to live in spirit, he or she moves beyond the pairs of opposites to a state of  divine knowledge, love, compassion and bliss. A more mundane way of looking at this step is that it is a period of rest, peace and fulfillment before the hero begins the return.',
                'quotation': '..."Those who know, not only that the Everlasting lies in them, but that what they, and all things, really are is the Everlasting, dwell in the groves of the wish fulfilling trees, drink the brew of immortality, and listen everywhere to the unheard music of eternal concord."',
                'image': require('../assets/stages-icons/8.png')
              },
              {
                'id': 9,
                'title': 'Atonement with the Father',
                'shortDescription': 'In this step the person must confront and be initiated by whatever holds the ultimate power in his or her life. In many myths and stories this is the father, or a father figure who has life and death power. This is the center point of the journey. All the previous steps have been moving into this place, all that follow will move out from it. Although this step is most frequently symbolized by an encounter with a male entity, it does not have to be a male; just someone or thing with incredible power.',
                'quotation': '..."Atonement consists in no more than the abandonment of that self-generated double monster — the dragon thought to be God (superego) and the dragon thought to be Sin (repressed id). But this requires an abandonment of the attachment to ego itself, and that is what is difficult. One must have a faith that the father is merciful, and then a reliance on that mercy. Therewith, the center of belief is transferred outside of the bedeviling god\'s tight scaly ring, and the dreadful ogres dissolve. It is in this ordeal that the hero may derive hope and assurance from the helpful female figure, by whose magic (pollen charms or power of intercession) he is protected through all the frightening experiences of the father\'s ego-shattering initiation. For if it is impossible to trust the terrifying father-face, then one\'s faith must be centered elsewhere (Spider Woman, Blessed Mother); and with that reliance for support, one endures the crisis — only to find, in the end, that the father and mother reflect each other, and are in essence the same. The problem of the hero going to meet the father is to open his soul beyond terror to such a degree that he will be ripe to understand how the sickening and insane tragedies of this vast and ruthless cosmos are completely validated in the majesty of Being. The hero transcends life with its peculiar blind spot and for a moment rises to a glimpse of the source. He beholds the face of the father, understands — and the two are atoned."',
                'image': require('../assets/stages-icons/9.png')
              },
              {
                'id': 10,
                'title': 'Woman as Temptress',
                'shortDescription': 'In this step, the hero faces those temptations, often of a physical or pleasurable nature, that may lead him or her to abandon or stray from his or her quest, which does not necessarily have to be represented by a woman. Woman is a metaphor for the physical or material temptations of life, since the hero-knight was often tempted by lust from his spiritual journey.',
                'quotation': '"...The crux of the curious difficulty lies in the fact that our conscious views of what life ought to be seldom correspond to what life really is. Generally we refuse to admit within ourselves, or within our friends, the fullness of that pushing, self-protective, malodorous, carnivorous, lecherous fever which is the very nature of the organic cell. Rather, we tend to perfume, whitewash, and reinterpret; meanwhile imagining that all the flies in the ointment, all the hairs in the soup, are the faults of some unpleasant someone else. But when it suddenly dawns on us, or is forced to our attention that everything we think or do is necessarily tainted with the odor of the flesh, then, not uncommonly, there is experienced a moment of revulsion: life, the acts of life, the organs of life, woman in particular as the great symbol of life, become intolerable to the pure, the pure, pure soul. The seeker of the life beyond life must press beyond (the woman), surpass the temptations of her call, and soar to the immaculate ether beyond."',
                'image': require('../assets/stages-icons/10.png')
              },
              {
                'id': 11,
                'title': 'Meeting with the Goddess',
                'shortDescription': 'This is the point when the person experiences a love that has the power and significance of the all- powerful, all encompassing, unconditional love that a fortunate infant may experience with his or her mother. This is a very important step in the process and is often represented by the person finding the other person that he or she loves most completely.',
                'quotation': '..."The ultimate adventure, when all the barriers and ogres have been overcome, is commonly represented as a mystical marriage of the triumphant hero-soul with the Queen Goddess of the World. This is the crisis at the nadir, the zenith, or at the uttermost edge of the earth, at the central point of the cosmos, in the tabernacle of the temple, or within the darkness of the deepest chamber of the heart. The meeting with the goddess (who is incarnate in every woman) is the final test of the talent of the hero to win the boon of love (charity: amor fati), which is life itself enjoyed as the encasement of eternity. And when the adventurer, in this context, is not a youth but a maid, she is the one who, by her qualities, her beauty, or her yearning, is fit to become the consort of an immortal. Then the heavenly husband descends to her and conducts her to his bed — whether she will or not. And if she has shunned him, the scales fall from her eyes; if she has sought him, her desire finds its peace."',
                'image': require('../assets/stages-icons/11.png')
              }
            ]
          },
          {
            'id': 6,
            'name': 'Trails',
            'cards': [
              {
                'id': 12,
                'title': 'The Road of Trials',
                'shortDescription': 'The road of trials is a series of tests, tasks, or ordeals that the person must undergo to begin the transformation. Often the person fails one or more of these tests, which often occur in threes.',
                'quotation': '..."Once having traversed the threshold, the hero moves in a dream landscape of curiously fluid, ambiguous forms, where he must survive a succession of trials. This is a favorite phase of the myth-adventure. It has produced a world literature of miraculous tests and ordeals. The hero is covertly aided by the advice, amulets, and secret agents of the supernatural helper whom he met before his entrance into this region. Or it may be that he here discovers for the first time that there is a benign power everywhere supporting him in his superhuman passage. The original departure into the land of trials represented only the beginning of the long and really perilous path of initiatory conquests and moments of illumination. Dragons have now to be slain and surprising barriers passed — again, again, and again. Meanwhile there will be a multitude of preliminary victories, unretainable ecstasies and momentary glimpses of the wonderful land."',
                'image': require('../assets/stages-icons/12.png')
              }
            ]
          },
          {
            'id': 7,
            'name': 'Threshold',
            'cards': [
              {
                'id': 13,
                'title': 'Belly of the Whale',
                'shortDescription': 'The belly of the whale represents the final separation from the hero\'s known world and self. By entering this stage, the person shows willingness to undergo a metamorphosis.',
                'quotation': '..."The idea that the passage of the magical threshold is a transit into a sphere of rebirth is symbolized in the worldwide womb image of the belly of the whale. The hero, instead of conquering or conciliating the power of the threshold, is swallowed into the unknown and would appear to have died. This popular motif gives emphasis to the lesson that the passage of the threshold is a form of self-annihilation. Instead of passing outward, beyond the confines of the visible world, the hero goes inward, to be born again. The disappearance corresponds to the passing of a worshipper into a temple — where he is to be quickened by the recollection of who and what he is, namely dust and ashes unless immortal. The temple interior, the belly of the whale, and the heavenly land beyond, above, and below the confines of the world, are one and the same. That is why the approaches and entrances to temples are flanked and defended by colossal gargoyles: dragons, lions, devil-slayers with drawn swords, resentful dwarfs, winged bulls. The devotee at the moment of entry into a temple undergoes a metamorphosis. Once inside he may be said to have died to time and returned to the World Womb, the World Navel, the Earthly Paradise. Allegorically, then, the passage into a temple and the hero-dive through the jaws of the whale are identical adventures, both denoting in picture language, the life-centering, life-renewing act."',
                'image': require('../assets/stages-icons/13.png')
              },
              {
                'id': 14,
                'title': 'Crossing the Threshold',
                'shortDescription': 'This is the point where the person actually crosses into the field of adventure, leaving the known limits of his or her world and venturing into an unknown and dangerous realm where the rules and limits are not known.',
                'quotation': '..."With the personifications of his destiny to guide and aid him, the hero goes forward in his adventure until he comes to the "threshold guardian" at the entrance to the zone of magnified power. Such custodians bound the world in four directions — also up and down — standing for the limits of the hero\'s present sphere, or life horizon. Beyond them is darkness, the unknown and danger; just as beyond the parental watch is danger to the infant and beyond the protection of his society danger to the members of the tribe. The usual person is more than content, he is even proud, to remain within the indicated bounds, and popular belief gives him every reason to fear so much as the first step into the unexplored. The adventure is always and everywhere a passage beyond the veil of the known into the unknown; the powers that watch at the boundary are dangerous; to deal with them is risky; yet for anyone with competence and courage the danger fades."',
                'image': require('../assets/stages-icons/14.png')
              }
            ]
          },
          {
            'id': 8,
            'name': 'Aid',
            'cards': [
              {
                'id': 15,
                'title': 'Supernatural Aid',
                'shortDescription': 'Once the hero has committed to the quest, consciously or unconsciously, his guide and magical helper appears or becomes known. More often than not, this supernatural mentor will present the hero with one or more talismans or artifacts that will aid him later in his quest.',
                'quotation': '..."For those who have not refused the call, the first encounter of the hero journey is with a protective figure (often a little old crone or old man) who provides the adventurer with amulets against the dragon forces he is about to pass. What such a figure represents is the benign, protecting power of destiny. The fantasy is a reassurance — promise that the peace of Paradise, which was known first within the mother womb, is not to be lost; that it supports the present and stands in the future as well as in the past (is omega as well as alpha); that though omnipotence may seem to be endangered by the threshold passages and life awakenings, protective power is always and ever present within or just behind the unfamiliar features of the world. One has only to know and trust, and the ageless guardians will appear. Having responded to his own call, and continuing to follow courageously as the consequences unfold, the hero finds all the forces of the unconscious at his side. Mother Nature herself supports the mighty task. And in so far as the hero\'s act coincides with that for which his society is ready, he seems to ride on the great rhythm of the historical process."',
                'image': require('../assets/stages-icons/15.png')
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    openCard (e) {
      this.isCardOpened = !this.isCardOpened
    }
  },
  computed: {
    currentStage () {
      return this.$store.getters['status/currentStage']
    },
    currentStageObject () {
      return this.stagesList.stages.find((e) => e.id === (this.currentStage.id + 1))
    },
    reversedCards () {
      let cards = this.currentStageObject.cards
      return cards.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../components/card-swiper/texts-animations";
  @import "../css/main";
  .texts {
    height: 100vh;
    width: 100vw;
    font-family: 'Calibri', sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #c1c1c1;
    @include supports-safe-area-insets {
      padding-top: env(safe-area-inset-top);
    }

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
