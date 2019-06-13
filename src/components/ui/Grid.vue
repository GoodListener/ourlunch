<template>
  <div :class="grid"><slot></slot></div>
</template>

<script>
export default {
  props: {
    grid: Number
  }
}
</script>

<style scoped>
.xs-4 {
  width: 25%;
}

.xs-12 {
  width: calc(100% / 12);
}

.xs-6 {
  width: 50%;
}

.xs-8 {
  width: 75%;
}
</style>
