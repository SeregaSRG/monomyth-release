<template>
  <div class="card">
    <div class="card__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style lang="scss" scoped>
  @import "../../css/card";
</style>
