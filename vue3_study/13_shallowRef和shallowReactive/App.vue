<template>
  <h2>shallowRef和shallowReactive</h2>
  <h3>{{ m1 }}</h3>
  <h3>{{ m2 }}</h3>
  <h3>{{ m3 }}</h3>
  <h3>{{ m4 }}</h3>
  <button @click="updata">更改数据</button>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  shallowRef,
  shallowReactive,
} from "vue";
export default defineComponent({
  name: "App",

  setup() {
    //深度劫持(深度监视)----深度响应
    const m1 = ref({
      name: "ljj",
      age: 18,
      cars: {
        name: "奥迪",
      },
    });
    //浅劫持(浅监视)----浅响应
    const m2 = shallowRef({
      name: "ljj",
      age: 18,
      cars: {
        name: "奥迪",
      },
    });
    //深度劫持(深度监视)----深度响应
    const m3 = reactive({
      name: "ljj",
      age: 18,
      cars: {
        name: "奥迪",
      },
    });
    //浅劫持(浅监视)----浅响应
    const m4 = shallowReactive({
      name: "ljj",
      age: 18,
      cars: {
        name: "奥迪",
      },
    });
    function updata() {
      // m1.value.name += "...";
      // m1.value.cars.name += "...";

      // m2.value.name += "...";

      // m3.name += "...";
      // m3.cars.name += "...";

      // m4.name += "...";
      m4.cars.name += "...";
    }
    return {
      m1,
      m2,
      m3,
      m4,
      updata,
    };
  },
});
</script>
<style>
</style>