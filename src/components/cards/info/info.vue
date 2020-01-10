<template>
  <card>
    <div class="card__title_black info">
      <div class="card__title-content">
        What is Monomyth
        <img class="info__question" src="../../../assets/info/question.png">
      </div>
    </div>
    <div class="card__content">
      <div class="info__text">
        Monomyth, or the Hero's Journey, is a basic pattern that its proponents argue is found in many narratives from around the world. This widely distributed pattern was described by Joseph Campbell.
      </div>
    </div>
  </card>
</template>

<script>
export default {
  name: 'options',
  components: {
    card: () => import('../card')
  }
}
</script>

<style lang="scss" scoped>
  .card__title-content{
    text-align: center;
    .info__question {
      height: 140px;
      display: block;
      margin: 0 auto;
    }
  }
  .card__content{
    padding:18px 36px;
    font-size:18px;
    line-height:20px;
    font-family: 'Calibri', sans-serif;
  }
</style>
