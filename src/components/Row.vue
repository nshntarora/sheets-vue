<template>
    <div class="table-body">
      <div class="table-row row">
        <div
            class="table-column col-3"
            v-for="(col,index) in data.data"
            :key="index">
          {{col}}
        </div>
      </div>
      <trow
        v-if="data.children && data.children.length"
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
};
</script>
