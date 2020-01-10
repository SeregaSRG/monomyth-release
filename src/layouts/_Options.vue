<template>
  <div class="card-page">
    <div class="card-page__header">
      <div class="card-page__back-button"></div>
      <div class="card-page__title">INFO</div>
    </div>
    <div class="card-page__card">
      <div class="card">
        <div class="card__title_black">Options</div>
        <div class="card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options'
}
</script>

<style lang="scss" scoped>
  .card-page {
    font-family: 'Calibri',sans-serif;
    width: 100%;
    height: 100%;
    background-color: #3a3a3a;
    position: absolute;
    top:0;

    .card-page__header {
      width:100%;
      padding:0 30px;
      margin-top:15px;
      height:40px;
      display: flex;

      .card-page__back-button{
        width: 40px;
        height:40px;
        background-color: #dddddd;
        border-radius: 50%;
      }

      .card-page__title{
        flex-grow: 1;
        padding-right:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:32px;
        color:#f2f2f2;
      }
    }
    .card-page__card{
      height:500px;
      display: flex;
      align-items: center;
      .card{
        width:310px;
        border-radius: 15px;
        margin:15px auto;
        overflow: hidden;
        .card__title_black{
          width: 100%;
          padding:20px;
          font-size: 42px;
          color:#f2f2f2;
          background-color: #0a0a0a;
          font-family: 'Lobster',sans-serif;
          display: flex;
          justify-content:center;
        }
        .card__content{
          width:100%;
          padding:18px 36px;
          font-size: 19px;
          color:#0a0a0a;
          font-family: 'Calibri', sans-serif;
          background-color: #f2f2f2;
          font-weight: 600;
        }
      }
    }
  }
</style>
