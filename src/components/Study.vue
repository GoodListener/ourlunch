<template>
  <div>
    <Title>study</Title>
    <SubTitle>부제</SubTitle>
    <Input
      type="password"
      label="Password"
      v-model="password"
    />
    <button>hi</button>
    <Button :class="prevButtonState" @click="prevPage()">Prev</Button>
    <Button :class="nextButtonState" @click="nextPage()">Next</Button>

<!-- 스터디 -->
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ol>
    </div>
    <div>
      <p>{{ message }}</p>
      <input v-model="message">
    </div>
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
  name: 'Study',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent
  },
  data: () => ({
    inputValue: '',
    password: '',
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기' }
    ],
    message: ''

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
