<template>
  <h2>Son组件</h2>
  <hr />
  <Grandson />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Grandson from "./Grandson.vue";
export default defineComponent({
  name: "App",
  components: {
    Grandson,
  },
});
</script>
<style>
</style>