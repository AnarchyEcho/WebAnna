<script lang="ts" setup>
import type { IGuild } from '~/interfaces';

const config = useRuntimeConfig();
const baseUrl = 'https://discordapp.com/api';
const hookUrl = `${baseUrl}/webhooks/${config.public.annaWebhookId}/${config.public.annaWebhookToken}`;

const validGuilds = useState<IGuild[]>('validGuilds');
const chosenGuild = useState<IGuild>('chosenGuild');

const setGuild = (guild: IGuild) => {
  chosenGuild.value = guild;
};
</script>

<template>
  <div>
    <div v-for="guild in validGuilds" :key="guild.id">
      <div
        @click="async () => {
          setGuild(guild);
          await getConfig(`${hookUrl}/messages/1233416684518244373`, hookUrl, chosenGuild as IGuild).catch(async () => {
            await createConfigMessage(hookUrl).then(async () => await getConfig(`${hookUrl}/messages/1233416684518244373`, hookUrl, chosenGuild as IGuild));
          });}"
      >
        <p>{{ guild.name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
div {
  width: fit-content;
}
</style>
