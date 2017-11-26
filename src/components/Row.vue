<template>
    <div class="table-body">
      <div class="table-row row">
        <div class="table-column col-3"
          v-for="(col,index) in data.data"
          :key="index"
          :style="classObject(index, col)">
          <i :class="iconClass" v-if="data.children && data.children.length && index===0" @click="toggle"></i>
          &nbsp;&nbsp;{{col}}
        </div>
      </div>
      <trow
        v-if="data.children && data.children.length && open"
        v-for="(child, index) in data.children"
        :key="index"
        :data="child"
        :rules="rules">
      </trow>
    </div>
</template>

<script>
export default {
  name: 'trow',
  props: ['data', 'rules'],
  data() {
    return {
      open: false,
    };
  },
  computed: {
    iconClass() {
      return {
        'fa pointer': true,
        'fa-plus': !this.open,
        'fa-minus': this.open,
      };
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    classObject(index, col) {
      for (let i = 0, len = this.rules.length; i < len; i += 1) {
        if ((this.rules[i].column === index) && col) {
          return {
            backgroundColor: this.rules[i].formatting.backgroundColor,
          };
        }
      }
      return {};
    },
  },
};
</script>

<style>
.fa {
  border: 1px solid #ccc;
  padding: 1px;
}
</style>
