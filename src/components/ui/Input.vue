<template>
  <div :class="type">
    <label :class="labelText">{{label}}</label>
    <input
    class="base_input"
    :type="type"
    :value="value"
    @focus="onfocus()"
    @blur="onfocusout()" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelText: 'focusout'
    }
  },
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
      type: String,
      default: 'label'
    }
  },
  methods: {
    onfocus: function () {
      this.labelText = 'focusin'
    },
    onfocusout: function () {
      this.labelText = 'focusout'
    }
  }
}
</script>

<style scoped>
div.text {
  display: inline-flex;
}

div.text label {
  position: absolute;
  display: flex;
  align-items: flex-start;
  transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}

.focusout {
  transform: none;
}

.focusin {
  transform: scale(0.75);
}

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
