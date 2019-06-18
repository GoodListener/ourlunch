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
      label="Password"
      v-model="password"
    />
    <Button class="primary">Primary</Button>
    <Button class="default">Default</Button>
    <Button class="disabled">Disabled</Button>
    <br>
    <Page :page="page">
      <PageContent page=1>1페이지</PageContent>
      <PageContent page=2>2페이지</PageContent>
      <PageContent page=3>3페이지</PageContent>
      <PageContent page=4>4페이지</PageContent>
    </Page>
    <Button :class="prevButtonState" @click="prevPage()">Prev</Button>
    <Button :class="nextButtonState" @click="nextPage()">Next</Button>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'

export default {
  name: 'Test',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent
  },
  data: () => ({
    inputValue: '',
    password: ''
  }),
  methods: {
    prevPage: function () {
      if (this.page > 1) {
        this.$router.push('?page=' + (this.page - 1))
      }
    },
    nextPage: function () {
      this.$router.push('?page=' + (this.page + 1))
    }
  },
  computed: {
    page: function () {
      if (this.$route.query && this.$route.query.page) {
        return parseInt(this.$route.query.page)
      } else {
        return 1
      }
    },
    prevButtonState: function () {
      return this.page === 1 ? 'disabled' : 'default'
    },
    nextButtonState: function () {
      return 'primary'
    }
  }
}
</script>
