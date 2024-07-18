<script lang="ts">
	import { onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import PostCard from './components/PostCard.svelte';
	type Post = {
		id: number;
		userId: number;
		title: string;
		body: string;
	};
	let posts: Post[] = [];
	let search = '';

	const fetchPosts = () => {
		try {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => (posts = json));
		} catch (error) {
			console.log('🚀 ~ fetchPosts ~ error:', error);
		}
	};

	onMount(() => {
		console.log('posts on Mount', posts);
		fetchPosts();
	});

	onDestroy(() => {
		console.log('posts  onDestroy', posts);
	});

	beforeUpdate(() => console.log('beforeUpdate ran'));
	afterUpdate(() => console.log('afterUpdate ran'));

	const handleSearch = () => {
		console.log('handleSearch');
	};
</script>

<section class="w-full flex flex-col items-center justify-center gap-6 p-8">
	<h1>JSON Placeholder Posts</h1>

	<!-- search demo -->
	<h3>Searched: {search}</h3>
	<div class="flex overflow-hidden rounded-md border">
		<input type="text" class="border min-w-80 p-2" bind:value={search} />
		<button class="px-4 py-2.5 bg-green-600 text-white" on:click={handleSearch}>Search</button>
	</div>

	<div class="flex flex-col gap-8 max-w-[1200px] justify-center items-center">
		{#each posts as post, i (post.id)}
			<PostCard {post} {i} />
		{/each}
	</div>
</section>
