<template>
<div>
  <input class="form-control" :value="value" @input="handleInput">
  </input>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: ['value'],
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

