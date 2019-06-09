<template>
  <div>
    <Title>우리의점심</Title>
    <div class="middle">
      <div>
        <Button class="default">점심팸에 참여하기</Button>
      </div>
      <div>
        <Button class="primary">새로운 점심팸 시작</Button>
      </div>
      <div>
        <Button class="disabled">disabled sample</Button>
      </div>
      <div>
        <IconButton/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import IconButton from '@/components/ui/IconButton'

export default {
  name: 'Test',
  components: {
    Button, Title, IconButton
  }
}
</script>

<style>
</style>
