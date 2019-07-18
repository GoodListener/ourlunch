<template>
  <span class="base_icon" @click="iconClick()">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: [],
  methods: {
    iconClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
