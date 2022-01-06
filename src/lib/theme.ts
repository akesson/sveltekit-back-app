import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const hue: Writable<number | undefined> = writable(undefined);
