<template>
  <div class="dialog-content">
    <div class="dialog-title">알림</div>
    <div class="dialog-text">
      <b>{{ restaurantName }}</b> 을(를) 삭제합니다.
    </div>
    <div class="vue-dialog-buttons">
      <button type="button" class="vue-dialog-button" @click="$emit('close')">확인</button>
      <button type="button" class="vue-dialog-button" @click="$emit('close')">취소</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['restaurantName'],
  data () {
    return {
      score: 1
    }
  },
  methods: {
    selectStar (index) {
      this.score = index
    }
  }
}
</script>
<style scoped>
div{
  box-sizing: border-box;
}
.dialog-content{
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}
.dialog-title{
  font-weight: 600;
  padding-bottom: 15px;
}
.dialog-text{
  padding: 10px 0px 20px;
}
.vue-dialog-buttons{
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}
.vue-dialog-button{
  font-size: 12px !important;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
  letter-spacing: 1px;
  flex: 1 1 50%;
}
.fa-star-half{
  font-size: 32px;
  width: 18px;
  overflow: hidden;
}
.fa-star-half{
  color: lightgray;
}
.selected.fa-star-half{
  color: #f7e63b;
}
</style>
