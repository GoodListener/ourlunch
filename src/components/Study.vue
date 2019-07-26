<template>
<div id="todo-list-example">
  <ul>
    <li v-for=" famMembers in famMembers">
    {{ famMembers }}
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
// import testUser from '@/data/studydata'

export default {
  props: ['title'],
  data: () => ({
    userIndex : testUser.study.index,
    userName : testUser.study.myName,
    famMembers : testUser.study.famMembers
  }),
  mounted: () => {
    console.log(index),
    console.log(myName),
    console.log(famMembers)
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
 },
 // computed: {
 //    page: function () {
 //      if (this.$route.query && this.$route.query.page) {
 //        return parseInt(this.$route.query.page)
 //      } else {
 //        return 1
 //      }
 //    },
 //    prevButtonState: function () {
 //      return this.page === 1 ? 'disabled' : 'default'
 //    },
 //    nextButtonState: function () {
 //      return 'primary'
 //    }
 //  }
}
</script>
