<template>
  <h2>{{ age }}</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const age = 10;
    return {
      age,
    };
  },
});
</script>
