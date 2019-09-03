<template>
  <div>
    <Title class="title">패밀리에 가입하시겠습니까?</Title>
    <SubTitle>(회사 이름등 표시)</SubTitle>
    <div class ="buttons">
      <Button class="primary" @click="join">가입하기</Button>
      <Button class="default" @click="exit">이 패밀리가 아닌 것 같아요</Button>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { mapGetters } from 'vuex'

export default {
  name: 'JoinFamily',
  components: {
    Title, SubTitle, Input, Button
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
  methods: {
    complete: function () {
      this.$router.push('../main')
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 25px;
}

button.base_button.default{
  width: 20%;
}
button.base_button.primary{
  width: 50%;
}

.nickname{
  margin-bottom: 50px;
}
.buttons{
  width: 100%;
  position: fixed;
  bottom: 50px;
}

.my_profile_image
{
  width: 80px;
  height: 80px;
  border-radius: 40px;
}
</style>
