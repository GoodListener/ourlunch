<template>
<div class="famRestaurants_wrapper">
  <div class="topFixArea">
    <div class="backButton" @click="handleMainButton">
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="headerText">식당 목록
    </div>
    <TextButton class="copy_btn" @click="handleRestaurantButton"><i class="fas fa-plus-circle"></i> 식당 추가</TextButton>
  </div>
  <ul>
    <li class="list" v-for="(famRestaurant, index) in famRestaurants" :key="index">
      <div class="left">
        <span class="restaurantsName">
          {{ famRestaurant.RestaurantsName }}
        </span>
        <span class="type">
          {{ famRestaurant.type }}
        </span>
        <br>
        <small class="restaurant">
          평점:{{ famRestaurant.grade }}점
        </small>
      </div>
      <div class="right">
        <span v-if="famRestaurant.grade">
          <i v-for="index in 5" :key="index"
            :class="index <= famRestaurant.grade / 2 ? 'fas fa-star star' :
                    index <= Math.ceil(famRestaurant.grade / 2) && famRestaurant.grade % 2 ? 'fas fa-star-half-alt star' : 'far fa-star emptyStar'"></i>
        </span>
        <Button v-else class="mini default" @click="evaluateRestaurant(famRestaurant.RestaurantsName)">식당 평가</Button>
        <Button class="mini default gray_btn">삭제</Button>
      </div>
    </li>
  </ul>
  <modals-container/>
</div>
</template>

<script>

import Button from '@/components/ui/Button'
import TextButton from '@/components/ui/TextButton'
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { getFamilyRestaurant } from '@/api/index'
import evaluateRestaurantModal from './modals/evaluateRestaurant'

export default {
  name: 'FamRestaurants',
  components: {
    Button, TextButton, Title, SubTitle, Input, Page, PageContent
  },
  props: ['title'],
  methods: {
    handleMainButton: function () {
      this.$router.push('Main')
    },
    handleRestaurantButton: function () {
      this.$router.push('restaurant')
    },
    evaluateRestaurant (restaurantName) {
      this.$modal.show(evaluateRestaurantModal, {
        restaurantName: restaurantName
      }, {
        width: '330px',
        height: '150px',
        draggable: true
      })
    }
  },
  data: () => ({
    famRestaurants: [],
    showGradeModal: false
  }),
  mounted: function () {
    getFamilyRestaurant().then(response => {
      this.famRestaurants = response.data
    })
  }
}
</script>
<style scoped>
.topFixArea{
  position: fixed;
  top: 0px;
  left: 0px;
  width:100%;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
}
.backButton{
  float: left;
  padding: 18px 15px 18px 15px;
  text-align: center;
}
.famRestaurants_wrapper{
  float: left;
  margin: 0px 20px;
}
.headerText{
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin: 15px 15px 15px 0px;
}
.copy_btn{
  float: right;
  width: auto;
}
ul{
  padding: 0;
}
li.list{
  list-style: none;
  margin-left: -1px;
  margin: 5px auto;
  padding: 20px 15px;
  border: 1px solid #DCDCDC;
  background-color : #fdfdfd;
  text-align: left;
  float: left;
  width: 100%;
  box-sizing: border-box;
}
.left{
  float: left;
}
.right{
  float: right;
}
.restaurantsName{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.appetite{
  font-size: 15px;
  font-weight: normal;
  color: #959595;
}
.restaurant{
  text-align: left;
  color: #959595;
}
.star{
  color: #f7e63b;
}
.emptyStar{
  color: rgba(55, 53, 47, 0.4);
}
</style>
