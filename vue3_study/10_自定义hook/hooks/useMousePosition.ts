import { onMounted, onUnmounted, ref } from "vue";

export default function () {
    const x = ref(-1);
    const y = ref(-1);

    const clickPosition = (event: MouseEvent) => {
        x.value = event.x;
        y.value = event.y;
    };
    onMounted(() => {
        window.addEventListener("click", clickPosition);
    });
    onUnmounted(() => {
        window.removeEventListener("click", clickPosition)
    });
    return {
        x, y
    }
}