<template>
    <div class="quit">
        <div>
            <i class="ri-logout-circle-r-line"></i>
            退出登录
        </div>
    </div>
</template>
<style scoped lang="less">
.quit {
    position: relative;
    font-size: 16px;
    color: #61666d;
    width: 224px;
    height: 38px;
    margin-top: 13px;
    margin-left: calc(50% - 112px);
    border-top: 1px solid #e3e5e7;
    div {
        position: absolute;
        top: 0%;
        left: 0%;
        text-align: left;
        border-radius: 8px;
        width: 224px;
        line-height: 38px;
        height: 38px;
        i:first-child {
            margin-right: 10px;
        }
    }
    div:hover {
        animation-name: change_color;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        cursor: pointer;
    }
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
