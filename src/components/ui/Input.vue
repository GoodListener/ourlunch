<template>
  <div :class="type">
    <label :class="labelText">{{label}}</label>
    <input
    class="base_input"
    :type="type"
    :value="value"
    @focus="onfocus"
    @blur="onfocusout"
    @change="onchange" />
  </div>
</template>

<script>
export default {
  beforeMount () {
    if (this.value) {
      this.labelText = 'focusin'
    }
  },
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
      type: String
    },
    label: {
      type: String,
      default: 'label'
    },
    change: {
      type: Function
    }
  },
  methods: {
    onfocus: function () {
      this.labelText = 'focusin'
    },
    onfocusout: function () {
      if (this.value) {
        this.labelText = 'focusin'
      } else {
        this.labelText = 'focusout'
      }
    },
    onchange: function (e) {
      this.change(e.target.value)
    }
  }
}
</script>

<style scoped>
div.text {
  display: inline-flex;
  height: 1.5rem;
}

div.text label {
  position: absolute;
  display: flex;
  align-items: flex-start;
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
              transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}

.focusout {
  transform: none;
}

.focusin {
  transform: scale(0.75) translate(-0.5rem, -1.32rem);
  color: gray;
}

input {
  border: 0px;
}

input[type="text"] {
  outline: none;
  font-size: 1.0rem;
  border-bottom: 1px solid #000;
  z-index: 1;
  background-color: transparent;
}

input[type="checkbox"] {

}

input[type="password"] {
  outline: none;
  font-size: 1.0rem;
  border-bottom: 1px solid #000;
  z-index: 1;
  background-color: transparent;
}
</style>
