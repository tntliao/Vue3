import { ref } from 'vue';
import axios from 'axios'

export default function (url: string) {
    //加载状态
    const loading = ref(true);
    //请求成功的数据
    const data = ref(null);
    //请求成功的数据
    const errorMsg = ref('')
    //发送请求
    axios.get(url).then(response => {
        //改变加载状态
        loading.value = false
        data.value = response.data
    }).catch(error => {
        //改变加载状态
        loading.value = false
        errorMsg.value = error.message || '404'
    })
    return {
        loading,
        data,
        errorMsg
    }
}