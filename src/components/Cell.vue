<template>
<div>
  <!-- <input class="form-control" :value="value" @input.prevent.stop="handleInput">
  </input> -->
  {{ value }}
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

<style scoped>
input {
  width: 225px;
}
</style>

