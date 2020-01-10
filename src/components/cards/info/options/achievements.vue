<template>
  <div class="options__achievements">
    <div class="achievements-list">
      <achievement
          :key="achievement.name"
          v-for="achievement in achievements"
          :achievement="achievement">
      </achievement>
    </div>
    <div class="options__back-button" @click="$emit('back')">
      <img src="../../../../assets/info/options/back.png">
    </div>
  </div>
</template>

<script>
import achievement from './achievements/achievement'

export default {
  name: 'achievements',
  components: {
    achievement
  },
  data () {
    return {
      achievements: [
        {
          name: 'Begginer',
          description: 'Visit one Stage',
          value: 1,
          max: 5,
          icon: '../../../../../assets/info/options/achievements/icons/beginner.png',
          completed: true
        },
        {
          name: 'TRAVELER',
          description: 'Visit all Stages',
          value: 1,
          max: 5,
          icon: '../../../../../assets/info/options/achievements/icons/traveler.png',
          completed: true
        },
        {
          name: 'SHARER',
          description: 'Share any 3 Descriptions',
          value: 1,
          max: 5,
          icon: '../../../../../assets/info/options/achievements/icons/sharer.png',
          completed: true
        },
        {
          name: 'DREAMER',
          description: 'Enter the DREAM',
          value: 1,
          max: 5,
          icon: '../../../../../assets/info/options/achievements/icons/dreamer.png',
          completed: false
        },
        {
          name: 'RINGER',
          description: 'Ring the Bell 42 times',
          value: 1,
          max: 5,
          icon: '../../../../../assets/info/options/achievements/icons/ringer.png',
          completed: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../../css/options";

  .achievements-list{
    margin-top: 18px;
  }
  .options__back-button{
    margin-top:8px;
  }
</style>
