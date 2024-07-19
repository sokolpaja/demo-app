<script lang="ts">
	import { getCount } from '$lib/context';

	const count = getCount();
</script>

<section class="border border-green-500 p-6">
	<h3>This is a parent component</h3>
	<p>prop count: {$count}</p>
	<slot />
</section>
