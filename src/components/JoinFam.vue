<template>
  <div>
    <SubTitle>{{$route.params.familyName}}</SubTitle>
    <Title class="title">{{$route.params.familyName}} 점심팸 시작하기</Title>
    <div class="my_profile_image_box">
      <img :src="getLoginUser.profile_image" class="my_profile_image">
    </div>
    <div class="nickname">
      <Input
        type="text"
        label="이름"
        v-model="user.userName"
        v-validate="'required|max:20'"
        data-vv-name="name"
        :error-messages="errors.first('name')"
        required
        @keyup="handleEnter"
      />
    </div>
    <div class ="taste">
      <Input
        type="text"
        label="나의 입맛은?"
        v-model="user.appetite"
        v-validate="'required|max:20'"
        data-vv-name="appetite"
        :error-messages="errors.first('appetite')"
        required
        @keyup="handleEnter"
      />
    </div>
    <div class ="buttons">
      <Button class="primary" @click="complete">완료</Button>
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
  $_veeValidate: {
    validator: 'new'
  },
  name: 'JoinFam',
  components: {
    Title, SubTitle, Input, Button
  },
  data: () => ({
    user: {
      userName: '',
      appetite: ''
    },
    family: {
      isJoined: false,
      companyName: '',
      familyName: ''
    }
  }),
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
  methods: {
    handleEnter: function (e) {
      if (e.keyCode === 13) {
        this.complete()
      }
    },
    complete: function () {
      this.$validator.validateAll()
        .then(res => {
          if (res) {
            const fullAuthUser = this.getLoginUser
            fullAuthUser.name = this.user.userName
            fullAuthUser.appetite = this.user.appetite
            fullAuthUser.isFullAuth = true
            this.$store.commit('loginUser', fullAuthUser)

            this.family.isJoined = true
            this.family.inviteLink = 'family/' + this.family.familyName
            this.$store.commit('joinFamily', this.family)
            this.$router.push('../joinComplete/' + this.$route.params.familyName)
          }
        })
    }
  }
}
</script>

<style scoped>
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
  object-fit: cover;
}
</style>
