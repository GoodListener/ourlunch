<template>
<div>
    <div>
      <SubTitle class="title"><marquee>Loading...</marquee></SubTitle>
    </div>

    <div class="buttons">
        <Button class="primary" @click="nextPage()">다음</Button>
    </div>
</div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'

export default {
  name: 'ChoiceLunchLoding',
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
      this.$router.push('choiceLunchResult/' + this.choiceLunch().RestaurantsName)
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
  }
}
</script>

<style scoped>

</style>
