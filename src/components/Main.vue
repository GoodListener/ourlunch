<template>
  <div>
    <Title class="title">?</Title>
    <div>
      <div>
        <div>
          <Button class="primary" @click="choiceLunch">오늘의 점심은?</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'

export default {
  name: 'Main',
  components: {
    Button, Title
  },
  methods: {
    choiceLunch: function () {
      this.$router.push('choiceLunch1')
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
  bottom: 50px;
}

</style>
