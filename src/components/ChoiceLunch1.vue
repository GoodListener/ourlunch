<template>
  <div>
    <div>
      <SubTitle class="title">오늘의 점심 멤버는?</SubTitle>
    </div>
    <ul>
      <li class="list"
        v-for="(famMember, index) in famMembers"
        :key="index"
        :class="(famMember.isSelected ? 'selected' : '')"
        @click="selectMember(index)">
        <span class="memberName">
          {{ famMember.memberName }}
        </span>
      </li>
    </ul>
    <div class="buttons">
        <Button class="default" @click="prevPage()">이전</Button>
        <Button class="primary" @click="nextPage()">다음</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import { getMembers } from '@/api/index'

export default {
  name: 'ChoiceLunch1',
  components: {
    SubTitle, Input, Button
  },
  data: () => ({
    famMembers: []
  }),
  mounted: function () {
    getMembers().then(response => {
      this.famMembers = response.data
    })
  },
  methods: {
    nextPage: function () {
      console.log(this.famMembers.filter(famMember => famMember.isSelected))
      this.$router.push('choiceLunch2')
    },
    prevPage: function () {
      this.$router.push('Main')
    },
    selectMember: function (index) {
      this.$set(this.famMembers[index], 'isSelected', !this.famMembers[index].isSelected)
    }
  }
}
</script>

<style scoped>

button.base_button.default {
  width: 20%;
}

button.base_button.primary {
  width: 50%;
}

.company {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}

ul{
  padding: 0;
}

li.list{
  list-style: none;
  margin: 5px;
  padding: 5px;
  border: 1px solid #DCDCDC;
  background-color : #fdfdfd;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}

li.selected {
  background-color: #329AFC;
  color: #fff;
}
</style>
