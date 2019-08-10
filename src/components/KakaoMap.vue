<template>
  <div><div id="map"></div></div>
</template>

<script>
import loadScriptOnce from 'load-script-once'

export default {
  name: 'KakaoMap',
  props: ['place'],
  data: () => ({
    map: {},
    kakao: {},
    infoWindow: {}
  }),
  mounted: () => {
    this.info = {lat: 37.5073734599034, lng: 127.05683538326616}
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
        console.error(e)
      })
  }, // watch에다가 place를 넣기
  watch: {
    place: function (newPlace) {
      this.setCenter(newPlace)
    }
  },
  methods: {
    setCenter: (place) => {
      const pos = new window.kakao.maps.LatLng(place.y, place.x)
      this.map.setCenter(pos)

      if (this.infoWindow) {
        this.infoWindow.close()
      }

      this.infoWindow = new window.kakao.maps.InfoWindow({
        position: pos,
        content: '<div style="padding: 5px;">' + place.place_name + '</div>'
      })

      this.infoWindow.open(this.map)
    }
  }
}

</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>
