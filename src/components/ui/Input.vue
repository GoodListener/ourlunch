<template>
  <span>
    <label>{{label}}</label>
    <input class="base_input" :type=type :value=value />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String
    }
  }
}
</script>

<style scoped>
input {
  border: 0px;
}

input[type="text"] {

}

input[type="checkbox"] {

}

input[type="password"] {

}
</style>
