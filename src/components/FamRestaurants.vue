<template>
<div class="famRestaurants_wrapper">
  <div class="topFixArea">
    <h3>식당 목록</h3>
    <TextButton class="copy_btn"><i class="fas fa-plus-circle"></i> 식당 추가</TextButton>
  </div>
  <ul>
    <li class="list" v-for="(famRestaurants, index) in famRestaurants" :key="index">
      <div class="left">
        <span class="restaurantsName">
          {{ famRestaurants.RestaurantsName }}
        </span>
        <span class="type">
          {{ famRestaurants.type }}
        </span>
        <br>
        <small class="restaurant">
          평점:{{ famRestaurants.grade }}점
        </small>
      </div>
      <div class="right">
        <Button class="mini default">식당 평가</Button>
        <Button class="mini default gray_btn">삭제</Button>
      </div>
    </li>
  </ul>
  <div class="buttons">
      <Button class="default close_btn">닫기</Button>
  </div>
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
import famRestaurants from '@/data/famRestaurants'

export default {
  props: ['title'],
  data: () => ({
    famRestaurants: famRestaurants.Restaurants.famRestaurants1
  }),
  mounted: () => {
    console.log(famRestaurants.Restaurants.famRestaurants1)
  },
  name: 'FamRestaurants',
  components: {
    Button, TextButton, Title, SubTitle, Input, Page, PageContent
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
.famRestaurants_wrapper{
  float: left;
  margin: 0px 20px;
}
h3{
  float: left;
  margin-left: 20px;
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
button.close_btn{
  width: 50%;
}
.buttons{
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
