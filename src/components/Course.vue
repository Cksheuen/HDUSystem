<template>
    <div class="line1">
        <span class="id">AB305</span>
        <span class="name">生态工程原理与应用（李旭东）</span>
        <span class="score">4.2</span>
    </div>
    <div class="line2">
        <el-tag class="ml-2" type="info" color="rgb(246, 255, 237)">Tag 3</el-tag>
        <span class="point">2学分</span>
        <span class="college">农业与生物学院</span>
        <span class="peopleNum" style="color: rgb(179, 172, 182); font-weight: 300">6人评价</span>
    </div>
</template>
<style scoped lang="less">
div {
    position: relative;
    color: rgb(31, 165, 127);
    span:nth-child(2) {
        margin-left: 10px;
    }
    span:last-child {
        color: black;
        font-weight: 600;
        display: inline-block;
        height: 16px;
        line-height: 16px;
        position: absolute;
        top: calc(100% - 16px);
        right: 0%;
    }
}
.line2 {
    margin-top: 10px;
    font-weight: 300;

    color: rgb(179, 172, 182);
    .el-tag {
        color: rgb(61, 159, 121);
        transform: translateY(-1px);
    }
}
</style>
