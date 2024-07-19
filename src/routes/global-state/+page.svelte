<script lang="ts">
	import Child from '$lib/components/Child.svelte';
	import Grandparent from '$lib/components/Grandparent.svelte';
	import Parent from '$lib/components/Parent.svelte';
</script>

<section class="flex flex-col gap-4 justify-center items-center border p-4 mx-auto max-w-lg">
	<h2>This is an example of Prop Drilling (bad state management)</h2>
	<hr />
	<Grandparent>
		<Parent>
			<Child />
		</Parent>
	</Grandparent>
	<!-- these is a bug when this one is duplicated because each uses one store and not the context, so if i update on the first one it updates in the other one -->
	<Grandparent>
		<Parent>
			<Child />
		</Parent>
	</Grandparent>
</section>
