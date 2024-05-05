<script setup lang="ts">
import { type IGuild } from '../interfaces';
const props = defineProps<{
  guild: IGuild,
}>();
const config = useRuntimeConfig();
const baseUrl = 'https://discordapp.com/api';
const hookUrl = `${baseUrl}/webhooks/${config.public.annaWebhookId}/${config.public.annaWebhookToken}`;

const chosenGuild = useState<IGuild>('chosenGuild');
const img = useImage();
const guildPic = props.guild.icon !== null ? img(`https://cdn.discordapp.com/icons/${props.guild.id}/${props.guild.icon}`) : '/discordyellow.png';

const setGuild = (guild: IGuild) => {
  chosenGuild.value = guild;
};
</script>

<template>
  <div
    class="container"
    @click="async () => {
      setGuild(guild);
      await getConfig(`${hookUrl}/messages/1233416684518244373`, hookUrl, chosenGuild as IGuild);
    }"
  >
    <div class="image">
      <NuxtImg :src="guildPic" width="120px" height="120px" />
    </div>
    <div class="name">
      <p>{{ guild.name }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  cursor: pointer;
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-auto-rows: 0.1fr 0.6fr;
  grid-template-columns: 150px;
  grid-template-rows: 0.1fr 0.6fr;
  gap: 0px 0px;
  grid-template-areas:
    "image"
    "name";
  justify-items: center;
  align-items: center;
  padding-top: 10px;
  border: 2px solid #222;
  &:hover {
    border: 2px solid #ffa500;
    border-radius: 10px;
  }
}
.image {
  grid-area: image;
  img {
    border-radius: 100%;
  }
}
.name {
  grid-area: name;
  max-width: 150px;
  text-align: center;
}
</style>
