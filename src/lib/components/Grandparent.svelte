<script lang="ts">
	import { getCount, setCount } from '$lib/context';

	setCount();
	const count = getCount();

	function updateCount(event: WheelEvent) {
		event.deltaY < 0 ? ($count += 1) : ($count -= 1);
	}
</script>

<section class="border p-8 border-blue-500" on:wheel={updateCount}>
	<h2>This is a GrandParent Component</h2>
	<p>count: {$count}</p>
	<hr />

	<slot />
</section>
