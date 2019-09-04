<template>
<div>
    <div>
      <SubTitle class="title">오늘의 식당 후보는?</SubTitle>
    </div>
    <ul>
      <li class="list"
      v-for="(restaurant, index) in restaurantList"
      :key="index">
        <span>{{ restaurant.RestaurantsName }}</span>
      </li>
    </ul>
    <div class="buttons">
        <Button class="default" @click="prevPage()">이전</Button>
        <Button class="primary" @click="nextPage()">다음</Button>
    </div>
</div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import { getFamilyRestaurant } from '@/api/index'

export default {
  name: 'ChoiceLunch2',
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
    prevPage: function () {
      this.$router.push('choiceLunch1')
    },
    choiceLunch: function () {
      const chooseIndex = parseInt(Math.random() * this.restaurantList.length)
      return this.restaurantList[chooseIndex]
    }
  }
}
</script>

<style scoped>

button.base_button.default {
  width: 20%;
}

button.base_button.primary {
  width: 50%;
}

.title {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}

ul{
  padding: 0;
}

li.list{
  list-style: none;
  margin: 5px;
  padding: 5px;
  border: 1px solid #DCDCDC;
  background-color : #fdfdfd;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
