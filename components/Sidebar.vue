<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
</script>

<template v-if="$route.path === 'commands'">
  <nav v-if="data" class="sidebar">
    <div
      v-for="link in data.body?.toc?.links"
      :key="link.id"
    >
      <NuxtLink
        :to="`#${link.id}`"
        :class="{'active-link': $route.hash.replace('#', '') === link.id, 'treeParent': true}"
      >
        > {{ link.text }}
      </NuxtLink>
      <div
        v-for="child in link.children"
        :key="child.id"
      >
        <NuxtLink
          :to="`#${child.id}`"
          :class="{'active-link': $route.hash.replace('#', '') === child.id, 'treeChild': true}"
        >
          \ > {{ child.text }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.active-link {
  color: #ffa500 !important;
}
a {
  color: #f5f5f5;
}
.treeParent {
  font-size: 1.3rem;
  padding: 0.5rem;
  color: #f5f5f5;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}
.treeChild {
  font-size: 1rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
}
.sidebar {
  position: sticky;
  top: 2rem;
  max-height: 90vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
  margin-top: 1rem;
  grid-area: Sidebar;
  div {
    width: 100%;
    border-bottom: 5px solid #303030;
    div {
      margin: 1rem 0 0.4rem 1rem;
      border: 0;
      @media (max-width: 768px) {
        margin: 0.3rem 0 0.2rem 0.3rem;
      }
    }
  }
}
</style>
