<template>
  <div class="card">
    <div class="card-header">
      Sheet
    </div>
    <div class="card-body">
      <div class="container">
      <table class="table table-hover">
        <div class="thead">
          <div class="table-row row">
            <div class="table-heading col-3" scope="col" v-for="(heading,index) in table.headings" :key="index">
              {{heading}}
            </div>
          </div>
        </div>
        <div>
          <trow :data="row" v-for="(row, index) in table.rows" :key="index" :rules="rules">
          </trow>
        </div>
      </table>
      </div>
    </div>
  </div>
</template>

<script>

import trow from './Row';

export default {
  name: 'displayTable',
  components: {
    trow,
  },
  props: {
    table: {
      type: Object,
    },
    rules: {
      type: Array,
    },
  },
};
</script>
