<template>
  <div class="card">
    <div class="card-header">
            Rule Builder
          </div>
    <div class="card-body">
      <rule-list :rules="rules" :columns="columns"/>
      <div class="card mt-3">
        <div class="card-header">
          Add Rule
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="alert alert-danger p-2" role="alert" v-if="formError">
                {{ formError }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <a @click.prevent.stop="toggleRule('number')" :class="['nav-link', (regexRule) ? '' : 'active']" href="#">Number Rule</a>
                </li>
                <li class="nav-item">
                  <a @click.prevent.stop="toggleRule('regex')" :class="['nav-link', (regexRule) ? 'active' : '']" href="#">Regex Rule</a>
                </li>
              </ul>
            </div>
          </div>

          <br/>
          <label v-if="regexRule" class="mt-2">
            Regex
            <input class="form-control" placeholder="/A/" type="text" v-model="regex">
          </label>
          <label v-else class="mt-2">
            Number Criteria
            <div class="row">
              <div class="col-md-8 mt-1">
                <select class="form-control" v-model="numberCriteria">
                  <option value="greaterThan">Greater than</option>
                  <option value="lessThan">Less than</option>
                  <option value="equalTo">Equal to</option>
                  <option value="greaterThanOrEqualTo">Greater than or equal to</option>
                  <option value="lessThanOrEqualTo">Less than or equal to</option>
                </select>
              </div>
              <div class="col-md-4">
                <input type="number" placeholder="Number" class="form-control mt-1" v-model="number"/>
              </div>
            </div>
          </label><br/>
          <label class="mt-2">
            Column
            <select v-model="rule.column" class="form-control">
              <option v-for="(column, index) in columns" :key="index" :value="index">{{ column }}</option>
            </select>
          </label><br/>
          <label class="mt-2">
            Background Color
            <input type="text" placeholder="#ffcc00" v-model="rule.formatting.backgroundColor" class="form-control">
            <p class="text-muted">Please enter the hex code of the background color</p>
          </label><br/>
          <button class="btn btn-primary pointer btn-lg btn-block mt-2" @click.prevent.stop="createRule">Create Rule</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RuleList from './RuleList';

export default {
  name: 'ruleBuilder',
  props: {
    rules: Array,
    columns: Array,
  },
  components: {
    RuleList,
  },
  data() {
    return {
      rule: {
        column: 0,
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
    toggleRule(toggleTo) {
      if (toggleTo === 'number') {
        this.regexRule = false;
      } else if (toggleTo === 'regex') {
        this.regexRule = true;
      } else {
        this.regexRule = !this.regexRule;
      }
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
      if ((this.rule.column >= 0) &&
      (this.rule.formatting.backgroundColor && this.rule.formatting.backgroundColor.length > 0)) {
        if (this.rule.formatting.backgroundColor[0] !== '#') {
          this.rule.formatting.backgroundColor = `#${this.rule.formatting.backgroundColor}`;
        }
        const rule = Object.assign(ruleWithCriteria, this.rule);
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
    deleteRule(ruleId) {
      this.$emit('deleteRule', ruleId);
    },
  },
};
</script>
