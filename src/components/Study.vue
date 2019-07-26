<template>
<div id="todo-list-example">
  <ul>
    <li v-for="(famMember, index) in famMembers" v-bind:key="index">
    {{ famMember.name }}
    </li>
  </ul>
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
  props: ['title'],
  data: () => ({
    famMembers: []
  }),
  mounted () {
    this.$http.get('https://jsonplaceholder.typicode.com/users/')
      .then((response) => {
        console.log(response.data)
        this.famMembers = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  name: 'Study',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
  // computed: {
  //   page: function () {
  //     if (this.$route.query && this.$route.query.page) {
  //       return parseInt(this.$route.query.page)
  //     } else {
  //       return 1
  //     }
  //   },
  //   prevButtonState: function () {
  //     return this.page === 1 ? 'disabled' : 'default'
  //   },
  //   nextButtonState: function () {
  //     return 'primary'
  //   }
  // }
}
</script>
