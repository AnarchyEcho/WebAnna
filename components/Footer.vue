<script setup lang="ts">
const gitUrl = 'https://github.com/AnarchyEcho';
</script>

<template>
  <div class="footer">
    <p style="width: 150px;">
      &copy; {{ `Copyright 2024 - ${new Date().getFullYear()}` }} <NuxtLink :href="gitUrl" target="_blank" rel="noreferrer">
        Andrè Hagen
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #252525;
  padding: 0.1rem 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
}
a {
  color: #ffa500;
}
</style>
