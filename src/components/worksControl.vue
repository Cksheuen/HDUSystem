<template>
    <div class="works_control">
        <i class="ri-file-copy-2-line"></i>
        投稿管理
        <i class="ri-arrow-right-s-line right"></i>
    </div>
</template>
<style scoped lang="less">
.works_control {
    font-size: 16px;
    color: #61666D;
    border-radius: 8px;
    text-align: left;
    width: 224px;
    line-height: 38px;
    height: 38px;
    margin-left: 24px;
    margin-right: 2px;
    padding: 0 14px;
}
.works_control:hover {
    animation-name: change_color;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    cursor: pointer;
}.works_control i:first-child {
    margin-right: 10px;
}
.works_control i:last-child {
    float: right;
}
@keyframes change_color {
    0% {
        background: transparent;
    }
    100% {
        background-color: #e3e5e7;
    }
}
</style>
