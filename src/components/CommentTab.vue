<template>
    <div>
        <div class="headerDiv">
            <span class="leftBox l1">
                <template v-if="str === '最新'">{{ str }}点评</template>
                <template v-else>关注{{ strShow }}点评</template>
            </span>
            <span class="leftBox l2">共有{{}}个点评</span>
            <span class="rightBox">
                <el-button v-if="str === '最新'" type="primary" :icon="Edit" @click="toEditor">
                    新点评
                </el-button>
                <el-link v-else-if="mode" type="success" class="str2">关注的课程</el-link>
                <el-link v-else type="success" class="str2" style="color: #1393ce">
                    关注的老师
                </el-link>
            </span>
            <span class="switchBox">
                <el-switch
                    size="large"
                    v-model="mode"
                    class="ml-2"
                    inline-prompt
                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #1393ce"
                    active-text="课程"
                    inactive-text="老师"
                    @change="change"
                />
            </span>
        </div>
        <Comments :type="nowType"></Comments>
    </div>
</template>
<script setup lang="ts">
import Comments from '@/components/Comments.vue';
import router from '@/router';
import { Edit } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const props = defineProps(['str']);

let nowType = ref('notTeacher')

let mode = ref(true);

let strShow = ref('课程');

const toEditor = () => {
    router.push('/editor');
};

const change = () => {
    if (!mode.value) {
        /* mode.value = false; */
        nowType.value = 'Teacher'
    } else {
        /* mode.value = true; */
        nowType.value = 'notTeacher'
    }
};
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
        .str2 {
            font-size: 14px;
            margin-right: 24px;
        }
    }
    .switchBox {
        float: right;
        line-height: 60px;
        margin-right: 20px;
    }
}
</style>
