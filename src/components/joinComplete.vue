<template>
  <div>
    <Title class="title">축하합니다. {{getLoginUser.name}}님<br>점심팸에 가입되었습니다.</Title>
    <div class ="buttons">
      <Button class="primary" @click="complete">우리의 점심 시작하기</Button>
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
  name: 'JoinComplete',
  components: {
    Title, SubTitle, Input, Button
  },
  data: () => ({
    user: {
      userName: '',
      appetite: ''
    }
  }),
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
