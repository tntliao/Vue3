<template>
  <h2>我是Child组件</h2>
  <p>msg:{{ msg }}</p>
  <button @click="emitTest">分发事件</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: ["msg"],
  /* 
    ##setup细节问题
    
    1.setup执行时机
        1).setup是beforeCreate生命周期回调前就执行了，而且就执行一次
        2).由此可以推断出:setup在执行的时候，当前的组件还没有创建出来，也就意味着：组件实例对象this根本不能用
        3).this是undefined，说明：就不能通过this再去调用data/computed/methods/props中的相关内容
        4).其实所有的composition API相关回调函数中也都不可以

    2.setup返回值
        1).setup中的返回值是一个对象，内部的属性和方法是给html模板使用的
        2).setup中的对象内部的属性 和 data函数中的return对象都可以在html模板中使用
        3).setup中的对象的属性和data函数中的对象中的属性会合并为组件对象的属性
        4).setup中的方法和methods对象中的方法会合并成为组件对象的方法
        5).在Vue3中尽量不要混合的使用data和setup
                                methods和setup
        6).一般不要混合使用：methods中可以访问setup提供的属性和方法，但在setup方法中不能访问data和methods
        7).setup不能是一个async函数：因为返回值不再是return的对象，二十promise，模板看不到return返回的对象
   */

  /* 
        beforeCreate() {
            console.log("Child组件beforeCreate执行了~");
        },
    */

  //setup(props,context)
  setup(props, { attrs, slots, emit }) {
    // console.log("Child组件setup执行了");
    let a = 10;
    // let d = this.b //不能访问data

    function emitTest() {
      emit("test", "???");
    }

    return {
      a,
      emitTest,
    };
  },

  data() {
    return {
      b: 20,
      c: this.a, //能访问到setup
    };
  },

  mounted() {
    console.log(this);
  },
});
</script>
<style>
</style>