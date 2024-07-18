import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { postId: string } }) {
	console.log('🚀 ~ load ~ params:', params);
	if (params.postId) {
		type Post = {
			id: number;
			userId: number;
			title: string;
			body: string;
		};
		let post: Post;

		const fetchPosts = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.postId);
				return (post = await response.json());
			} catch (error) {
				console.log('🚀 ~ fetchPosts ~ error:', error);
				return post;
			}
		};

		return {
			post: await fetchPosts()
		};
	}

	error(404, 'Not found');
}
