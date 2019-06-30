<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['page'],
  computed: {
    currentPage: function () {
      return this.page
    }
  },
  provide () {
    const page = {}
    Object.defineProperty(page, 'currentPage', {
      enumerable: true,
      get: () => this.currentPage
    })
    return { page }
  }
}
</script>

<style scoped>
.section {
  width: 50%;
  background-color: transparent;
  margin: auto;
}
</style>
