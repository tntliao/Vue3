<template>
  <h2>toRaw和markRaw</h2>
  <h3>state:{{ state }}</h3>
  <button @click="testToRaw">toRaw</button>
  <button @click="testMarkRaw">testMarkRaw</button>
</template>
<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";
interface state {
  name: string;
  age: number;
  want?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<state>({
      name: "ljj",
      age: 18,
    });
    const testToRaw = () => {
      //把代理对象变成普通对象。数据变化，界面不变化
      const user = toRaw(state);
      user.name += "...";
      console.log(user);
    };

    const testMarkRaw = () => {
      // state.want = ["money", "happy", "healthy"];
      const want = ["money", "happy", "healthy"];
      state.want = markRaw(want);
      setInterval(() => {
        if (state.want) {
          state.want[0] += "+";  //单写一个不会在有响应
          // state.age += 10000; //在打开这个上面那个也会有响应了
          console.log(state);
        }
      }, 1000);
    };
    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>
<style>
</style>