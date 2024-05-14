<template>
  <div>
    <Mycomponent v-for="n in howMany" :key="n + howMany" :id="n + howMany" />
    <NuxtLink to="/test">Test</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const howMany = ref(6);
</script>

<style scoped></style>
