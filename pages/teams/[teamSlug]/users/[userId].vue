<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>Route parameters</h1>
  <ul>
    <li>Team: {{route.params.teamSlug}}</li>
    <li>User: {{route.params.userId}}</li>
  </ul>
</template>
