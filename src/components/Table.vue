<template>
  <div>
    <h1>Sheets</h1>
    <cell v-model="msg"></cell>
  </div>
</template>

<script>
import Cell from './Cell';

export default {
  name: 'displayTable',
  data() {
    return {
      msg: 'Sheets',
    };
  },
  components: {
    Cell,
  },
};
</script>
