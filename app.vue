<script setup>
useHead({
  // title: 'My movie site',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My movie site` : 'My movie site'
  }
})
</script>
<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://google.com">google</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>
