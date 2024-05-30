import type { IGuild } from '~/interfaces';

export const saveConfig = async (hookUrl: string) => {
  const fullConfig = useState('fullConfig');
  const chosenGuild = useState<IGuild>('chosenGuild');
  const msgObject = useState<{
    title: string,
    id: string
  }>('msgObject');
  const saving = useState<boolean>('saving', () => false);
  const formdata = new FormData();
  formdata.append('file', new Blob([JSON.stringify(fullConfig.value)], { type: 'application/json' }), msgObject.value.title.replace('_file', '.json'));
  formdata.append('payload_json', JSON.stringify({ content: `${msgObject.value.title} ${chosenGuild.value.id}` }));
  saving.value = true;
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
    }).then(() => saving.value = false);
  });
};
