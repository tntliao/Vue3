<template>
  <h2>我是父级组件</h2>
  <button @click="isShow = !isShow">显示隐藏</button>
  <Child v-if="isShow" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
});
</script>
<style>
</style>