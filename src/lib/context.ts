import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export function setCount() {
	let count = writable<number>(0);

	setContext('count', count);
}

export function getCount() {
	return getContext<Writable<number>>('count');
}
