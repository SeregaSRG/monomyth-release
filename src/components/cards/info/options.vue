<template>
  <card>
    <div class="card__title_black info">
      <div class="card__title-content">
        Options
      </div>
    </div>
    <div class="card__content">
      <div class="options__main"
           :class="(openedPage) ? 'opened-page' : ''">
        <div class="options__buttons">
          <div class="options__button">
            <div class="options-button__icon">
              <img src="../../../assets/info/options/ads.png" class="options__ads-icon">
            </div>
            <div class="options-button__label">
              REMOVE ADS
            </div>
          </div>
          <div class="options__button">
            <div class="options-button__icon">
              <img src="../../../assets/info/options/restore.png" class="options__restore-icon">
            </div>
            <div class="options-button__label">
              RESTORE PURCHASE
            </div>
          </div>
          <div class="options__button" @click="openLanguages">
            <div class="options-button__icon">
              <img src="../../../assets/info/options/language.png" class="options__language-icon">
            </div>
            <div class="options-button__label">
              LANGUAGES
            </div>
          </div>
          <div class="options__button" @click="openAchievements">
            <div class="options-button__icon">
              <img src="../../../assets/info/options/achievements.png" class="options__achievements-icon">
            </div>
            <div class="options-button__label">
              ACHIEVEMENTS
            </div>
          </div>
          <div class="options__twin-buttons">
            <div class="options__button">
              <div class="options-button__icon">
                <img src="../../../assets/info/options/mail.png" class="options__mail-icon">
              </div>
              <div class="options-button__label">
                MAIL
              </div>
            </div>
            <div class="options__button">
              <div class="options-button__icon">
                <img src="../../../assets/info/options/rate.png" class="options__rate-icon">
              </div>
              <div class="options-button__label">
                RATE
              </div>
            </div>
          </div>
        </div>
        <div class="options__author">
          <div class="options-authors__description">Code</div>
          <div class="options-authors__name">GREGORY VOVCHOK</div>
        </div>
        <div class="options__author">
          <div class="options-authors__description">Design</div>
          <div class="options-authors__name">MICHAEL BRIZELI</div>
        </div>
      </div>
      <transition name="slide">
        <languages
            @back="openMain"
            v-show="openedPage === 'languages'"
            class="options__second-screen"></languages>
      </transition>
      <transition name="slide">
        <achievements
            @back="openMain"
            v-show="openedPage === 'achievements'"
            class="options__second-screen"></achievements>
      </transition>
    </div>
  </card>
</template>

<script>
export default {
  name: 'options',
  components: {
    card: () => import('../card'),
    languages: () => import('./options/languages'),
    achievements: () => import('./options/achievements')
  },
  data () {
    return {
      openedPage: null
    }
  },
  methods: {
    openLanguages () {
      this.openedPage = 'languages'
    },
    openAchievements () {
      this.openedPage = 'achievements'
    },
    openMain () {
      this.openedPage = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../css/options";
  .card__content {
    width: 100%;
    display: flex;
    overflow: hidden;
    .options__second-screen{
      transition-duration: .3s;
      transition-property: transform;
      transform: translateX(-100%);
      &.slide-enter{
        transform: translateX(0);
      }
      &.slide-leave-active{
        transform: translateX(0);
      }
    }
    .options__main {
      width: 100%;
      height: 390px; // для соотсветсвия размеру вложенных карточек
      flex-shrink: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition-duration: .3s;
      transition-property: transform;
      &.opened-page {
        transform: translateX(-100%);
      }
    }
    .options__achievements {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      flex-shrink: 0;
    }
    .options__author {
      color: #000000;
      font-family: "Calibri", sans-serif;
      text-shadow: -1px -1px 3px rgba(0, 0, 0, .35);
      .options-authors__description {
        font-size: 17px;
        text-align: center;
        line-height: 10px;
      }
      .options-authors__name {
        font-size: 21px;
        text-align: center;
      }
    }
  }
</style>
