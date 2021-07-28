<template>
  <li
    @mouseenter="mouseHandle(true)"
    @mouseleave="mouseHandle(false)"
    :style="{ background: bgColor }"
  >
    <label>
      <input type="checkbox" v-model="updataItem" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem(todo.id)">
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/Todo";

export default defineComponent({
  name: "Item",
  props: {
    todo: Object as () => Todo,
    deleteTodo: {
      type: Function,
      required: true,
    },
    updataTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const bgColor = ref("");
    const isShow = ref(false);
    const mouseHandle = (flag: boolean) => {
      if (flag) {
        bgColor.value = "pink";
        isShow.value = true;
      } else {
        bgColor.value = "white";
        isShow.value = false;
      }
    };
    const deleteItem = (id: number) => {
      props.deleteTodo(id);
    };
    const updataItem = computed({
      get() {
        return props.todo?.isCompleted;
      },
      set(value) {
        props.updataTodo(props.todo, value);
      },
    });
    return {
      bgColor,
      isShow,
      mouseHandle,
      deleteItem,
      updataItem,
    };
  },
});
</script>
<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>