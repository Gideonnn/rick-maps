<template>
  <div class="wrapper">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LMarker, LPopup, LTileLayer, LTooltip } from 'vue2-leaflet';

export default {
  name: 'Example',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      zoom: 13,
      center: latLng(51.69917, 5.30417),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      currentCenter: null,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  created() {
    this.currentCenter = this.center;
    this.update();
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
      this.update();
    },
    centerUpdate(center) {
      this.currentCenter = center;
      this.update();
    },
    update() {
      this.$emit('update', {
        center: this.currentCenter,
        zoom: this.currentZoom,
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
</style>

<style>
.leaflet-control-attribution {
  display: none;
}
</style>
