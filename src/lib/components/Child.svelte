<script lang="ts">
	import { getCount } from '$lib/context';

	const count = getCount();
</script>

<section class="border p-4">
	<h6>This is a child component</h6>
	<p>child props: count: {$count}</p>
</section>
