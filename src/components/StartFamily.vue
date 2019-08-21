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
              data-vv-name="companyName"
              :error-messages="errors.first('companyName')"
              required
            />
          </div>
          <div class="famname">
            <Input
              type="text"
              label="새로운 점심팸 이름"
              v-model="family.newFamilyName"
              v-validate="'required|max:20'"
              data-vv-name="famName"
              :error-messages="errors.first('famName')"
              required
            />
          </div>
        </PageContent>

        <PageContent content-no="2">
          <div class="ID">
            <Input
              type="text"
              label="ID"
              v-model="family.userId"
              v-validate="'required|max:20'"
              data-vv-name="id"
              :error-messages="errors.first('id')"
              required
            />
          </div>
          <div class="Password1">
            <Input
              type="password"
              label="비밀번호 입력(6자 이상)"
              v-model="family.userPw"
              v-validate="'required|min:6'"
              data-vv-name="password"
              :error-messages="errors.first('password')"
              required
              ref="password"
            />
          </div>
          <div class="Password2">
            <Input
              type="password"
              label="비밀번호 확인"
              v-model="family.checkUserPw"
              v-validate="'required|confirmed:password'"
              data-vv-name="passwordConfirm"
              :error-messages="errors.first('passwordConfirm')"
              required
            />
          </div>
        </PageContent>

        <PageContent content-no="3">
          <div class = "nickname">
            <Input
              type="text"
              label="이름"
              v-model="family.userName"
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
              v-model="family.appetite"
              v-validate="'required|max:20'"
              data-vv-name="appetite"
              :error-messages="errors.first('appetite')"
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
      appetite: ''
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
            this.$validator.validate('companyName'),
            this.$validator.validate('famName')
          ]).then(res => {
            if (res.reduce((a, b) => a & b)) {
              this.$router.push('?page=' + (this.page + 1))
            }
          })
          break
        case 2:
          Promise.all([
            this.$validator.validate('id'),
            this.$validator.validate('password'),
            this.$validator.validate('passwordConfirm')
          ]).then(res => {
            if (res.reduce((a, b) => a & b)) {
              this.$router.push('?page=' + (this.page + 1))
            }
          })
          break
        case 3:
          this.$validator.validateAll()
            .then(res => {
              if (res) {
                famData.fam = this.family
                this.$router.push('startComplete')
              }
            })
          break
      }
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
