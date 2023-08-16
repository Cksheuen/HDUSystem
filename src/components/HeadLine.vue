<template>
    <header>
        <span>HDU选课社区</span>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-change="tabChange">
            <el-tab-pane label="最新" name="/latest"></el-tab-pane>
            <el-tab-pane label="关注" name="/follow"></el-tab-pane>
            <el-tab-pane label="课程" name="/course"></el-tab-pane>
        </el-tabs>

        <!-- <biliStyleUser></biliStyleUser> -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
            popper-class="content"
            style="
                position: absolute;
                top: 16px;
                margin: 0;
                right: 150px;
                z-index: 2;
                display: inline-block;
                height: 38px;
                width: 38px;
                border-radius: 19.1px;
            "
        >
            <el-sub-menu
                index="2"
                style="
                    position: absolute;
                    top: 0px;
                    z-index: 2;
                    display: inline-block;
                    height: 38px;
                    width: 38px;
                    border-radius: 19.1px;
                "
            >
                <template #title style="transform: translateX(-20px)" class="imgBox">
                    <img
                        :src="url"
                        alt=""
                        style="
                            position: absolute;
                            top: 0px;
                            right: 39px;
                            z-index: 2;
                            display: inline-block;
                            height: 38px;
                            width: 38px;
                            border-radius: 19.1px;
                        "
                    />
                </template>
                <userArea style="display: "></userArea>
            </el-sub-menu>
        </el-menu>
    </header>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus';
import { pageOperate } from '@/stores/nowPage';
import biliStyleUser from './biliStyleUser.vue';
import userArea from './userArea.vue';

const url = '/noface.jpg';
const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};

const paOperate = pageOperate();

let activeName = ref<string>('');
paOperate.$subscribe((mutation, state) => {
    activeName.value = state.nowPage;
    /* console.log(activeName.value); */
});

const router = useRouter();

const tabChange = (name: TabPaneName) => {
    router.push(`${name}`);
};
</script>
<style scoped lang="less">
header {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    min-width: 970px;
    height: 70px;
    font-size: 25px;
    font-weight: 600;
    line-height: 70px;
    background-color: white;
    span {
        line-height: 70px;
        margin-left: 20px;
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
    .el-menu-demo {
        display: inline-block;
        position: absolute;
        right: 0%;
    }
}
.el-popper {
    display: inline-block;
    background-color: red;
    border-radius: 10px;
    overflow: hidden;
}
.el-menu--popup,
.el-menu,
.el-menu--popup,
.el-menu--popup-bottom-start {
    margin: 0 10px;
}
</style>
<style>
.menuList {
    overflow: hidden;
    width: 200px;
    border-radius: 5px;
    .menuItem {
        display: flex;
        div {
            margin: auto;
        }
    }
}
.el-sub-menu .el-sub-menu__icon-arrow {
    display: none;
}
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
    position: absolute;
    top: 0px;
    transform: translateX(13px);
    display: inline-block;
    height: 38px;
    width: 38px;
    border-radius: 19.1px;
}
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title:hover {
    background-color: transparent;
}
</style>
