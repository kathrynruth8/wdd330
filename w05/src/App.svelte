<script>
	import Post from './lib/Post.svelte';
	let name = 'world';
	let posts = [];
  let filteredPosts = [];
  let query = '';
	const url = 'https://dummyjson.com/posts/'
	async function getPosts(url) {
		const response = await fetch(url);
    let data = await response.json();
    data = data.posts
    return data;
	}
	async function init() {
    posts = await getPosts(url);
    filteredPosts = posts;
	}
  
  function filterPost(post) {
    return post.title.includes(query) || post.body.includes(query) || post.tags.includes(query);
  }

  function searchHandler() {
    console.log(query);
    // filter posts 
    if (query === '') {
      filteredPosts = posts;
    }
    else {
      filteredPosts = posts.filter(filterPost);
    }
  }
	
	init();
</script>

<main>
<h1>Hello!</h1>
<section class="search">
  <input type="search" bind:value={query}>
  <button on:click={searchHandler}>Search</button>
</section>
{query}
{#each filteredPosts as post}
	<Post post={post} />
	<!-- { JSON.stringify(post) } -->
{/each}
</main>

<style>
	main {
		font-family: courier;
	}
</style>

