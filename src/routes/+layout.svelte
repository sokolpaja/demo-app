<script>
	import '../app.css';
</script>

<header class="flex justify-between px-8 py-4 w-full shadow-sm shadow-white mb-4">
	<div>Svelte App</div>
	<nav>
		<a href="/" class="px-2 py-2.5 hover:bg-stone-200 rounded-md">Home</a>
		<a href="/calculator">Calculator</a>
		<a href="/posts">Posts</a>
	</nav>
	<button class="px-4 py-1 bg-blue-600 rounded-md text-white">Click</button>
</header>
<slot />
