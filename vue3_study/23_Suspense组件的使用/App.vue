<template>
  <h2>App父级组件：Suspense组件的使用</h2>
  <Suspense>
    <!-- 
      全写 v-soly
      缩写 #
     -->
    <template #default>
      <!-- 异步组件 -->
      <!-- <AsyncComponent /> -->
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <!-- loading内容 -->
      <h2>loading...</h2>
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
/* 引入组件：静态引入和动态引入 */

//Vue2中的动态引入组件的写法：(在Vue3中这个写法不行)
// const AsyncComponent = () => import("./AsyncComponent.vue");

// Vue3中的动态引入组件的写法
/* const AsyncComponent = defineAsyncComponent(
  () => import("./AsyncComponent.vue")
); */

// 静态引入组件
import AsyncAddress from "./AsyncAddress.vue";
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress,
  },
});
</script>
<style>
</style>