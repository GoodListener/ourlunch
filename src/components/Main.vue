<template>
  <div>
    <Title class="title">?</Title>
    <div>
        <div>
          <TextButton class="basic" @click="choiceLunch"><img class="btnimg" src="https://image.flaticon.com/icons/png/512/61/61733.png" max-width:10px> 식당 등록하기</TextButton>
        </div>
        <!-- 이미지 이렇게 넣는거 아닌것 같은데..넘나어렵다 -->
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

.btnimg {
  width: 15px;
  float: bottom;
}
</style>
