<template>
  <div class="card">
    <div class="card-header">
      Rule Builder
    </div>
    <div class="card-body">
      <rule-list :rules="rules" :columns="columns" @deleteRule="deleteRule"/>
      <rule-form :columns="columns" @addRule="addRule"/>
    </div>
  </div>
</template>

<script>
import RuleList from './RuleList';
import RuleForm from './RuleForm';

export default {
  name: 'ruleBuilder',
  props: {
    rules: Array,
    columns: Array,
  },
  components: {
    RuleList,
    RuleForm,
  },
  methods: {
    addRule(rule) {
      this.$emit('addRule', rule);
    },
    deleteRule(ruleId) {
      this.$emit('deleteRule', ruleId);
    },
  },
};
</script>
