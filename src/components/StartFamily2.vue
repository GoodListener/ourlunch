<template>
  <div>
    <SubTitle class ="title">점심팸 새로 시작 (2/3)</SubTitle>
      <div class = "ID">
        <Input
          type="text"
          label="ID"
          v-model="userId"
        />
      </div>
      <div class ="Password1">
        <Input
          type="password"
          label="비밀번호 입력"
          v-model="userPw"
        />
      </div>
      <div class ="Password2">
        <Input
          type="password"
          label="비밀번호 확인"
          v-model="checkUserPw"
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
  name: 'StartFamily2',
  components: {
    SubTitle, Input, Button
  },
  data: () => ({
    userId: '',
    userPw: '',
    checkUserPw: ''
  }),
  methods: {
  nextPage: function () {
    this.$router.push('startFamily3')
  },
  prevPage: function () {
    this.$router.push('startFamily1')
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

  .ID{
    margin-bottom: 70px;
  }

  .buttons{
    width: 100%;
    position: fixed;
    bottom: 50px;
  }
</style>
