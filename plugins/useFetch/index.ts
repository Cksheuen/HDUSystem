import { ref, toRefs } from 'vue';

export async function useFetch(url: string) {
    const res = await fetch('https://dummyjson.com/products');
    const json = await res.json();

    const data = ref(null);
    const error = ref(null);

    fetch(url)
        .then(res => res.json())
        .then(json => (data.value = json))
        .then(err => (error.value = err));

    return json.value;
}
