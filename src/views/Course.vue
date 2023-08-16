<template>
    <div class="courseBody">
        <div class="headerDiv">
            <span class="leftBox l1">所有课程</span>
        </div>
        <div class="content">
            <FilterMod></FilterMod>
            <CourseList></CourseList>
        </div>
    </div>
</template>
<script setup lang="ts">
import FilterMod from '@/components/FilterMod.vue';
import CourseList from '@/components/CourseList.vue';
</script>
<style scoped lang="less">
.courseBody {
    width: 100%;
    height: 100%;
    min-width: 950px;
    .headerDiv {
        position: absolute;
        top: 70px;
        left: 0%;
        width: 100%;
        height: 60px;
        .leftBox {
            float: left;
            margin-left: 20px;
            line-height: 60px;
        }
        .l1 {
            font-size: 25px;
            font-weight: 600;
        }
    }
    .content {
        position: absolute;
        top: 130px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        min-width: 970px;
        height: 100px;
    }
}
</style>
