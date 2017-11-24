<template>
  <div id="app" class="container-fluid">
    <display-table/>
  </div>
</template>

<script>
import '@/assets/css/bootstrap/bootstrap.scss';
import '@/assets/css/fontawesome/font-awesome.scss';

import DisplayTable from './components/Table';

export default {
  name: 'app',
  components: {
    DisplayTable,
  },
};
</script>

<style>
</style>
