<template>
  <div>
    <Title class="title">{{$route.params.familyName}}</Title>
    <SubTitle>점심팸에 합류하기 위해 로그인 해주세요</SubTitle>
    <div>
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
import { getFamily } from '@/api/index.js'

export default {
  name: 'Join',
  components: {
    Title, SubTitle
  },
  mounted: function () {
    this.checkExistFamily()
    this.goNextStep()
    this.$nextTick(function () {
      kakaoAuth('kakaoLoginButton', this.success, this.failure)
    })
  },
  methods: {
    checkExistFamily: function () {
      getFamily(this.$route.params.familyName)
        .then((data) => {
          console.log(data)
        })
    },
    checkStatus: function (data) {
      if (data.status && data.status === 'connected') {
        data.user.properties.isLogined = true
        this.$store.commit('loginUser', data.user.properties)
        this.goNextStep()
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
        this.$router.push('../joinFam/' + this.$route.params.familyName)
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
  max-width: 30rem;
}
.middle {
  margin-top: 150px;
  width: 100%;
}

#kakaoLoginButton {
  display: inline-block;
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
