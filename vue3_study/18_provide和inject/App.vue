<template>
  <h2>provide 与 inject</h2>
  <p>当前颜色：{{ color }}</p>
  <button @click="color = 'red'">红色</button>
  <button @click="color = 'green'">绿色</button>
  <button @click="color = 'blue'">蓝色</button>
  <hr />
  <Son />
</template>
<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Son.vue";
export default defineComponent({
  name: "App",
  components: {
    Son,
  },
  setup() {
    //响应式的数据
    const color = ref("red");
    provide("color", color);
    return {
      color,
    };
  },
});
</script>
<style>
</style>