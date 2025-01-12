<script setup>
const query = ref('')
const movies = ref([])
async function search() {
  const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=876937fd&s=${query.value}`)
  movies.value = Search
}
</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button>submit</button>
    </form>

    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">
        {{ movie.imdbID }}
        <NuxtLink :to="{name: 'movies-movieId', params: {movieId: movie.imdbID}}">
          <img :src="movie.Poster" :alt="movie.title">
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
