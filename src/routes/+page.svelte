<script lang="ts">
	const name = 'Sokol Paja';
</script>

<div class="home">
	<h1>Welcome to SvelteKit, {name}</h1>
	<p>Visit <a href="/">Home Page</a></p>
	<p>Visit <a href="/calculator">calculator</a></p>
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
		background-color: rgb(204, 201, 200);
	}
</style>
