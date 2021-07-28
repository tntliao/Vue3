<template>
  <h2>readonly和shallowReadonly</h2>
  <h4>stats:{{ state2 }}</h4>
  <button @click="updata">更改数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "ljj",
      price: "111111w",
      card: {
        name: "奥迪",
      },
    });
    // 只读的数据----#深度只读
    // const state2 = readonly(state);
    // 只读的数据----#浅度只读
    const state2 = shallowReadonly(state);

    function updata() {
      // state2.name += "...";
      state2.card.name += "...";
    }
    return {
      state2,
      updata,
    };
  },
});
</script>
<style>
</style>