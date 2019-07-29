<template>
  <div>
    <Title class="title">?</Title>
    <div>
        <div>
          <TextButton class="basic" @click="handleRestaurantButton"><i class="fas fa-plus-circle plus-icon"></i> 식당 등록하기</TextButton>
        </div>
        <div>
          <Button class="primary" @click="choiceLunch">오늘의 점심은?</Button>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import TextButton from '@/components/ui/TextButton'
import Title from '@/components/ui/Title'

export default {
  name: 'Main',
  components: {
    Button, TextButton, Title
  },
  methods: {
    choiceLunch: function () {
      this.$router.push('choiceLunch1')
    },
    handleRestaurantButton: function () {
      this.$router.push('restaurant')
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 270px;
}

.middle {
  width: 100%;
  position: fixed;
  bottom: 50px;
}

.plus-icon {
  color: #535353;
}
</style>
