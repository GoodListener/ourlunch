<template>
  <div>
    <Title class="title">우리의로또</Title>
    <div>
      <div class="middle">
        <div>{{ lottoArray }}</div>
        <div>
          <Button class="primary" @click="startLotto">로또 번호 추출</Button>
          <Button class="default" v-show="lottoArray.length > 0" @click="restartLotto">다시해</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'

export default {
  name: 'Lotto',
  components: {
    Button, Title
  },
  data: () => ({
    lottoArray: []
  }),
  methods: {
    startLotto: function () {
      while (this.lottoArray.length < 6) {
        let chooseNumber = (parseInt(Math.random() * 45) + 1)
        if ((this.lottoArray.filter(num => num === chooseNumber).length) === 0) {
          this.lottoArray.push(chooseNumber)
        }
        this.lottoArray.sort(this.sortNumber)
      }
    },
    restartLotto: function () {
      this.lottoArray = []
      this.startLotto()
    },
    sortNumber: function (a, b) {
      return a - b
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

</style>
