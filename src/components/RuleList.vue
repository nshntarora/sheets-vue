<template>
  <div>
    <div class="card" v-for="(rule, index) in rules" :key="rule.id">
      <div class="card-body">
        <i class="fa fa-trash float-right pointer" @click.prevent.stop="deleteRule(rule.id)"></i>
        #{{ index+1 }} <b>{{ columns[rule.column] }}</b>
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
};
</script>
