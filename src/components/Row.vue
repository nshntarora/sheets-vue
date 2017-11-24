<template>
    <div class="table-body">
      <div class="table-row row">
        <i class="fa fa-plus" v-if="data.children && data.children.length" @click="toggle">i</i>
        <div class="table-column col-3"
          v-for="(col,index) in data.data"
          :key="index">
            {{col}}
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
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
