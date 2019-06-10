<template>
  <div>
    <Title>우리의점심</Title>
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

<style>
  h2 {
    margin-bottom: 270px;
  }
  button.base_button.primary {
    border-bottom: 80px;
  }

</style>
