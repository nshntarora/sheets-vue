<template>
  <div>
    Rule Builder
    {{ rules }}
    <div class="card" v-for="(rule, index) in rules" :key="rule.id">
      <div class="card-body">
        #{{ index+1 }} <b>{{ columns[rule.column] }}</b>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        Add Rule
      </div>
      <div class="card-body">
        <div class="alert alert-danger" role="alert" v-if="formError">
          {{ formError }}
        </div>
        <label>
          Regex
          <input class="form-control" type="text" v-model="rule.regex">
        </label>
        <label>
          Column
          <select v-model="rule.column" class="form-control">
            <option v-for="(column, index) in columns" :key="index" :value="index">{{ column }}</option>
          </select>
        </label>
        <label>
          Background Color
          <input type="text" v-model="rule.formatting.backgroundColor" class="form-control">
        </label>
        <a href="#" class="btn btn-primary" @click.prevent.stop="addRule">Create Rule</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ruleBuilder',
  props: {
    rules: Array,
    columns: Array,
  },
  data() {
    return {
      rule: {
        regex: '',
        column: '',
        formatting: {
          backgroundColor: '',
        },
      },
      formError: '',
    };
  },
  methods: {
    addRule() {
      const { regex, column, formatting } = this.rule;
      if ((regex && regex.length > 0) &&
      (column >= 0) &&
      (formatting.backgroundColor && formatting.backgroundColor.length > 0)) {
        this.formError = '';
        this.$emit('addRule', {
          regex,
          column,
          formatting,
        });
        this.rule = {
          regex: '',
          column: '',
          formatting: {
            backgroundColor: '',
          },
        };
      } else {
        this.formError = 'I guess you missed something';
      }
    },
  },
};
</script>
