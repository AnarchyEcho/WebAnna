<script lang="ts" setup>
import type { IGuild } from '~/interfaces';

const validGuilds = useState<IGuild[]>('validGuilds');
</script>

<template>
  <div class="guildSelect">
    <GuildComponent v-for="guild in validGuilds" :key="guild.id" :guild="guild" />
  </div>
</template>

<style scoped lang="scss">
.guildSelect {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}
</style>
