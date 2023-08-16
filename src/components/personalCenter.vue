<template>
    <div class="personal_center">
        <i class="ri-user-line left"></i>
        个人中心
        <i class="ri-arrow-right-s-line right"></i>
    </div>
</template>
<style scoped lang="less">
.personal_center {
    font-size: 16px;
    color: #61666d;
    border-radius: 8px;
    text-align: left;
    width: 224px;
    line-height: 38px;
    height: 38px;
    margin-left: 24px;
    margin-right: 2px;
    padding: 0 14px;
}
.personal_center:hover {
    animation-name: change_color;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    cursor: pointer;
}
.personal_center i:first-child {
    margin-right: 10px;
}
.personal_center i:last-child {
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
