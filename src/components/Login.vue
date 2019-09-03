<template>
  <div>
    <Title class="title">우리의점심</Title>
    <div>
      <div>
        <img class="main_image" src=static/loginpage_img.png>
      </div>

      <SubTitle> ⬇︎ 공감하면 바로시작 ⬇︎ </SubTitle>
      <div class="middle">
          <div id="kakaoLoginButton"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title'
import SubTitle from '@/components/ui/SubTitle'
import kakaoAuth from '@/utils/kakaoAuth'
import { getFamily, getMyProfile } from '@/api/index.js'

export default {
  name: 'Login',
  components: {
    Title, SubTitle
  },
  mounted: function () {
    this.goNextStep()
    this.$nextTick(function () {
      kakaoAuth('kakaoLoginButton', this.success, this.failure)
    })
  },
  methods: {
    checkStatus: function (data) {
      if (data.status && data.status === 'connected') {
        getMyProfile().then(response => {
          const userData = response.data
          userData.profile_image = data.user.properties.profile_image
          userData.thumbnail_image = data.user.properties.thumbnail_image
          this.$store.commit('loginUser', userData)
          this.goNextStep()
        })
      }
    },
    success: function (data) {
      window.Kakao.Auth.getStatusInfo(this.checkStatus)
    },
    failure: function (result) {
      console.error(result)
    },
    goNextStep: function () {
      if (this.$store.state.loginUser.isLogined) {
        if (this.$store.state.loginUser.isJoinedFamily) {
          getFamily(this.$store.state.loginUser.familyName).then((response) => {
            this.$store.commit('joinFamily', response.data)
            this.$router.push('../main')
          })
        } else {
          this.$router.push('./')
        }
      }
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 70px;
}
.main_image {
  width: 100%;
  max-width: 20rem;
}
.middle {
  padding-top: 20px;
  width: 100%;
}
.profile_box {
  display: inline-flex;
  align-items: center;
}
.profile_image {
  width: 50px;
  border-radius: 30px;
}

</style>
