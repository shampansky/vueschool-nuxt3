<script setup lang="ts">

const route = useRoute()

const {data} = useAsyncData(`/movies/${route.params.movieId}`, () => {
  return $fetch(`http://www.omdbapi.com/?apikey=876937fd&i=${route.params.movieId}`)
})
</script>

<template>
  <pre>
    {{data?.Title}}
  </pre>
</template>
