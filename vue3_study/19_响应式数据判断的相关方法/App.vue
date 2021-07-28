<template>
  <h2>响应式数据的判断</h2>
</template>
<script lang="ts">
import {
  defineComponent,
  isRef,
  ref,
  isReactive,
  reactive,
  isReadonly,
  readonly,
  isProxy,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //isRef：检查一个值是否为一个ref对象
    console.log(isRef(ref({})));
    //isReactive：检查一个对象是否由reactive创建的响应式代理
    console.log(isReactive(reactive({})));
    //isReadonly：检查一个对象是否由 readonly创建的只读对象
    console.log(isReadonly(readonly({})));
    //isProxy：检查一个对象是否又reactive或者readonly方法创建的代理
    console.log(isProxy(readonly({})));
    console.log(isProxy(reactive({})));
  },
});
</script>
<style>
</style>