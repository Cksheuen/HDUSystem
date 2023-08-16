<template>
    <div class="courseList">
        <el-card class="box-card">
            <div class="courseHead">
                <span>筛选</span>
            </div>
            <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                <li v-for="i in count" :key="i" class="infinite-list-item item">
                    <Course></Course>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import Comment from '@/components/Comment.vue';
import Course from './Course.vue';
import { ref } from 'vue';
const count = ref(0);
const load = () => {
    count.value += 2;
};
</script>
<style scoped lang="less">
.courseList {
    box-sizing: border-box;
    width: 60%;
    min-width: 650px;
    padding: 10px 20px;
    .box-card {
        padding: 0 20px;
        border-radius: 10px;
        overflow: hidden;
        .courseHead {
            margin: 0;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px rgb(242, 242, 242) solid;
            span {
                display: inline-block;
                height: 32px;
                line-height: 32px;
                font-weight: 600;
            }
        }
        .infinite-list {
            height: calc(100vh - 240px);
            padding: 0;
            margin: 0;
            list-style: none;
            .infinite-list-item {
                margin: 10px;
            }
        }
        .item {
            padding: 18px 0;
            font-size: 14px;
            border-bottom: 1px rgb(240, 240, 240) solid;
        }
    }
}
</style>
