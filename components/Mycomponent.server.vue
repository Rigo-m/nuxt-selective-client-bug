<template>
  <div>
    <div>{{ data!.id }} - {{ random!.test }}</div>
    <div>
      <Inclient nuxt-client :key="id" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ id: number }>();
const { data } = await useFetch<{ id: string }>(
  `https://jsonplaceholder.typicode.com/posts/${props.id}`,
);
const { data: random } = await useFetch("/api/test");
</script>
