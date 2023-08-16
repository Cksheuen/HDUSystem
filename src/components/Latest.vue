<template>
    <div>
        <div class="headerDiv">
            <span class="leftBox l1">最新点评</span>
            <span class="leftBox l2">共有{{}}个点评</span>
            <span class="rightBox">
                <el-button type="primary" :icon="Edit">新点评</el-button>
            </span>
        </div>
        <Comments></Comments>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/components/Comments.vue';
import { Edit } from '@element-plus/icons-vue';
</script>
<style scoped lang="less">
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
    .l2 {
        font-size: 14px;
        color: rgb(135, 135, 192);
    }
    .rightBox {
        float: right;
        line-height: 60px;
        margin-right: 20px;
    }
}
</style>
