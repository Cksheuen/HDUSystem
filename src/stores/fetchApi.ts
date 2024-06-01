import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface Data {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export const fetchApi = defineStore('fetchApi', () => {
    let data = ref<Data>();

    function setNewVal(newData: Data): void {
        data.value = newData;
        console.log(data.value);
        
    }
    function del(index:number): void {
        
    }

    return { data, setNewVal };
});
