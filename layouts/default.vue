<script setup lang="ts">
const isLoggedIn = useIsLoggedIn();
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://google.com">google</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
    <a @click.prevent="isLoggedIn = false" href="#" v-else>Logout</a>
  </nav>
  test
  <slot></slot>
</template>
