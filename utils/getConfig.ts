import type { IGuild } from '~/interfaces';

export const getConfig = async (url: string, hookUrl: string, guild?: IGuild) => {
  const undrscrdGuildName = guild?.name.replaceAll(' ', '_');
  const fullConfig = useState('fullConfig');
  const msgObject = useState<{
    title: string,
    id: string
  }>('msgObject');
  await fetch(url, {
    method: 'GET',
  }).then(response => response.json())
    .then(async (res) => {
      if (!res.content.includes(undrscrdGuildName)) {
        await createConfigMessage(hookUrl);
        await fetch(res.attachments[0].url, {
          method: 'GET',
        }).then(x => x.json()).then(configJson => fullConfig.value = configJson);
      }
      if (res.content.includes(undrscrdGuildName)) {
        msgObject.value = {
          id: res.content?.match(`(?<=,?${undrscrdGuildName}_config.json:\\s)(\\d,?)+(?=\\.|,)`)?.[0],
          title: res.content?.match(`(${undrscrdGuildName}_config.json)`)?.[0].replace('.json', '_file'),
        };
        const message = await fetch(`${hookUrl}/messages/${msgObject.value.id}`, {
          method: 'GET',
        }).catch(err => err).then(x => x.json());

        if (message.attachments !== undefined) {
          await fetch(message.attachments[0].url, {
            method: 'GET',
          }).then(x => x.json()).then(configJson => fullConfig.value = configJson);
        }
      }
    });
};
