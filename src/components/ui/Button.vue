<template>
  <button class="base_button" @click="buttonClick()">
    <span class="base_text">
      <slot>Button</slot>
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
.base_button {
  margin: 5px;
  padding: 5px 15px;
  width: 200px;
  height: 40px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2),
              0px 2px 2px 0px rgba(0,0,0,0.14),
              0px 3px 1px -2px rgba(0,0,0,0.12);
  letter-spacing: 0.028rem;
  box-sizing: border-box;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  border: 1px solid #808385;
  transition: all 0.3s;
}

.base_text {
  font-size: 0.875rem;
}

.mini {
  width: auto;
  height: 30px;
  box-shadow: none;
}

.default {
  border: 1px solid #329AFC;
  background-color: #FFF;
  color: #329AFC;
}
.gray_btn{
  border: 1px solid #808080;
  color: #959595;
}
.default:hover {
  border: 1px solid #5FB0FC;
  background-color: #FAFAFA;
  color: #5FB0FC;
}
.primary {
  border: 1px solid #329AFC;
  background-color: #329AFC;
  color: #FFF;
}
.primary:hover {
  border: 1px solid #5FB0FC;
  background-color: #5FB0FC;
  color: #FFE;
}
.disabled {
  border: 1px solid #BDBDBD;
  background-color: #BDBDBD;
  color: #FFF;
  cursor: default;
}
</style>
