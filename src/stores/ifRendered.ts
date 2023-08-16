import { ref } from 'vue';
import { defineStore } from 'pinia';

export const ifRender = defineStore('ifRender', () => {
    let ifRendered = ref(false);
    function renderComplete(): void {
        ifRendered.value = true;
    }
    function reRender(): void {
        ifRendered.value = false;
    }

    return { ifRendered, renderComplete, reRender };
});
