<template>
  <div>
    <SubTitle class ="title1">축하합니다!</SubTitle>
    <SubTitle class ="title2">점심팸 등록 완료!</SubTitle>

      <div class ="buttons">
          <Button class="primary">우리의점심 시작</Button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'

export default {
  name: 'StartComplete',
  components: {
    SubTitle, Input, Button
  }
}
</script>

<style scoped>
.title1 {
  margin-bottom: 80px;
}

button.base_button.primary {
  width: 65%;
}

.title2 {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
