<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, async () => await queryContent(route.path).where({ title: route.path }).findOne());
</script>

<template>
  <div :class="route.path">
    <Sidebar />
    <div v-if="page" class="Content">
      <ContentDoc v-if="page.body" :value="page" />
    </div>
    <ToTop />
  </div>
</template>

<style scoped lang="scss">
.Body {
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  @media (max-width: 768px) {
    width: 95vw;
  }
}
.\/ {
  display: flex;
  justify-content: center;
}
.\/commands {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 0px 2%;
  justify-items: center;
  word-break: break-all;
  grid-template-areas:
    "Sidebar Content";
  @media (max-width: 768px) {
    grid-template-columns: 0.4fr 1fr;
  }
}
.Content {
  grid-area: Content;
  justify-self: start;
}
</style>
