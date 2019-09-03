<template>
<div>
    <div>
      <SubTitle class="title">오늘의 식당 후보는?</SubTitle>
    </div>
    <ul class="list">
      <li class="item" v-for="(restaurant, index) in restaurantList" v-bind:key="index">
        {{restaurant.name}}
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
import restaurants from '@/apiFakeData/fakeRestaurantApiData.json'

export default {
  name: 'ChoiceLunch2',
  components: {
    SubTitle, Button
  },
  data: () => ({
    choicedRestaurant: '',
    restaurantList: restaurants
  }),
  methods: {
    nextPage: function () {
      this.$router.push('choiceLunchResult')
    },
    prevPage: function () {
      this.$router.push('choiceLunch1')
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

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: transform 1s;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 300px;
  left: calc(50% - 65px);
}

.list:hover {
}

.item {
  width: 130px;
  height: 50px;
  border: 1px solid gray;
  margin: 3px auto;
  padding: 5px;
  position: absolute;
  background: rgba(30,30,0,0.2);
}

.item:nth-child(1) {
  transform: rotateX(330deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(2) {
  transform: rotateX(0deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(3) {
  transform: rotateX(30deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(4) {
  transform: rotateX(60deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(5) {
  transform: rotateX(90deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(6) {
  transform: rotateX(120deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(7) {
  transform: rotateX(150deg) translateZ(150px) rotateY(30deg);
}

.item:nth-child(8) {
  transform: rotateX(180deg) translateZ(150px) rotateY(-30deg);
}

.item:nth-child(9) {
  transform: rotateX(210deg) translateZ(150px) rotateY(-30deg);
}

.item:nth-child(10) {
  transform: rotateX(240deg) translateZ(150px) rotateY(-30deg);
}

.item:nth-child(11) {
  transform: rotateX(270deg) translateZ(150px) rotateY(-30deg);
}

.item:nth-child(12) {
  transform: rotateX(300deg) translateZ(150px) rotateY(-30deg);
}

</style>
