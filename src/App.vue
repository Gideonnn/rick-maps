<template>
  <base-layout>
    <template v-slot:main>
      <poster-map />
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from './components/BaseLayout.vue';
import PosterMap from './components/PosterMap.vue';

export default {
  name: 'App',
  components: {
    PosterMap,
    BaseLayout,
  },
};
</script>

<style></style>
