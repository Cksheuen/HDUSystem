<template>
    <header>
        <span>HDU选课社区</span>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="最新" name="latest">
                <template>
                    <Latest></Latest>
                </template>
            </el-tab-pane>
            <el-tab-pane label="关注" name="follow"></el-tab-pane>
            <el-tab-pane label="课程" name="course"></el-tab-pane>
        </el-tabs>
    </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';
import Latest from '@/components/Latest.vue';

const activeName = ref('latest');

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event);
};
</script>
<style scoped lang="less">
header {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 70px;
    font-size: 25px;
    font-weight: 600;
    line-height: 70px;
    background-color: white;
    span {
        line-height: 70px;
        margin-left: 20px;
    }
}
.demo-tabs {
    display: inline-block;
    position: absolute;
    top: calc(100% - 54px);
    padding-left: 50px;
    .el-tabs__content {
        padding: 32px;
        color: #6b778c;
        font-size: 43px;
        font-weight: 600;
    }
}
</style>
