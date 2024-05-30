import type { IGuild } from '~/interfaces';

export const createConfigMessage = async (hookUrl: string) => {
  const idLink = 'https://discordapp.com/api/webhooks/1232738440949268501/nWYyCWB-nf_f6GeA9rlFOXRT54t2wsu7Q57TUXuA5_RnCHH7ga1i2h7vxdUOZX6_nLX5/messages/1233416684518244373';
  const chosenGuild = useState<IGuild>('chosenGuild');
  const msgObject = useState<{
    title: string,
    id: string
  }>('msgObject');
  const cleanName = chosenGuild?.value.name.replaceAll(' ', '_').replaceAll(/[^a-zA-Z0-9_]/g, '');
  await fetch(`${hookUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: null,
      avatar_url: null,
      content: `${cleanName}_config_file ${chosenGuild.value.id}`,
    }),
  }).then(() => {
    setTimeout(async () => {
      await fetch(idLink, {
        method: 'GET',
      }).then(response => response.json()).then((res) => {
        msgObject.value = {
          id: res.content?.match(`(?<=,?${cleanName}_config.json:\\s)(\\d,?)+(?=\\.|,)`)?.[0],
          title: res.content?.match(`(${cleanName}_config.json)`)?.[0].replace('.json', '_file'),
        };
      });
    }, 1000);
  });
};
