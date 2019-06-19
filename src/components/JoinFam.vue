<template>
  <div>
    <SubTitle class ="title">점심팸 이름을 입력해주세요</SubTitle>
      <div class = "nickname">
        <Input
          type="text"
          label="점심팸 이름"
          v-model="famName"
        />
      </div>

      <div class ="buttons">
          <Button class="default">이전</Button>
          <Button class="primary">완료</Button>
      </div>

  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'

export default {
  name: 'JoinFam',
  components: {
    SubTitle, Input, Button
  },
  data: () => ({
    userName: '',
    appetite: ''
  })
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
