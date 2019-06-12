<template>
  <div>
    <Title>test</Title>
    <SubTitle>부제</SubTitle>
    <Input
      type="text"
      label="text"
      :value="inputValue"
      :change="onchange"
    />

    <Input
      type="password"
      label="Text Field"
      :value="inputValue"
      :change="onchange"
    />
    <Input
      type="checkbox"
      label="Text Field"
      :value="inputValue"
      :change="onchange"
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
  data () {
    return {
      inputValue: 'test'
    }
  },
  methods: {
    onchange: function (value) {
      this.inputValue = value
    }
  }
}
</script>
