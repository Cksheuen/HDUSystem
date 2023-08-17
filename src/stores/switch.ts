import { ref } from 'vue';
import { defineStore } from 'pinia';

export const pageOperate = defineStore('pageOperate', () => {
    let nowPage = ref('');
    function newPage(newPage: string): void {
        nowPage.value = newPage;
    }

    return { nowPage, newPage };
});
