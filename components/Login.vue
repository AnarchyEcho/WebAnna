<script setup lang="ts">
const { loggedIn, clear } = useUserSession();
</script>

<template>
  <div v-if="loggedIn">
    <button @click="clear(); navigateTo('/')">
      Logout
    </button>
  </div>
  <div v-else>
    <button @click="navigateTo('/auth/discord', {external: true})">
      Login
    </button>
  </div>
</template>

<style scoped lang="scss">
button {
  color: #fefefe;
  font-size: large;
  background-color: #404040;
  border-radius: 10px;
  border-color: #ffa500;
  padding: 0.5rem;
  &:hover {
    background-color: #353535;
  }
  @media (max-width: 768px) {
    padding: 0;
    font-size: 1rem;
  }
}
</style>
