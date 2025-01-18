<script setup>
const route = useRoute();
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=876937fd&i=${route.params.movieId}`,
  {
    pick: ["Plot", "Title", "Poster"],
    key: `/movies/${route.params.movieId}`,
    onResponse({ request, response }) {
      console.log(response._data);
      if (response._data.Error === "Incorrect IMDb ID.") {
        showError({ statusCode: 404, statusMessage: "Page not found1" });
      }
    },
    server: true,
  },
);
useHead({
  title: data.value.Title,
  meta: [
    {name: "description", content: data.value.Plot},
    {name: "og:description", content: data.value.Plot},
    {name: "og:image", content: data.value.Poster},
    {name: "twitter:card", content: 'summary_large_image'},
  ]
})
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
