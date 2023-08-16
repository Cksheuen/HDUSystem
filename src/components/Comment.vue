<template>
    <div class="id">
        <span class="classID">CHEM2201</span>
        <span class="className">有机化学（1）</span>
        <span class="teacherName">（沈增明）</span>
    </div>
    <div class="scoreAndTime">
        <span class="score">推荐指数：</span>
        <span class="scoreCon">5</span>
        <span class="term">学期：</span>
        <span class="termCon">2022-2023-2</span>
    </div>
    <div class="description">课程内容： 上课自由度： 考核标准：</div>
    <div class="time">发表于：2023/07/16 21:10</div>
    <div class="bottomLine">
        <span class="keyID">#24268</span>
        <span class="like">
            <el-radio-group v-model="isLike" size="small" class="inLike">
                <el-radio-button label="like">
                    <i class="ri-thumb-up-line"></i>
                </el-radio-button>
                <el-radio-button label="dislike" color="white">
                    <i class="ri-thumb-down-line"></i>
                </el-radio-button>
            </el-radio-group>
        </span>
        <span>
            <el-button class="share" type="primary" :icon="Share" size="small" color="white" />
        </span>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Edit } from '@element-plus/icons-vue';
import { Share } from '@element-plus/icons-vue';
let isLike = ref<string>('like');
</script>
<style scoped>
div {
    margin-bottom: 10px;
}
.id {
    color: rgb(64, 158, 255);
    span {
        margin-right: 5px;
    }
}
.scoreAndTime {
    .score,
    .term {
        font-weight: 600;
    }
    .scoreCon,
    .termCon {
        margin-right: 5px;
    }
}
.time,
.bottomLine {
    box-sizing: content-box;
    position: relative;
    height: 24px;
    line-height: 24px;
    color: rgb(140, 140, 140);
    .like {
        display: inline-block;
        margin-left: 10px;
        width: 80px;
        .inLike {
            position: absolute;
            top: 0%;
        }
    }
    .share {
        position: absolute;
        top: 0%;
    }
}
</style>