<script setup lang="ts">

</script>

<template>
  <div class="header">
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/commands">
      Commands
    </NuxtLink>
    <NuxtLink to="https://echodev.sh">
      Dev Homepage
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.router-link-exact-active {
  color: #ffa500;
  background-color: #303030;
  border-radius: 10px;
}
a {
  font-size: 2rem;
  padding: 0.5rem;
  color: #f5f5f5;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}
</style>
