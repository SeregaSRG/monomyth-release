<template>
  <card>
    <div class="card__title_white">
      <div class="card__title-content">
        Gift Card
      </div>
    </div>
    <div class="gift-card__line">
      <img src="../../../assets/info/gifts/line.png">
    </div>
    <div class="card__content">
      <gift v-if="false"></gift>
      <prize></prize>
    </div>
  </card>
</template>

<script>
export default {
  name: 'gifts',
  components: {
    card: () => import('../card'),
    gift: () => import('./gifts/gift'),
    prize: () => import('./gifts/prize')
  }
}
</script>

<style lang="scss" scoped>
  .card__title_white {
    padding-bottom: 5px!important;
    padding-top: 5px!important;
    font-size: 49px!important;
  }

  .gift-card__line {
    padding: 0 14px;
    background-color: #f2f2f2;
    img {
      width: 100%;
    }
  }

  .card__content {
    padding: 17px 14px;
  }
</style>
