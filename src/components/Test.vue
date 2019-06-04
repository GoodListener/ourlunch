<template>
  <div>
    <div>test</div>
    <Button class="primary">Primary</Button>
    <Button class="default">Default</Button>
    <Button class="disabled">Disabled</Button>
  </div>
</template>

<script>
import Button from '@/components/ui/Button.vue'

export default {
  name: 'Test',
  components: {
    Button
  }
}
</script>
