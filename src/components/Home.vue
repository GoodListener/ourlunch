<template>
  <div>
    <Title class="title">우리의점심</Title>
    <div>
      <div class="middle">
        <div>
          <Button class="default">링크 받아서 입장하는</Button>
          <Button class="primary" @click="startFamily">새로운 점심 시작</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Button, Title
  },
  mounted: function () {
    if (!this.getLoginUser.isLogined) {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'getLoginUser'
    ])
  },
  methods: {
    startFamily: function () {
      this.$router.push('StartFamily')
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
