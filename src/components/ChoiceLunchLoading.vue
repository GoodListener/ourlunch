<template>
<div>
    <div>
      <SubTitle class="title"><marquee>Loading...자동으로 넘어가게 해주세요</marquee></SubTitle>
    </div>

    <div class="buttons">
        <Button class="primary" @click="nextPage()">다음</Button>
    </div>


</div>
</template>

<script>

import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import { getFamilyRestaurant } from '@/api/index'

export default {
  name: 'ChoiceLunchLoading',
  components: {
    SubTitle, Button
  },
  mounted: function () {
    getFamilyRestaurant().then(response => {
      this.restaurantList = response.data
    })
  },
  data: () => ({
    restaurantList: []
  }),
  methods: {
    nextPage: function () {
      setTimeout(() => {
        this.$router.push('choiceLunchResult/' + this.choiceLunch().RestaurantsName)
    }, 1000);
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
    // ,
    // loadingTime: function() {
    //   setTimeout(function () {
    //     this.nextPage()
    //   }, 1000);
    // }
  }
}

</script>

<style scoped>

</style>
