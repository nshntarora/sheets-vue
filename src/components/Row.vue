<template>
    <div class="table-body">
      <div class="table-row row">
        <div class="table-column col-3"
          v-for="(col,index) in data.data"
          :key="index">
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
  },
};
</script>

<style>
.fa {
  border: 1px solid #ccc;
  padding: 1px;
}
</style>
