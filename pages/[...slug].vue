<script setup lang="ts">
const { page } = useContent();

useContentHead(page);
</script>

<template>
  <div :class="$route.path">
    <Sidebar />
    <ContentDoc :value="page" path="/commands" class="Content" />
  </div>
</template>

<style scoped lang="scss">
.Body {
  margin-right: 10rem;
  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
}
.\/ {
  display: flex;
  justify-content: center;
  .sidebar {
    display: none;
  }
}
.\/commands {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 0.2fr 1.8fr;
  grid-template-rows: 1fr;
  gap: 0px 2%;
  grid-template-areas:
    "Sidebar Content";
  @media (max-width: 768px) {
    grid-template-columns: 0.4fr 1fr;
  }
}
h2 {
  color: #ffa500;
}
a {
  color: #ffa500;
}
</style>
