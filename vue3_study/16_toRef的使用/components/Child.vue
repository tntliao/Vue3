<template>
  <h2>Child子级组件</h2>
  <h3>age:{{ age }}</h3>
  <h3>length:{{ length }}</h3>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";
function getLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "App",
  props: {
    age: {
      type: Number,
      required: true, //必须传入
    },
  },

  setup(props) {
    console.log(props);
    const length = getLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>
<style>
</style>