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
      <PageContent content-no="1">1번의 글</PageContent>
      <PageContent content-no="2">2번의 글</PageContent>
      <PageContent content-no="3">3번의 글</PageContent>
      <PageContent content-no="4">4번의 글</PageContent>
    </Page>
    <TextButton>텍스트버튼</TextButton>
    <Button :class="prevButtonState" @click="prevPage()">Prev</Button>
    <Button :class="nextButtonState" @click="nextPage()">Next</Button>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import TextButton from '@/components/ui/TextButton'
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'

export default {
  name: 'Test',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent, TextButton
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
