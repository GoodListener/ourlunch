<template>
<div>
  <div>
    <SubTitle class="title">오늘의 점심은?</SubTitle>
  </div>
  <div>
    <Content class="result">결과</Content>
  </div>

      <div class="buttons">
          <Button class="default" @click="prevPage()">다시해!</Button>
          <Button class="primary" @click="nextPage()">가즈아</Button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Content from '@/components/ui/Content'

export default {
  name: 'ChoiceLunchResult',
  components: {
    SubTitle, Input, Button, Content
  },
  data: () => ({
    companyName: '',
    newFamilyName: ''
  }),
  methods: {
    nextPage: function () {
      this.$router.push('')
    },
    prevPage: function () {
      this.$router.push('ChoiceLunchResult')
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

.company {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
