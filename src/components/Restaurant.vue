<template>
  <div>
    <Title>식당 등록하기</Title>
    <div class="search_bar">
      <Input type="text" label="식당 검색"
        v-model="restaurantName"
        @keyup.enter="searchRestaurant"/><Icon @click="searchRestaurant">[돋보기 이미지]</Icon>
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
      this.$http.get('/restaurant')
        .then(response => {
          console.log(response)
        })
    }
  },
  data: () => ({
    restaurantName: ''
  })
}

</script>

<style scoped>

</style>
