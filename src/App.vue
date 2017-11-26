<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-8">
        <display-table :table="table" :rules="rules"/>
      </div>
      <div class="col-sm-12 col-md-4">
        <rule-builder :rules="rules" :columns="table.headings" @addRule="addRule"/>
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
      rules: [
        {
          id: 1,
          numberCriteria: {
            lessThanOrEqualTo: 22,
          },
          column: 2,
          formatting: {
            backgroundColor: '#fc0',
          },
        },
        {
          id: 2,
          numberCriteria: {
            greaterThan: 30,
          },
          column: 1,
          formatting: {
            backgroundColor: '#fcc',
          },
        },
      ],
    };
  },
  components: {
    DisplayTable,
    RuleBuilder,
  },
  methods: {
    addRule(rule) {
      this.rules.push(Object.assign({ id: this.rules.length + 1 }, rule));
    },
  },
};
</script>

<style>
</style>
