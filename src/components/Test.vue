<template>
  <div>
    <Title>test</Title>
    <Button class="primary">Primary</Button>
    <Button class="default">Default</Button>
    <Button class="disabled">Disabled</Button>
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
