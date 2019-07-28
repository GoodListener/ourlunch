<template>
<div>
  <ul>
    <li class="list" v-for=" famMember in famMembers" v-bind:key="famMember">
      <span class="memberName">
        {{ famMember.memberName }}
      </span>
      <span class="appetite">
        {{ famMember.appetite }}<br>
      </span>
      <div class="restaurant">
        미평가 식당: {{ famMember.restaurant }}개
      </div>
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
import famMember from '@/data/famMember'

export default {
  props: ['title'],
  data: () => ({
    famMembers: famMember.member.famMembers1
  }),
  mounted: () => {
    // console.log(index)
    console.log(famMember.member.famMembers1)
  },
  name: 'FamMembers',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent
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
<style scoped>
li.list{
  list-style: none;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px
  solid #DCDCDC;
  background-color : white;
}
.memberName{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.appetite{
  font-size: 15px;
  font-weight: normal;
}
</style>
