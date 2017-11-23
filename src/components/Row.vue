<template>
    <tr>
      <td
        v-for="(col,index) in data.data"
        :key="index">
          {{col}}
      </td>
      <trow
        v-if="data.children && data.children.length"
        v-for="(child, index) in data.children"
        :key="index"
        :data="child">
      </trow>
    </tr>
</template>

<script>
export default {
  name: 'trow',
  props: ['data'],
};
</script>
