<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>dream：{{ user.dream }}</h3>
  <button type="button" @click="updataUser">更新数据</button>
</template>
<script>
import { reactive, defineComponent } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const obj = {
      name: "liaojiajia",
      age: 18,
      gender: "男",
      dream: {
        salary: "15k",
        cars: ["宝马", "红旗", "科迈罗"],
      },
    };
    /* 
		把数据变成响应式的数据
		返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
		user现在是代理对象，obj是目标对象
		user对象的类型是Proxy
	*/
    const user = reactive(obj);
    console.log(user);
    // const updataUser = ()=>{}
    function updataUser() {
      /* 
		操作obj是不会以更新界面,但数据会改变
		操作代理对象，目标对象中的数据也会发生变化
		*/
      (user.name = "廖家嘉"),
        (user.dream.salary = "12k"),
        // user.dream.cars.push('奥迪')
        // 这样也可以添加数据
        (user.dream.cars[3] = "奥拓");
    }

    return {
      user,
      updataUser,
    };
  },
});
</script>
