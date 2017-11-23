<template>
  <div>
    <h1>Sheets</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" v-for="(heading,index) in table.headings" :key="index">
            {{heading}}
          </th>
        </tr>
      </thead>
      <tbody>
        <trow v-for="(row, index) in table.rows" :key="index" :data="row">
        </trow>
      </tbody>
    </table>
  </div>
</template>

<script>

import trow from './Row';

export default {
  name: 'displayTable',
  components: {
    trow,
  },
  data() {
    return {
      msg: 'Sheets',
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
  methods: {
    isArray(row) {
      if (row instanceof Array) {
        return true;
      }
      return false;
    },
    isJSONObject(row) {
      if (row instanceof Object) {
        return true;
      }
      return false;
    },
    hasChildren(row) {
      if (row.children && row.children.length > 0) {
        return true;
      }
      return false;
    },
  },
};
</script>
