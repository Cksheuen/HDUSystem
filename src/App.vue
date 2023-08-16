<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeadLine from '@/components/HeadLine.vue';
</script>

<template>
    <HeadLine />
    <RouterView />
</template>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
#app {
    height: 100px;
    overflow: hidden;
    background-color: rgb(245, 245, 245);
}
</style>
