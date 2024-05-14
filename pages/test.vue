<template>
  <div>
    <Mycomponent v-for="n in howMany" :key="n + howMany" :id="n" />
    <NuxtLink to="/">Index</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const howMany = ref(6);
</script>

<style scoped></style>
