import {writable} from 'svelte/store';



const createWritableStore = (key, startValue) => {
    const { subscribe, set, update } = writable(startValue);

    return {
        subscribe,
        set,
        update,
        useLocalStorage: () => {
            const json = localStorage.getItem(key);
            if (json) {
                set(JSON.parse(json));
            }

            subscribe(current => {
                localStorage.setItem(key, JSON.stringify(current));
            });
        }
    };
}

export const personsStorage = createWritableStore('persons', []);