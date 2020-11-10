<template>
  <div>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet rounded="lg" class="pa-md-3">
          <div class="outer">
            <div class="inner">
              <poster-map @update="onUpdate" />
            </div>
          </div>
        </v-sheet>
      </v-col>

      <!-- <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268"></v-sheet>
      </v-col> -->
    </v-row>

    <v-row>
      <v-col offset-md="2" cols="12" sm="8">
        <v-sheet rounded="lg" class="pa-md-3">
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>center: {{ this.mapCenter }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>zoom: {{ this.mapZoom }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PosterMap from '@/components/PosterMap.vue';

export default {
  name: 'Home',
  components: {
    PosterMap,
  },
  data() {
    return {
      mapCenter: null,
      mapZoom: null,
    };
  },
  methods: {
    onUpdate({ center, zoom }) {
      this.mapCenter = center;
      this.mapZoom = zoom;
    },
  },
};
</script>

<style lang="scss" scoped>
// https://ratiobuddy.com/
.outer {
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: (620 / 877) * 100%;
  }

  > .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
