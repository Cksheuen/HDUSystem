<template>
    <div class="userArea">
        <img
            class="name_picture"
            src="/noface.jpg"
            alt="头像"
        />
        <div class="id">What's your name?</div>
        <coin></coin>
        <experience></experience>
        <about></about>
        <personalCenter></personalCenter>
        <worksControl></worksControl>
        <recommendation></recommendation>
        <quit></quit>
    </div>
</template>
<script setup lang="ts">
import experience from './experience.vue';
import coin from './coin.vue';
import about from './about.vue';
import personalCenter from './personalCenter.vue';
import worksControl from './worksControl.vue';
import recommendation from './recommendation.vue';
import quit from './quit.vue';
</script>
<style scoped lang="less">
.userArea {
    transform: translateX(-20px);
    vertical-align: top;
    align-items: center;
    text-align: center;
    position: absolute;
    top: -8px;
    left: 14px;
    /* 
    transform: translate(14px, -8px); */
    border: 1px solid #e3e5e7;
    z-index: 3;
    background-color: white;
    border-radius: 8px;
    width: 300px;
    height: 381px;
    .name_picture{
        position: absolute;
        transform: translate(-41px,-41px);
        width: 82px;
        height: 82px;
        border-radius: 41px;
    }
    .id {
        width: 252px;
        font-size: 18px;
        line-height: 22.5px;
        margin: 50px 24px 2px;
        height: 22.5px;
    }
}
</style>
