<template>
  <div class="card">
    <div class="card-header">
        Added Rules
      </div>
    <div class="card-body">
      <div v-if="rules.length > 0">
      <div class="card" v-for="(rule, index) in rules" :key="rule.id">
        <div class="card-body">
          <i class="fa fa-trash float-right pointer" @click.prevent.stop="deleteRule(rule.id)"></i>
          #{{ index+1 }} <b>{{ columns[rule.column] }}</b>
        </div>
      </div>
      </div>
      <div class="alert alert-primary" role="alert" v-else>
        There are no rules added yet.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ruleList',
  props: {
    rules: Array,
    columns: Array,
  },
  methods: {
    deleteRule(ruleId) {
      this.$emit('deleteRule', ruleId);
    },
  },
};
</script>
