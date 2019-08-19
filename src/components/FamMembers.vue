<template>
<div class="famMember_wrapper">
  <div class="topFixArea">
    <h3>명단</h3>
    <TextButton class="copy_btn"><i class="fas fa-plus-circle"></i> 초대링크 복사</TextButton>
  </div>
  <ul>
    <li class="list" v-for="(famMember, index) in famMembers" v-bind:key="index">
      <div class="left">
        <span class="memberName">
          {{ famMember.memberName }}
        </span>
        <span class="appetite">
          {{ famMember.appetite }}
        </span>
        <br>
        <small class="restaurant">
          미평가 식당: {{ famMember.restaurant }}개
        </small>
      </div>
      <div class="right">
        <Button class="mini default">식당 평가</Button>
        <Button class="mini default gray_btn">삭제</Button>
      </div>
    </li>
  </ul>
  <div class="buttons">
      <Button class="default close_btn" @click="handleMainButton">닫기</Button>
  </div>
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
import famMember from '@/data/famMember'

export default {
  props: ['title'],
  methods:{
    handleMainButton: function () {
      this.$router.push('Main')
    }
  },
  data: () => ({
    famMembers: famMember.member.famMembersdata
  }),
  mounted: () => {
    console.log(famMember)
  },
  name: 'FamMembers',
  components: {
    Button, TextButton, Title, SubTitle, Input, Page, PageContent
  }
}
</script>
<style scoped>
.topFixArea{
  position: fixed;
  top: 0px;
  left: 0px;
  width:100%;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
}
.famMember_wrapper{
  float: left;
  margin: 0px 20px;
}
h3{
  float: left;
  margin-left: 20px;
}
.copy_btn{
  float: right;
  width: auto;
}
ul{
  padding: 0;
}
li.list{
  list-style: none;
  margin: 5px auto;
  padding: 20px 15px;
  border: 1px solid #DCDCDC;
  background-color : #fdfdfd;
  text-align: left;
  float: left;
  width: 100%;
  box-sizing: border-box;
}
.left{
  float: left;
}
.right{
  float: right;
}
.memberName{
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}
.appetite{
  font-size: 15px;
  font-weight: normal;
  color: #959595;
}
.restaurant{
  text-align: left;
  color: #959595;
}
.close_btn{
  width: 50%;
}
.buttons{
  width: 100%;
  position: fixed;
  bottom: 50px;
}
</style>
