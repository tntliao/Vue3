<template>
  <button @click="isShow = !isShow">打开对话框</button>

  <Teleport to="body"> <!-- to到哪里就是把它放置到哪里 -->
    <div v-if="isShow">
      <div id="dialog_box"></div>
      <button @click="isShow = !isShow">关闭对话框</button>
    </div>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const isShow = ref(false);
    return {
      isShow,
    };
  },
});
</script>
<style>
#dialog_box {
  width: 300px;
  height: 200px;
  box-shadow: 0 10px 10px black;
}
</style>