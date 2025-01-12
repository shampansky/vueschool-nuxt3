<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <h1>
    {{route.params.movieId}}
  </h1>
</template>
