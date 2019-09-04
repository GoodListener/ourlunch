import { getFamily, getMyProfile } from '@/api/index'

export function processLogin (vm) {
  if (vm.$store.state.loginUser.isLogined) {
    if (vm.$store.state.loginUser.isJoinedFamily) {
      getFamily(vm.$store.state.loginUser.familyName).then((response) => {
        vm.$store.commit('joinFamily', response.data)
        vm.$router.push('../main')
      })
    } else {
      if (this.$route.params.familyName) { // join으로 들어왔을 때
        vm.$router.push('../joinFam/' + this.$route.params.familyName)
      } else {
        vm.$router.push('./')
      }
    }
  }
}

export function checkStatus (data, vm) {
  if (data.status && data.status === 'connected') {
    getMyProfile().then(response => { // TODO : API로 실제 로그인 정보 가져오기
      const userData = response.data
      userData.profile_image = data.user.properties.profile_image
      userData.thumbnail_image = data.user.properties.thumbnail_image
      vm.$store.commit('loginUser', userData)
      processLogin(vm)
    })
  }
}
