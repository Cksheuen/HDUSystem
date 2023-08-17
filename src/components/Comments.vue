<template>
    <div class="comment">
        <el-card class="box-card">
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="i in count" :key="i" class="infinite-list-item item">
                    <Comment v-if="prop.type === 'notTeacher'"></Comment>
                    <Teacher v-else></Teacher>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import Comment from '@/components/Comment.vue';
import { ref } from 'vue';
import Teacher from './teacher.vue';

const prop = defineProps(['type'])

const count = ref(0);
const load = () => {
    count.value += 2;
};
</script>
<style scoped lang="less">
.comment {
    box-sizing: border-box;
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    .box-card {
        padding: 0 20px;
        border-radius: 10px;
        overflow: hidden;
        .item {
            padding: 18px 0;
            font-size: 14px;
            border-bottom: 1px rgb(240, 240, 240) solid;
        }
    }
}
.infinite-list {
    height: calc(100vh - 200px);
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list .infinite-list-item {
    margin: 10px;
    /* background: var(--el-color-primary-light-9); 
    /* color: var(--el-color-primary); */
}
</style>
