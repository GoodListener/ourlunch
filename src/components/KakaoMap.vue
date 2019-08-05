<template>
  <div id='map'></div>
</template>

<script>
import loadScriptOnce from 'load-script-once'

export default {
  props: ['lat', 'lng'],
  mounted: () => {
    loadScriptOnce('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9371d0a85e46655cd886905c0cab174c')
      .then(() => {
        window.kakao.maps.load(() => {
          console.log(this.lat)
          console.log(this.lng)
          this.map = new window.kakao.maps.Map(document.getElementById('map'), {
            center: new window.kakao.maps.LatLng(this.lat, this.lng),
            level: 1
          })
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
}

</script>

<style scoped>
#restaurantMap {
  width: 500px;
  height: 500px;
}
</style>
