<template>
  <h3>{{ m1 }}</h3>
  <h3>{{ m2 }}</h3>
  <h3>{{ m3 }}</h3>
  <button @click="change">更改数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",

  /* 
      1.ref和reactive是Vue3的 composition(组合) API中2个最重要的响应式API
      2.ref用来处理基本数据类型，refactive用来处理对象(递归圣都响应式)
      3.如果ref对象/数组，内部会自动将对象/数组转换为reactive的代理对象
      4.reactive内部：通过使用Proxy来实现对 对象内部所有的数据的劫持，并通过Reflect操作对象内部数据
      5.ref的数据操作，在js中要用.value，在模板中不需要(内部解析模板会自动添加.value)
   */
  setup() {
    //如果ref中放入一个对象，那么是经过了reactive的处理，形成一个Proxy类型的对象
    const m1 = ref("AA");

    // 通过ref的方式设置数据
    const m2 = reactive({
      name: "BB",
      age: "1bt",
    });
    //ref也可以传入对象吗
    const m3 = ref({
      name: "CC",
      age: "2bt",
      wife: {
        name: "DD",
        age: "2GB",
      },
    });

    function change() {
      (m1.value += "..."), (m2.name += "???"), (m3.value.wife.name += "!!!");
    }

    return {
      m1,
      m2,
      m3,
      change,
    };
  },

  mounted() {
    console.log(this);
    console.log(this.m1);
    console.log(this.m2);
    console.log(this.m3);
  },
});
</script>
<style>
</style>