<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" :todos="todos" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updataTodo="updataTodo" />
      <Footer :todos="todos" :checkAll="checkAll" :deteleTodos="deteleTodos" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "./types/Todo";

export default defineComponent({
  name: "App",

  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "奥迪", isCompleted: false },
        { id: 2, title: "奔驰", isCompleted: false },
        { id: 3, title: "宝马", isCompleted: true },
      ],
    });
    //添加方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    //删除方法
    const deleteTodo = (id: number) => {
      const newTodos: any = state.todos.filter((item) => {
        return item.id !== id;
      });
      state.todos = newTodos;
    };
    //修改todo的isCompleted方法
    const updataTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      console.log(todo);
    };

    //全选或全不选
    const checkAll = (isCompoents: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompoents;
      });
    };

    //删除已完成
    const deteleTodos = () => {
      const newTodos = state.todos.filter((todo) => {
        return !todo.isCompleted === true;
      });
      state.todos = newTodos;
    };

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updataTodo,
      checkAll,
      deteleTodos,
    };
  },

  components: {
    Header,
    List,
    Footer,
  },
});
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>