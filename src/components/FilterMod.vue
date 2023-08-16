<template>
    <div class="filter">
        <el-card class="box-card">
            <div class="filterHead">
                <span class="fontSX">筛选</span>
                <el-button>确认</el-button>
            </div>
            <div class="demo-collapse">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="点评" name="2">
                        <div>
                            <el-checkbox v-model="checked1" label="Option 1" size="large" />
                            <el-checkbox v-model="checked2" label="Option 2" size="large" />
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="课程类别" name="3">
                        <div>
                            <el-checkbox v-model="checked1" label="Option 3" size="large" />
                            <el-checkbox v-model="checked2" label="Option 4" size="large" />
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="开课单位" name="4">
                        <div>
                            <el-checkbox v-model="checked1" label="Option 5" size="large" />
                            <el-checkbox v-model="checked2" label="Option 6" size="large" />
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-card>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);

const activeNames = ref(['1']);
const handleChange = (val: string[]) => {
    console.log(val);
};
</script>
<style scoped lang="less">
.filter {
    box-sizing: border-box;
    /* position: absolute; */
    width: 30%;
    min-width: 350px;
    max-height: calc(100vh - 200px);
    /* top: 0;
    left: 0; */
    padding: 10px 20px;
    .box-card {
        padding: 0 20px;
        border-radius: 10px;
        overflow: hidden;
        .filterHead {
            position: relative;
            margin: 0;
            height: 40px;
            line-height: 40px;
            .fontSX {
                display: inline-block;
                height: 32px;
                line-height: 32px;
                font-weight: 600;
            }
            .el-button {
                position: absolute;
                right: 0%;
                top: 4px;
                display: inline-block;
            }
        }
    }
}
</style>
