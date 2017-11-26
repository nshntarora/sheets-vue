<template>
  <div id="app" class="container-fluid mt-3">
    <div class="logo">
      Sheets
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-8">
        <display-table :table="table" :rules="rules"/>
      </div>
      <div class="col-sm-12 col-md-4">
        <rule-builder :rules="rules" :columns="table.headings" @addRule="addRule" @deleteRule="deleteRule"/>
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
            data: ['Nishant', 22, 33],
          },
          {
            data: ['Rohan', 31, 58],
            children: [
              { data: ['Arun', 10, 70] },
              {
                data: ['Ankur', 7, 74],
                children: [
                  {
                    data: ['Shivam', 40, 20],
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
            lessThanOrEqualTo: 40,
          },
          column: 2,
          formatting: {
            backgroundColor: '#f00',
          },
        },
        {
          id: 2,
          regex: new RegExp('N'),
          column: 0,
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
    deleteRule(ruleId) {
      const rule = this.rules.find(r => r.id === ruleId);
      const index = this.rules.indexOf(rule);
      this.rules.splice(index, 1);
    },
  },
};
</script>

<style>
</style>
