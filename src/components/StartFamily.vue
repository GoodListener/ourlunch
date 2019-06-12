<template>
  <div>
    <SubTitle class ="title">점심팸 새로 시작</SubTitle>
      <div class = "company">
        <Input
          type="text"
          label="회사명"
          :value="inputValue"
          :change="onchange"
        />
      </div>
      <div class ="famname">
        <Input
          type="text"
          label="새로운 점심팸 이름"
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
  name: 'StartFamily',
  components: {
    SubTitle, Input, Button
  }
}
</script>

<style scoped>
h3 {
  font-size:5px;
  margin-bottom: 80px;
}

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
