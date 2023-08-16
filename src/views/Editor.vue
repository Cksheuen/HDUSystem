<template>
    <div class="editorBox"></div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <el-button type="primary" @click="send" class="butt">确认</el-button>
    <!-- <upLoad></upLoad> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import upLoad from '@/components/upLoad.vue';
let text = ref<string>(`课程内容：

上课自由度：

考核质量：

授课质量：
`);

const send = () => {
    console.log(text.value);
};
</script>
<style scoped lang="less">
.editorBox {
    position: absolute;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.3;
}
.v-md-editor {
    position: absolute;
    z-index: 4;
    top: 140px;
    left: calc(50% - 500px);
    width: 1000px;
    opacity: 1;
}
.butt {
    position: absolute;
    z-index: 4;
    top: 570px;
    left: calc(50% - 500px);
    opacity: 1;
}
</style>
