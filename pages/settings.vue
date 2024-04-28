<script lang="ts" setup>
import type { IConfig } from '~/interfaces';
const config = useRuntimeConfig();
const hookUrl = `https://discordapp.com/api/webhooks/${config.public.annaWebhookId}/${config.public.annaWebhookToken}`;

const msgObject = useState<{
  title: string,
  id: string
}>('msgObject');
const fullConfig = useState<IConfig>('fullConfig');

const saveConfig = async () => {
  const formdata = new FormData();
  formdata.append('file', new Blob([JSON.stringify(fullConfig.value)], { type: 'application/json' }), msgObject.value.title.replace('_file', '.json'));
  formdata.append('payload_json', JSON.stringify({ content: msgObject.value.title }));
  await fetch(`${hookUrl}/messages/${msgObject.value.id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      content: msgObject.value.title,
      attachments: [],
    }),
  }).then(async () => {
    await fetch(`${hookUrl}/messages/${msgObject.value.id}`, {
      method: 'PATCH',
      body: formdata,
    });
  });
};

const getConfig = async (url: string) => {
  await fetch(url, {
    method: 'GET',
  }).then(response => response.json())
    .then(async (res) => {
      msgObject.value = {
        id: res.content?.match('(?<=Echo_Chamber_config.json:\\s)(\\d,?)+(?=\\.|,)')?.[0],
        title: res.content?.match('(Echo_Chamber_config.json)')?.[0].replace('.json', '_file'),
      };
      const message = await fetch(`${hookUrl}/messages/${msgObject.value.id}`, {
        method: 'GET',
      }).then(x => x.json());
      if (message.attachments !== undefined) {
        await fetch(message.attachments[0].url, {
          method: 'GET',
        }).then(x => x.json()).then(configJson => fullConfig.value = configJson);
      }
    });
};

const body = reactive({
  content: 'default',
  username: null,
  avatar_url: null,
  embeds: null,
});
await getConfig(`${hookUrl}/messages/1233416684518244373`);

</script>

<template>
  <div>
    <Head>
      <Title>Settings</Title>
    </Head>

    Settings page for Anna, WIP, soon you will be able to change the bots config here for your chosen server.
    <!-- <div
      @click="async () => {
        await getConfig(`${hookUrl}/messages/1233416684518244373`);
      }"
    >
      Get config.
    </div>
    <div
      @click="saveConfig()"
    >
      Save config.
    </div> -->
  </div>
</template>

<style>

</style>
