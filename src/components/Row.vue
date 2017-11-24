<template>
    <div class="table-body">
      <div class="table-row row">
        <div class="table-column col-3"
          v-for="(col,index) in data.data"
          :key="index"
          :style="classObject(index)">
          <i :class="iconClass" v-if="data.children && data.children.length && index===0" @click="toggle"></i>
          &nbsp;&nbsp;{{col}}
        </div>
      </div>
      <trow
        v-if="data.children && data.children.length && open"
        v-for="(child, index) in data.children"
        :key="index"
        :data="child">
      </trow>
    </div>
</template>

<script>
export default {
  name: 'trow',
  props: ['data'],
  data() {
    return {
      open: false,
      addedRules: [
        {
          regex: 'string',
          column: 2,
          formatting: {
            backgroundColor: '#fc0',
          },
        },
        {
          regex: 'string',
          column: 1,
          formatting: {
            backgroundColor: '#fcc',
          },
        },
      ],
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
    classObject(index) {
      for (let i = 0, len = this.addedRules.length; i < len; i += 1) {
        if (this.addedRules[i].column === index) {
          return {
            backgroundColor: this.addedRules[i].formatting.backgroundColor,
            padding: '12px',
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
