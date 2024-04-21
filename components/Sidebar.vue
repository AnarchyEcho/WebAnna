<script setup lang="ts">
const { toc } = useContent();
</script>

<template>
  <nav class="sidebar">
    <div
      v-for="link in toc.links"
      :key="link.id"
    >
      <NuxtLink
        :to="`#${link.id}`"
        :class="{'active-link': $route.hash.replace('#', '') === link.id}"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.active-link {
  color: #ffa500;
  background-color: #303030;
  border-radius: 10px;
}
a {
  font-size: 2rem;
  padding: 0.5rem;
  color: #f5f5f5;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}
.sidebar {
  position: sticky;
  top: 2rem;
  max-height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
  grid-area: Sidebar;
}
</style>
