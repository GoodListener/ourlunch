<template>
  <div>
    <SubTitle class="title">점심팸 새로 시작 ({{page}}/3)</SubTitle>
      <Page :page="page">
        <PageContent content-no="1">
          <div class="company">
            <Input
              type="text"
              label="회사명"
              v-model="family.companyName"
              v-validate="'required|max:20'"
              data-vv-name="회사명"
              :error-messages="errors.collect('family.companyName')"
              required
            />
          </div>
          <div class="famname">
            <Input
              type="text"
              label="새로운 점심팸 이름"
              v-model="family.newFamilyName"
              v-validate="'required|max:20'"
              data-vv-name="점심팸 이름"
              :error-messages="errors.collect('family.newFamilyName')"
              required
            />
          </div>
        </PageContent>

        <PageContent content-no="2">
          <div class = "ID">
            <Input
              type="text"
              label="ID"
              v-model="family.userId"
            />
          </div>
          <div class ="Password1">
            <Input
              type="password"
              label="비밀번호 입력"
              v-model="family.userPw"
            />
          </div>
          <div class ="Password2">
            <Input
              type="password"
              label="비밀번호 확인"
              v-model="family.checkUserPw"
            />
          </div>
        </PageContent>

        <PageContent content-no="3">
          <div class = "nickname">
            <Input
              type="text"
              label="이름"
              v-model="family.userName"
            />
          </div>
          <div class ="taste">
            <Input
              type="text"
              label="나의 입맛은?"
              v-model="family.appetite"
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
import famData from '@/data/family'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'StartFamily1',
  components: {
    SubTitle, Input, Button, Page, PageContent
  },
  data: () => ({
    family: {
      companyName: '',
      newFamilyName: '',
      userId: '',
      userPw: '',
      checkUserPw: '',
      userName: '',
      appetite: '',
      dictionary: {
        custom: {
          companyName: {
            required: () => 'can not be empty',
            max: '20자 이내'
          },
          newFamName: {
            required: () => 'newFamNaemd 은 필수값',
            max: '20자ㅏ 이내'
          }
        }
      }
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
      console.log(this.errors)
      this.$validator.validateAll()
        .then(result => {
          if (!result) return false
          if (this.page < 3) {
            this.$router.push('?page=' + (this.page + 1))
          } else {
            famData.fam = this.family
            this.$router.push('startComplete')
          }
        })
        .catch(e => console.error(e))
    }
  },
  computed: {
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

.company {
  margin-bottom: 50px;
}

.buttons {
  width: 100%;
  position: fixed;
  bottom: 50px;
}

</style>
