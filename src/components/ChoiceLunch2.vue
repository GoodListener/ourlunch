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

export default {
  name: 'ChoiceLunch2',
  components: {
    SubTitle, Button
  },
  data: () => ({
    choicedRestaurant: '',
    restaurantList: []
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

</style>
