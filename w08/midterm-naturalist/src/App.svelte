<script>
  const baseUrl="https://api.inaturalist.org/v1/";
  let query = ""
  let searchResults = [];
  let image = "";

  async function getPlaces() {
    const response = await fetch(`${baseUrl}places/autocomplete?q=${query}`);
    const data = await response.json();
    searchResults = data.results;
    return searchResults;
  }

  async function getImage(e) {
    const response = await fetch (`${baseUrl}identifications?current=true&place_id=${e.target.dataset.id}&order=desc&order_by=created_at`);
    const data = await response.json();
    image = data.results.observation.taxon.default_photo.url;
    // console.log(e.target.dataset.id)
    return image;
    }
</script>

<main>
  <form on:submit|preventDefault={getPlaces}>
    <label for="place">Search for a place: </label>
    <input name="place" type="search" bind:value={query}  placeholder="Yellowstone">
    <button>Search</button>
  </form>
  <ul>
{#each searchResults as place}
  <li><a on:click|preventDefault={getImage} data-id={place.id} href="#">{place.name} - {place.id}</a></li>
{/each}
</ul>
</main>

<style>
  main {
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-top: 1rem;
    padding: 0.5rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.5rem;
  }
  li {
    list-style-type: none;
  }
</style>
