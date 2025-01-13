<script setup>
const route = useRoute();
const { data } = useFetch(
  `http://www.omdbapi.com/?apikey=876937fd&i=${route.params.movieId}`,
  {
    pick: ["Title"],
    key: `/movies/${route.params.movieId}`,
  },
);
/*
const { data } = useAsyncData(
  `/movies/${route.params.movieId}`,
  () => {
    return $fetch(
      `http://www.omdbapi.com/?apikey=876937fd&i=${route.params.movieId}`,
    );
  },
  {
    server: false,
    pick: ["Title"],
    // transform(data) {
    //   return {
    //     Plot: data.Plot,
    //     Title: data.Title,
    //   };
    // },
  },
);
*/
</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
