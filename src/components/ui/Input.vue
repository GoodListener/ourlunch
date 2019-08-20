<template>
  <div :class="type">
    <label :class="labelState" :for="autoGenId">{{label}}</label>
    <input
    :id="autoGenId"
    :type="type"
    class="base_input"
    ref="input"
    :value="value"
    :required="required"
    @input="updateValue($event.target.value)"
    @focus="onfocus"
    @blur="onfocusout"
    @keyup="onkeyup"/>
    <p class="error_msg">{{errorMessages}}</p>
  </div>
</template>

<script>
export default {
  beforeMount () {
    if (this.value) {
      this.labelState = 'focusin'
    }
  },
  data: () => ({
    labelState: 'focusout'
  }),
  props: ['type', 'label', 'value', 'required', 'errorMessages'],
  methods: {
    onfocus: function () {
      this.labelState = 'focusin'
    },
    onfocusout: function () {
      if (this.value) {
        this.labelState = 'focusin'
      } else {
        this.labelState = 'focusout'
      }
    },
    onkeyup: function (e) {
      this.$emit('keyup', e)
    },
    updateValue: function (inputValue) {
      this.$emit('input', inputValue)
    }
  },
  computed: {
    autoGenId: function () {
      return 'input-id-' + Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>

<style scoped>
div {
  display: inline-flex;
  min-height: 48px;
  margin: 4px 0 24px;
  padding-top: 16px;
  position: relative;
  box-sizing: border-box;
  font-family: inherit;
}

div label {
  position: absolute;
  display: flex;
  align-items: flex-start;
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
              transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}

input {
  outline: none;
  font-size: 1.0rem;
  border: 0;
  border-bottom: 1px solid #000;
}

.focusout {
  transform: none;
}

.focusin {
  transform: scale(0.75) translateY(-1.32rem) translateX(calc(-18%));
  color: gray;
}

.error_msg {
  position: absolute;
  top: 2.4rem;
  font-size: 0.8rem;
  color: #DD5145;
  text-align: justify;
}
</style>
