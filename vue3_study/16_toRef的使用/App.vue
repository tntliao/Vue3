<template>
  <h2>toRef的使用及特点</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <button @click="updata">更新数据</button>
  <hr />
  <Child :age="age" />
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    });
    /* 
      toRef
        把响应式数据state对象中的某个属性age变成了ref对象
        他们数据是互相关联的，谁的数据发生变化，都会一并修改
    */
    const age = toRef(state, "age");
    /* 
      ref
        把响应式对象中的某个属性使用ref进行包装，变成一个ref对象
        ref只是把数据copy了一份，他们互不关联，就像你和谁一样...
     */
    const money = ref(state.money);

    console.log(age);
    console.log(money);

    const updata = () => {
      age.value += 1;
      // state.age += 1;

      // state.money += 100;
      // money.value += 100;
    };
    return {
      state,
      age,
      money,
      updata,
    };
  },
});
</script>
<style>
</style>