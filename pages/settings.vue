<script lang="ts" setup>
import type { IConfig, IGuild } from '~/interfaces';
const config = useRuntimeConfig();
const { user } = useUserSession();
const baseUrl = 'https://discordapp.com/api';
const hookUrl = `${baseUrl}/webhooks/${config.public.annaWebhookId}/${config.public.annaWebhookToken}`;

const confIdList = useState('confIdList');
const msgObject = useState<{
  title: string,
  id: string
}>('msgObject');
const fullConfig = useState<IConfig | undefined>('fullConfig');
const validGuilds = useState<IGuild[] | undefined>('validGuilds');
const chosenGuild = useState<IGuild | undefined>('chosenGuild');
const goBack = () => {
  chosenGuild.value = undefined;
  fullConfig.value = undefined;
};

const body = reactive({
  content: 'default',
  username: null,
  avatar_url: null,
  embeds: null,
});

const userProfile = async () => {
  return await fetch(`${baseUrl}/users/@me/guilds`, {
    method: 'GET',
    headers: {
      authorization: `${user.value?.tokens.token_type} ${user.value?.tokens.access_token}`,
    },
  }).then(x => x.json()).then((x: IGuild[]) => {
    if (x) {
      return x.filter((y: IGuild) => (y.permissions & 0x10) === 0x10);
    }
  });
};

await callOnce(async () => {
  validGuilds.value = await userProfile();
  confIdList.value = await getConfigList(`${hookUrl}/messages/1233416684518244373`);
});
</script>

<template>
  <div>
    <Head>
      <Title>Settings</Title>
    </Head>

    <GuildSelect v-if="!chosenGuild" />
    <div v-else>
      <div style="color: #ffa500; font-weight: bold; cursor: pointer;" @click="goBack">
        {{ '<' }} Back to server selection.
      </div>
      <div
        @click="async () => {
          await getConfig(`${hookUrl}/messages/1233416684518244373`, hookUrl, chosenGuild as IGuild).catch(async () => {
            await createConfigMessage(hookUrl).then(async () => await getConfig(`${hookUrl}/messages/1233416684518244373`, hookUrl, chosenGuild as IGuild));
          });
        }"
      >
        Get config.
      </div>
      <div
        @click="saveConfig(hookUrl)"
      >
        Save config.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Body {
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  @media (max-width: 768px) {
    width: 95vw;
  }
}
</style>
