<template>
<div id="todo-list-example">
  <ul>
    <li v-for="(famMember, index) in famMembers" v-bind:key="index">
    {{ famMember.memberName }}
    </li>
  </ul>
  <Modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">modal header test</h3>
    <div slot="body">우리의 점심</div>
  </Modal>
</div>
</template>

<script>

import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { getMembers } from '../api/index.js'
import Modal from './ui/Modal.vue'

export default {
  props: ['title'],
  data: () => ({
    famMembers: [],
    showModal: true
  }),
  created () {
    getMembers()
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
    Button, Title, SubTitle, Input, Page, PageContent, Modal
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
