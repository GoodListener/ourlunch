<template>
  <button class="base_button">
    <span class="base_text">
      <slot>Button</slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style scoped>
.base_button {
  margin: 5px;
  padding: 5px 15px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2),
              0px 2px 2px 0px rgba(0,0,0,0.14),
              0px 3px 1px -2px rgba(0,0,0,0.12);
  letter-spacing: 0.028rem;
  box-sizing: border-box;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  border: 2px solid #808385;
}

.base_text {
  font-size: 0.875rem;
}

.default {
  border: 2px solid #329AFC;
  background-color: #FFF;
  color: #329AFC;
}

.default:hover {
  border: 2px solid #5FB0FC;
  background-color: #EEF;
  color: #5FB0FC;
}

.primary {
  border: 2px solid #329AFC;
  background-color: #329AFC;
  color: #FFF;
}

.primary:hover {
  border: 2px solid #5FB0FC;
  background-color: #5FB0FC;
  color: #FFE;
}

.disabled {
  border: 2px solid #303030;
  background-color: #303030;
  color: #FFF;
  cursor: default;
}
</style>
