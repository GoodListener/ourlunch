<template>
  <div>
    <SubTitle class="title">우리의점심 점심팸 시작하기</SubTitle>
      <Page :page="page">
        <PageContent content-no="1">
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
            />
          </div>
        </PageContent>

        <PageContent content-no="2">
          <div class="my_profile_image_box">
            <img :src="getLoginUser.profile_image" class="my_profile_image">
          </div>
          <div class="company">
            <Input
              type="text"
              label="회사명"
              v-model="family.companyName"
              v-validate="'required|max:20'"
              data-vv-name="companyName"
              :error-messages="errors.first('companyName')"
              required
            />
          </div>
          <div class="famname">
            <Input
              type="text"
              label="점심팸 이름"
              v-model="family.familyName"
              v-validate="'required|max:20'"
              data-vv-name="famName"
              :error-messages="errors.first('famName')"
              required
            />
          </div>
        </PageContent>
      </Page>
      <div class="buttons">
          <Button class="default" @click="prevPage()">이전</Button>
          <Button class="primary" @click="nextPage()">다음</Button>
      </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import SubTitle from '@/components/ui/SubTitle'
import Input from '@/components/ui/Input'
import Page from '@/components/ui/Page'
import PageContent from '@/components/ui/PageContent'
import { mapGetters } from 'vuex'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'StartFamily',
  components: {
    SubTitle, Input, Button, Page, PageContent
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
  methods: {
    prevPage: function () {
      if (this.page > 1) {
        this.$router.push('?page=' + (this.page - 1))
      } else {
        this.$router.push('/')
      }
    },
    nextPage: function () {
      switch (this.page) {
        case 1:
          Promise.all([
            this.$validator.validate('name'),
            this.$validator.validate('appetite')
          ]).then(res => {
            if (res.reduce((a, b) => a & b)) {
              this.$router.push('?page=' + (this.page + 1))
            }
          })
          break
        case 2:
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
                this.$router.push('startComplete')
              }
            })
          break
      }
    }
  },
  computed: {
    ...mapGetters([
      'getLoginUser'
    ]),
    page: function () {
      if (this.$route.query && this.$route.query.page) {
        return parseInt(this.$route.query.page)
      } else {
        return 1
      }
    }
  }
}
</script>

<style scoped>

button.base_button.default {
  width: 20%;
}

button.base_button.primary {
  width: 50%;
}

.company,.nickname {
  margin-bottom: 50px;
}

.buttons {
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
