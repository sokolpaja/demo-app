<script lang="ts">
	import WrapComponent from '$lib/components/WrapComponent.svelte';

	const name = 'Sokol Paja';
</script>

<div class="home">
	<h1>Welcome to SvelteKit, {name}</h1>
	<p>Visit <a href="/">Home Page</a></p>
	<p>Visit <a href="/calculator">calculator</a></p>
	<p>Visit <a href="/global-state">Global State</a></p>

	<hr />

	<h3>Wrap the component</h3>

	<WrapComponent>
		<h4>This h4 is the child of the WrapComponent</h4>
	</WrapComponent>
</div>

<style scoped>
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24px;
		max-width: 1200px;
		margin: 0 auto;
		border-radius: 12px;
		background-color: rgb(237, 235, 235);
	}
</style>
