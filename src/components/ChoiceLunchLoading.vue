<template>
<div>
    <div>
      <SubTitle class="title">
        <p class="move_text" :class="move">Loading...자동으로 넘어가게 해주세요</p>
      </SubTitle>
    </div>
</div>
</template>

<script>

import SubTitle from '@/components/ui/SubTitle'
import { getFamilyRestaurant } from '@/api/index'

export default {
  name: 'ChoiceLunchLoading',
  components: {
    SubTitle
  },
  mounted: function () {
    getFamilyRestaurant().then(response => {
      this.restaurantList = response.data
      this.nextPage()
    })
  },
  data: () => ({
    restaurantList: [],
    move: ''
  }),
  methods: {
    nextPage: function () {
      setTimeout(() => {
        this.move = 'moving'
      }, 0)

      setTimeout(() => {
        this.$router.push('choiceLunchResult/' + this.choiceLunch().RestaurantsName)
      }, 2000)
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
  }
}

</script>

<style scoped>
.move_text {
  transform: translateX(20%);
  transition: transform 2s;
}

.moving {
  transform: translateX(-20%);
}
</style>
