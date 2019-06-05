<template>
  <div>
    <Title>우리의점심</Title>
    <div class="middle">
      <div>
        <Button class="default">기존 점심팸 참여</Button>
      </div>
      <div>
        <Button class="primary">점심팸 새로 시작</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue'
import Title from '@/components/ui/Title.vue'

export default {
  name: 'Test',
  components: {
    Button, Title
  }
}
</script>

<style>
</style>
