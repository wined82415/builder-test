<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav class="flex items-center flex-wrap">
        <RouterLink class="block w-full" to="/">RenderView</RouterLink>
        <RouterLink class="block w-full" to="/structured-data">StructuredDataView</RouterLink>
        <RouterLink class="block w-full" to="/figma-to-builder">Figma to Builder</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
