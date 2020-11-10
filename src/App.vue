<template>
  <v-app>
    <NavBar :routes="routes" />

    <v-main class="grey lighten-3">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';
import { routes } from '@/router';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    routes,
  }),
};
</script>
