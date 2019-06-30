<template>
  <div class="content" :class="{'active' : contentNo == page.currentPage}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['contentNo'],
  inject: ['page']
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: none;
}

.active {
  display: block;
}
</style>
