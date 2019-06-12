<template>
  <div>
    <Title class="title">우리의점심</Title>
    <div>
      <div class="middle">
        <div>
          <Button class="default">점심팸에 참여하기</Button>
        </div>
        <div>
          <Button class="primary">새로운 점심 시작</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'

export default {
  name: 'Test',
  components: {
    Button, Title
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

</style>
