<template>
  <h2>自定义hook函数操作</h2>
  <h3>x:{{ x }},y:{{ y }}</h3>
  <hr />

  <h3 v-if="loading">Loading...</h3>
  <h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
  <hr />

  <!-- 数组数据 -->
  <ul v-for="(item, index) in data" :key="index">
    <li>id:{{ item.id }}</li>
    <li>title:{{ item.title }}</li>
    <li>price:{{ item.price }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";
export default defineComponent({
  name: "App",

  setup() {
    const { x, y } = useMousePosition();

    //发送请求
    // const { loading, data, errorMsg } = useRequest("/data/address.json");
    const { loading, data, errorMsg } = useRequest("/data/products.json");

    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
<style>
</style>