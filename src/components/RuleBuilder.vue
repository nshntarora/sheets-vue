<template>
  <div>
    Rule Builder {{ rules }}
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
        <button class="btn btn-secondary float-right" @click.prevent.stop="toggleRule">Toggle Regex</button>
        <label v-if="regexRule">
          Regex
          <input class="form-control" type="text" v-model="regex">
        </label>
        <label v-else>
          Number Criteria
          <select class="form-control" v-model="numberCriteria">
            <option value="greaterThan">Greater than</option>
            <option value="lessThan">Less than</option>
            <option value="equalTo">Equal to</option>
            <option value="greaterThanOrEqualTo">Greater than or equal to</option>
            <option value="lessThanOrEqualTo">Less than or equal to</option>
          </select>
          <input type="number" class="form-control" v-model="number"/>
        </label><br/>
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
        <a href="#" class="btn btn-primary" @click.prevent.stop="createRule">Create Rule</a>
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
        column: '',
        formatting: {
          backgroundColor: '',
        },
      },
      regex: '',
      regexRule: false,
      formError: '',
      numberCriteria: 'greaterThan',
      number: '',
    };
  },
  methods: {
    toggleRule() {
      this.regexRule = !this.regexRule;
    },
    showIncompleteError() {
      this.formError = 'I guess you missed something';
    },
    hideIncompleteError() {
      this.formError = '';
    },
    createRule() {
      if (this.regexRule) {
        this.createRegexRule();
      } else {
        this.createNumberRule();
      }
    },
    createRegexRule() {
      if (this.regex && this.regex.length) {
        const regex = new RegExp(this.regex);
        this.addRule({ regex });
      } else {
        this.showIncompleteError();
      }
    },
    createNumberRule() {
      if (this.numberCriteria && this.number !== '') {
        const numberCriteria = this.numberCriteria;

        let number;
        if (typeof this.number === 'string') {
          number = parseInt(this.number, 10);
        } else {
          number = this.number;
        }

        const rule = {};
        rule.numberCriteria = {};
        rule.numberCriteria[numberCriteria] = number;
        this.addRule(rule);
      } else {
        this.showIncompleteError();
      }
    },
    addRule(ruleWithCriteria) {
      const rule = Object.assign(ruleWithCriteria, this.rule);
      if ((rule.column >= 0) &&
      (rule.formatting.backgroundColor && rule.formatting.backgroundColor.length > 0)) {
        this.hideIncompleteError();
        this.$emit('addRule', rule);
        this.rule = {
          regex: '',
          column: '',
          formatting: {
            backgroundColor: '',
          },
        };
      } else {
        this.showIncompleteError();
      }
    },
  },
};
</script>
