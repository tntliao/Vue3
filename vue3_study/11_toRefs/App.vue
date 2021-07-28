<template>
  <h2>toRefs的使用</h2>
  <hr />
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <hr />
  <h3>name:{{ name2 }}</h3>
  <h3>age:{{ age2 }}</h3>
  <h3></h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
function useFeaturex() {
  const state = reactive({
    name2: "钢铁侠",
    age2: 56,
  });
  return {
    ...toRefs(state),
  };
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "liaojiajia",
      age: 18,
    });

    // toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个 perproty 都是一个ref对象
    let { name, age } = toRefs(state);
    setInterval(() => {
      age.value++;
    },);
    const { name2, age2 } = useFeaturex();
    return {
      name,
      age,
      name2,
      age2,
    };
  },
});
</script>
<style>
</style>