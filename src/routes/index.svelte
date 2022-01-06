<script lang="ts">
	import { hue } from '$lib/theme';

	$: console.log('layout', $hue);
</script>

<h1>Welcome to SvelteKit</h1>
<div>HUE: {$hue}</div>
