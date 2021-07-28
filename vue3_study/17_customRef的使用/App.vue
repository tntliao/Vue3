<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { customRef, defineComponent, ref } from "vue";
function debouncedRef(value: string, delay = 200) {
  let timeOutId: number;
  //自定义Ref
  return customRef((track, trigger) => {
    return {
      //返回的数据
      get() {
        //告诉Vue追踪数据
        track();
        return value;
      },
      //设置数据
      set(newValue: string) {
        // 清理定时器
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
          console.log(value, newValue);
          value = newValue;
          //告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    const keyword = debouncedRef("qwe", 300);
    return {
      keyword,
    };
  },
});
</script>
<style>
</style>