<template>
  <div>
  <div>
    <SubTitle class="title">오늘의 점심 멤버는?</SubTitle>
  </div>
      <div class="buttons">
          <Button class="default" @click="prevPage()">이전</Button>
          <Button class="primary" @click="nextPage()">다음</Button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'

export default {
  name: 'ChoiceLunch1',
  components: {
    SubTitle, Input, Button
  },
  data: () => ({
    choicedMember: ''
  }),
  methods: {
    nextPage: function () {
      this.$router.push('choiceLunch2')
    },
    prevPage: function () {
      this.$router.push('Main')
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
