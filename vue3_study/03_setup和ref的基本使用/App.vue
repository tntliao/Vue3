<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updataCount">更新数据</button>
</template>
<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  //##需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  //vue2的实现方式
  /*data() {
		    return {
		        count: 0
		    }
		},
		methods: {
		  updataCount(){
		    this.count++
		  }
		}*/

  // vue3的实现方式
  setup() {
    // let count = 0; //此时的数据并不是响应式的数据(响应式数据：数据变化，页面跟着渲染变化)
    /* 
				ref是一个函数，作用：定义一个响应式的数据，返回的是一个ref对象，对象中有一个value属性，如果需要对数据进行操作，需要使用该ref对低矮用value的方式进行数据的操作
				html模板中是不需要使用.value属性的写法
				一般用来顶一个基本类型的响应式数据
			 */

    // const 的类型 Ref类型
    let count = ref(0);
    console.log(count); //Ref

    function updataCount() {
      console.log("aa");
      count.value++;
      // 这里需要.value才能操作，在html模板中是不需要.value,直接count就能获取到数据
    }

    return {
      //一定注意要return，上次就是没有return出去，找了2个小时
      count,
      updataCount,
    };
  },
});
</script>
