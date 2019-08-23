<template>
  <div>
    <Title class="title">우리의점심</Title>
    <div>
      <div class="middle" v-if="!loginData.nickname">
          <div id="kakaoLoginButton"></div>
      </div>
      <div v-if="loginData.nickname" class="profile_box">
        <img :src="loginData.thumbnail_image" class="profile_image">{{loginData.nickname}}
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/ui/Title'
import loadScriptOnce from 'load-script-once'

export default {
  name: 'Login',
  components: {
    Title
  },
  data: () => ({
    loginData: {}
  }),
  mounted: function () {
    this.$nextTick(function () {
      loadScriptOnce('//developers.kakao.com/sdk/js/kakao.min.js')
        .then(() => {
          window.Kakao.init('1fbd6bb5f70208dbc01447307985588a')
          window.Kakao.Auth.getStatusInfo(this.checkStatus)
          window.Kakao.Auth.createLoginButton({
            container: '#kakaoLoginButton',
            success: this.success,
            fail: this.failure
          })
        })
        .catch((e) => {
          console.error(e)
        })
    })
  },
  methods: {
    checkStatus: function (data) {
      if (data.status && data.status === 'connected') {
        this.loginData = data.user.properties
      }
    },
    success: function (data) {
      window.Kakao.Auth.getStatusInfo(this.checkStatus)
    },
    failure: function (result) {
      console.error(result)
    }
  }
}
</script>

<style scoped>
.title {
  margin-bottom: 270px;
}

.middle {
  width: 100%;
  position: fixed;
  bottom: 150px;
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
