<template>
  <h2 :style="{ color }">Grandson组件</h2>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const color = inject("color");
    return {
      color,
    };
  },
});
</script>
<style>
</style>