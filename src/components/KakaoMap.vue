<template>
  <div id="map"></div>
</template>

<script>
import loadScriptOnce from 'load-script-once'

export default {
  name: 'KakaoMap',
  props: ['place'],
  mounted: () => {
    this.info = {lat: 33.4970353986304, lng: 126.508921919644}
    loadScriptOnce('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9371d0a85e46655cd886905c0cab174c')
      .then(() => {
        window.kakao.maps.load(() => {
          this.map = new window.kakao.maps.Map(document.getElementById('map'), {
            center: new window.kakao.maps.LatLng(this.info.lat, this.info.lng),
            level: 3
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
#map {
  width: 100%;
  height: 500px;
}
</style>
