<template>
  <div>
    <Title>식당 등록하기</Title>
    <div class="search_bar">
      <Input type="text" label="식당 검색"
        v-model="restaurantName"
        @keyup.enter="searchRestaurant"/><Icon @click="searchRestaurant">[돋보기 이미지]</Icon>
    </div>
    <div class="restaurant_list">
      <li class="list" v-for=" restaurant in restaurants" v-bind:key="restaurant.key">
        <div>{{ restaurant.name }}</div>
      </li>
    </div>
  </div>
</template>
<script>
import Title from '@/components/ui/Title'
import Input from '@/components/ui/Input'
import Icon from '@/components/ui/Icon'

export default {
  name: 'Restaurant',
  components: {
    Title, Input, Icon
  },
  methods: {
    searchRestaurant: function () {
      this.$http.get('/api/restaurant', {
        query: this.restaurantName
      })
        .then(response => {
          this.restaurants = response.data
        })
    }
  },
  data: () => ({
    restaurantName: '',
    restaurants: []
  })
}

</script>

<style scoped>
li.list{
  list-style: none;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px
  solid #DCDCDC;
  background-color : white;
}
</style>
