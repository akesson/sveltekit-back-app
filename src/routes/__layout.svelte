<script context="module" lang="ts">
	export async function load({ session }) {
		console.log('layout load', session.cookie);
		return {
			props: { cookie: session.cookie }
		};
	}
</script>

<script lang="ts">
	import { hue } from '$lib/theme';

	$: console.log('layout', $hue);
</script>

<slot />
