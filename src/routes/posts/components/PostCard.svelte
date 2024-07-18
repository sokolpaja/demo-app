<script lang="ts">
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	interface Post {
		id: number;
		userId: number;
		title: string;
		body: string;
	}

	export let post: Post;
	export let i: number;
</script>

<a
	href={`/posts/${post.id}`}
	class="flex flex-col w-[500px] gap-3 border rounded-md shadow-md p-4"
	in:fly={{
		y: 220,
		duration: 1500,
		delay: i * 200
	}}
>
	<h2>title: {post.title}</h2>
	<p>{post.body}</p>
</a>
