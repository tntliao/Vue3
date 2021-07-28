<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keydown.enter="addItem"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",

  props: {
    todos: {
      type: Array || Object,
      required: true,
    },
    addTodo: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const title = ref("");
    const addItem = () => {
      const item = title.value.trim();
      if (item) {
        const todo = {
          id: props.todos.length,
          title: item,
          isCompleted: false,
        };
        props.addTodo(todo);
        title.value = "";
      }
    };
    return {
      title,
      addItem,
    };
  },
});
</script>
<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>