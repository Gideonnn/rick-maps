<template>
  <div class="flex-container">
    <aside class="sidebar">
      <slot name="sidebar">Placeholder</slot>
    </aside>

    <section class="main">
      <slot name="main">Placeholder</slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>

<style scoped>
.flex-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  background-color: blue;
  flex: 1;
  max-width: 300px;
}

.main {
  background-color: red;
  flex: 1;
}
</style>
