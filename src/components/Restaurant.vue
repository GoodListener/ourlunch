<template>
  <div>
    <Title>식당 등록하기</Title>
    <Page :page="content">
      <PageContent content-no="searchRestaurant">
        <div class="search_bar">
          <Input type="text" label="식당 검색"
            v-model="restaurantName"
            @keyup.enter="searchRestaurant"/><Icon @click="searchRestaurant">[돋보기 이미지]</Icon>
        </div>
        <div class="restaurant_list">
          <li class="list" v-for=" restaurant in restaurants" v-bind:key="restaurant.key" @click="selectRestaurant(restaurant)">
            <div>
              <p>{{restaurant.place_name }}</p>
              <p>{{restaurant.address_name}}</p>
            </div>
          </li>
        </div>
      </PageContent>
      <PageContent content-no="restaurantMap">
        <div>map 표시 페이지
          <KakaoMap :place="place"></KaKaoMap>
        </div>
      </PageContent>
      <PageContent content-no="pickRestaurant">
        <div>식당 종류 표시 페이지</div>
      </PageContent>
    </Page>
  </div>
</template>
<script>
import Title from '@/components/ui/Title'
import Input from '@/components/ui/Input'
import Icon from '@/components/ui/Icon'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { getRestaurants } from '../api/index.js'
import KakaoMap from '@/components/KakaoMap'

export default {
  name: 'Restaurant',
  components: {
    Title, Input, Icon, Page, PageContent, KakaoMap
  },
  methods: {
    searchRestaurant: function () {
      getRestaurants({
        query: this.restaurantName
      })
        .then(response => {
          this.restaurants = response.data.documents
        })
    },
    selectRestaurant: function (target) {
      this.place = target
      this.$router.push('?content=restaurantMap')
    }
  },
  data: () => ({
    restaurantName: '',
    restaurants: [],
    place: {},
    secondPageName: 'searchRestaurant'
  }),
  computed: {
    content: function () {
      if (this.$route.query && this.$route.query.content) {
        return this.$route.query.content
      } else {
        return this.secondPageName
      }
    }
  }
}

</script>

<style scoped>
li.list{
  list-style: none;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: 1px
  solid #DCDCDC;
  background-color : white;
}
</style>
