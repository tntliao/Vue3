<template>
  <h2>我是Parent组件</h2>
  <p>msg:{{ msg }}</p>
  <button @click="msg += '...'">更新数据</button>
  <hr />
  <Child :msg="msg" @test="testFun" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  //映射成组件标签
  components: {
    Child,
  },
  setup() {
    // 定义一个Ref类型的数据(响应式数据)
    let msg = ref("i want go to...");

    function testFun(value: string) {
      console.log(value);

      msg.value += value;
    }

    return {
      msg,
      testFun,
    };
  },
});
</script>
<style>
</style>