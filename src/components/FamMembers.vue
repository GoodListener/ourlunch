<template>
<div>
  <div>
    <ul>
      <li class="list" v-for=" famMember in famMembers" v-bind:key="famMember">
        <div>
          <div class="left">
            <span class="memberName">
              {{ famMember.memberName }}
            </span>
            <span class="appetite">
              {{ famMember.appetite }}<br>
            </span>
            <span class="restaurant">
              미평가 식당: {{ famMember.restaurant }}개
            </span>
          </div>
          <div class="right">
            <Button class="mini_default">식당 평가</Button>
            <Button class="mini_default">삭제</Button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class ="buttons">
      <Button class="default">닫기</Button>
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
import famMember from '@/data/famMember'

export default {
  props: ['title'],
  data: () => ({
    famMembers: famMember.member.famMembers1
  }),
  mounted: () => {
    console.log(famMember.member.famMembers1)
  },
  name: 'FamMembers',
  components: {
    Button, Title, SubTitle, Input, Page, PageContent
  }
}
</script>
<style scoped>

ul{
  padding-left: 5px;
}
li.list{
  list-style: none;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-bottom: 15px;
  padding-top: 15px;
  border: 1px
  solid #DCDCDC;
  background-color : white;
  text-align: left;
}
/* .left{
  float: left;
  width: 50%;
}
.right{
  float: left;
  width: 50%;
} */
.memberName{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.appetite{
  font-size: 15px;
  font-weight: normal;
}
.restaurant{
  text-align: left;
}
button.base_button.default{
  width: 50%;
}
.buttons{
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
