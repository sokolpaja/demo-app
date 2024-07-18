<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section class="w-full mx-auto flex justify-center">
	<div class="flex flex-col px-8 gap-3 max-w-xl justify-center items-center">
		<h1>Post Details</h1>

		<h3>{data.post.title}</h3>
		<p>{data.post.body}</p>
	</div>
</section>
