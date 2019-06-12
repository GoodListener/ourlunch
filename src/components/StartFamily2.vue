<template>
  <div>
    <SubTitle class ="title">점심팸 새로 시작 (2/3)</SubTitle>
      <div class = "ID">
        <Input
          type="text"
          label="ID"
          :value="inputValue"
          :change="onchange"
        />
      </div>
      <div class ="Password1">
        <Input
          type="password"
          label="비밀번호 입력"
          :value="inputValue"
          :change="onchange"
        />
      </div>
      <div class ="Password2">
        <Input
          type="password"
          label="비밀번호 확인"
          :value="inputValue"
          :change="onchange"
        />
      </div>

      <div class ="buttons">
          <Button class="default">이전</Button>
          <Button class="primary">다음</Button>
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
  }
}
</script>
<style>
  h3{
    font-size:5px;
    margin-bottom: 80px;
  }
  button.base_button.default{
    width: 20%;
  }
  button.base_button.primary{
    width: 50%;
  }

  .ID{
    margin-bottom: 70px;
  }
  .Password1{
    margin-bottom: 20px;
  }
  .buttons{
    width: 100%;
    position: fixed;
    bottom: 50px;
  }


</style>
