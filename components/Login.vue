<script setup lang="ts">
const { loggedIn, user, clear } = useUserSession();

const baseUrl = 'https://discordapp.com/api';
const userProfile = async () => {
  return await fetch(`${baseUrl}/users/@me/guilds`, {
    method: 'GET',
    headers: {
      authorization: `${user.value?.tokens.token_type} ${user.value?.tokens.access_token}`,
    },
  }).then(x => x.json());
};
</script>

<template>
  <div v-if="loggedIn">
    <button @click="userProfile">
      Get Profile
    </button>
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
