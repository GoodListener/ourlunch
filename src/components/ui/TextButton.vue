<template>
  <button class="base_textbutton" @click="buttonClick()">
    <span class="base_text">
      <slot>TextButton</slot>
    </span>
  </button>
</template>

<script>
export default {
  props: [],
  methods: {
    buttonClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

.base_text {
  font-size: 0.875rem;
  color: black;
}
.base_textbutton {
  margin: 5px;
  padding: 5px 15px;
  width: auto;
  height: 30px;
  letter-spacing: 0.028rem;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #ffffff;
  background-color: rgba( 255, 255, 255, 0 );
}
</style>
