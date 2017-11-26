<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <display-table :table="table"/>
      </div>
      <div class="col-sm-12 col-md-4">
        <rule-builder/>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/bootstrap/bootstrap.scss';
import '@/assets/css/fontawesome/font-awesome.scss';

import DisplayTable from './components/Table';
import RuleBuilder from './components/RuleBuilder';

export default {
  name: 'app',
  data() {
    return {
      table: {
        headings: ['Name', 'Roll Number', 'Marks'],
        rows: [
          {
            data: ['Shivam', 123, 22],
          },
          {
            data: ['Arora', 123, 22],
            children: [
              { data: ['Nishant', 1417424, 59] },
              {
                data: ['Arora', 1417425, 69],
                children: [
                  {
                    data: ['Shivam', 123, 22],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    DisplayTable,
    RuleBuilder,
  },
};
</script>

<style>
</style>
