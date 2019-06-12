<template>
  <div>
    <Title>test</Title>
    <SubTitle>부제</SubTitle>
    <Input
      type="text"
      label="Text Field"
      v-model="inputValue"
    />
    <Input
      type="password"
      label="password"
      v-model="password"
    />
    <Button class="primary">Primary</Button>
    <Button class="default">Default</Button>
    <Button class="disabled">Disabled</Button>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'

export default {
  name: 'Test',
  components: {
    Button, Title, SubTitle, Input
  },
  data: () => ({
    inputValue: '',
    password: ''
  }),
  methods: {
    onPasswordChange: function (value) {
      this.password = value
    }
  }
}
</script>
