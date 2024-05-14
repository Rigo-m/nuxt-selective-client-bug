<template>
  <div>
    {{ count }}
    <button @click="updateCount">Update count</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const updateCount = () => (count.value += 1);
</script>

<style scoped></style>
