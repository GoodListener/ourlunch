<template>
  <div>
    <SubTitle class ="title">점심팸 새로 시작 (3/3)</SubTitle>
      <div class = "nickname">
        <Input
          type="text"
          label="이름"
          v-model="userName"
        />
      </div>
      <div class ="taste">
        <Input
          type="text"
          label="나의 입맛은?"
          v-model="appetite"
        />
      </div>

      <div class ="buttons">
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
  name: 'StartFamily3',
  components: {
    SubTitle, Input, Button
  },
  data: () => ({
    userName: '',
    appetite: ''
  }),
  methods: {
    nextPage: function () {
      this.$router.push('startComplete')
    },
    prevPage: function () {
      this.$router.push('startFamily2')
    }
  }
}
</script>
<style scoped>

  button.base_button.default{
    width: 20%;
  }
  button.base_button.primary{
    width: 50%;
  }

  .nickname{
    margin-bottom: 50px;
  }
  .buttons{
    width: 100%;
    position: fixed;
    bottom: 50px;
  }
</style>
