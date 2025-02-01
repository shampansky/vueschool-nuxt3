<script setup lang="ts">
const user = useUser();
</script>

<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://google.com">google</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
    <a @click.prevent="user.isLoggedIn = false" href="#" v-else>Logout</a>
  </nav>
  test
  <slot></slot>
</template>
