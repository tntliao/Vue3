<template>
  <!-- Vue2中需要一个跟标签 -->
  <!-- <div>
    <h2>Liao</h2>
    <h2>JiaJia</h2>
  </div> -->

  <!-- 
    Vue3中：组件可以没有跟标签，内部会将多个标签包含在一个Fragment虚拟元素中
      好处：减少标签层级，减少内存占用
   -->
  <h2>Liao</h2>
  <h2>JiaJia</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style>
</style>