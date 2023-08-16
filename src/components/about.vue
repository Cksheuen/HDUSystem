<template>
    <div class="about">
        <div class="attention">
            <span>∞</span>
            <span>关注</span>
        </div>
        <div class="fans">
            <span>0</span>
            <span>粉丝</span>
        </div>
        <div class="dynamic">
            <span>∞</span>
            <span>动态</span>
        </div>
    </div>
</template>
<style scoped  lang="less">
.about {
    width: 212px;
    line-height: 37.5px;
    height: 37.5px;
    margin: 0 0 12px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0 20px;
    margin-left: 24px;
    div span:first-child {
        text-align: center;
        display: block;
        font-size: 18px;
        line-height: 22.5px;
        height: 22.5px;
    }
    div span:last-child {
        text-align: center;
        display: block;
        color: #9499a0;
        font-size: 12px;
        line-height: 15px;
        height: 15px;
    }
}
</style>
